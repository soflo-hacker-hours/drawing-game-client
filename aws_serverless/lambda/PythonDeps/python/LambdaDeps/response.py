import json

def response(code, body="{}", errors=[], error="", headers={}):
    if len(error):
        errors = [error]
    if len(errors):
        body = json.dumps({"errors": errors})
    return {
        "isBase64Encoded": False,
        "statusCode": code,
        "headers": headers,
        "body": body
    }
