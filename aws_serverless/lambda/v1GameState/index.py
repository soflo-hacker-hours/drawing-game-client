import json
import uuid

from boto3.dynamodb.conditions import Key

from LambdaDeps.misc import deep_get
from LambdaDeps.times import iso_to_cookie
from LambdaDeps.request import get_session, get_path, add_expires_iso
from LambdaDeps.response import response
from LambdaDeps.deployment import table_name

def room_data(table, room):
    pass

def player_status(table, sess):
    pass

def new_session(table, room_id, id_=0):
    new_token = str(uuid.uuid4())
    expires = add_expires_iso()
    table.put_item(Item={
      'PK': room_id,
      'SK': new_token,
      'Order': id_,
      'Expires': expires,
    })
    cexpires = iso_to_cookie(expires)
    return response(200, body='{"players": []}', headers={'set-cookie': "Session={}; Expires={}; Secure;".format(new_token, cexpires)})

def get_room_data(table, room_id):
    # Lookup room data.
    q = table.query(KeyConditionExpression=Key('PK').eq(room_id))
    valid = deep_get(q, 'Items', fail=[])
    room_data = {}
    for item in valid:
        room_data[item['SK']] = item
    return room_data

def handler(event, context):
    table = resource('dynamodb').Table(table_name)
    room_id = deep_get(event, 'pathParameters', 'uuid')
    if not room_id:
        return response(400, error="Missing room parameter.")
    room = get_room_data(table, room_id)
    sess = get_session(event, table, room)

    if not sess and not room:
        # New Room, this user is the owner.
        return new_session(table, room_id)

    return response(200, body="{}")
