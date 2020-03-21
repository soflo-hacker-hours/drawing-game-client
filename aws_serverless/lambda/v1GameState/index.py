#from LambdaDeps.request import get_session
from LambdaDeps.response import response
#from LambdaDeps.deployment import table_name

def handler(event, context):
    #table = resource('dynamodb').Table(table_name)
    #sess = get_session(event, table)
    return response(200, body="{}")
