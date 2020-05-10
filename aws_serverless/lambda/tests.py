import os
import json
import unittest

# Set some environment variables that would cause errors if not set
os.environ['AWSDYNAMODB'] = ''
os.environ['AWSS3'] = ''
from v1GameState import index

class DynamoStub(object):
    def __init__(self, db):
        self.db = db
    def Table(self, other):
        return self.db

def call(db,cookie=None,room=None,event=None):
    if event is None:
        if room is None:
            room='DEFAULT'
        event = {
          'pathParameters': {
            'uuid': room
          }
        }
        if cookie is not None:
            event['headers'] = {
              'Cookie': cookie
            }
    context = {}
    index.resource = lambda x: DynamoStub(db)
    return index.handler(event, context)

class Test(unittest.TestCase):

    def _everytime(self, response):
        self.assertFalse(response['isBase64Encoded'])
        self.assertIn('Cookie', response['headers'])
        cookie = response['headers']['Cookie']
        body = json.parse(response['body'])
        return body

    def testNoRoom(self):
        response = call(db={},event={})
        self.assertFalse(response['isBase64Encoded'])
        self.assertEqual(response['statusCode'], 404)
        self.assertEqual(response['headers'], {})
        self.assertIn('room', response['body'])

    def testHostNewRoomNoCookie(self):
        db={}
        response = call(db=db,room='NewRoom')
        body = self._everytime(response)
        self.assertEqual(response['statusCode'], 200)
        body = json.parse(response['body'])
        self.assertEqual(body, {'players': []})

if __name__ == '__main__':
    unittest.main()
