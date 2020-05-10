from LambdaDeps.request import get_session, get_path
from LambdaDeps.misc import deep_get
from LambdaDeps.response import response
from LambdaDeps.deployment import table_name

def room_data(table, room):
    pass

def player_status(table, sess):
    pass

def new_room():
    pass

def handler(event, context):
    table = resource('dynamodb').Table(table_name)
    room = deep_get(event, 'pathParameters', 'uuid')
    if not room:
        return response(404, error="Missing room.")

    sess = get_session(event, table, room)

    return response(200, body="{}")
