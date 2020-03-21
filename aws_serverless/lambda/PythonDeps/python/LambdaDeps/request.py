from http.cookies import SimpleCookie
from urllib.parse import parse_qsl
from boto3.dynamodb.conditions import Key

import json
import datetime

from LambdaDeps.misc import deep_get
from LambdaDeps.times import now_iso, time_to_iso

def add_expires_iso(when=None):
    if when is None:
        when = datetime.datetime.now()
    return time_to_iso( when + datetime.timedelta(days=30) )

def get_body(event):
    try:
        return dict(parse_qsl(event["body"]))
    except:
        return {}

def get_body_json(event):
    try:
        return json.loads(event["body"])
    except:
        return {}

def get_path(event):
    try:
        return event['pathParameters']
    except:
        return {}

def get_query(event):
    try:
        return event['queryStringParameters']
    except:
        return {}

def get_session(event, table, fail_entry={}):
    entry = None
    valid = deep_get(event, "headers", "Cookie")
    if valid:
        # extract session cookie
        cookies = SimpleCookie()
        cookies.load(valid)
        if 'Session' not in cookies:
            return fail_entry
        cookie = cookies['Session'].value
        # Look up cookie in database
        entry = table.get_item(Key={
            'PK': cookie,
            'SK': 'Cookie'
        })
    valid = deep_get(entry, 'Item')
    if valid:
        now = now_iso()
        if now <= valid['Expires']:
            # renew the expiration
            table.update_item(Key={
                'PK': cookie,
                'SK': 'Cookie'
            }, AttributeUpdates={
                'Expires': {'Value': add_expires_iso() }
            })
            return valid
    return fail_entry
