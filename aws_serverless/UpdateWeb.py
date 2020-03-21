import os
import mimetypes

from boto3 import resource
from boto3 import client

SKIP_FILES = []

local_prefix = '../src/build'

def remove_s3_web(fsraw, file_store):
    print('--- Removing old files ---')
    dellist = []
    objlist = fsraw.list_objects(Bucket=file_store, Prefix='web/')
    if 'Contents' not in objlist:
        print('--- Nothing found ---')
        return
    for obj in objlist['Contents']:
        key = obj['Key']
        if key.split('/')[-1] in SKIP_FILES:
            print('Skipping {}'.format(key))
            continue
        print(key)
        dellist.append({'Key': key})
    fsraw.delete_objects(Bucket=file_store, Delete={'Objects': dellist})
    print('--- Files removed ---')

def upload_static_files(fs):
    print('--- Uploading new files ---')
    remote_prefix = 'web'
    path = os.walk(local_prefix)
    for node in path:
        dirname = node[0][len(local_prefix):].strip(os.sep)
        for filename in node[2]:
            if filename.split('/')[-1] in SKIP_FILES:
                print('Skipping {}'.format(filename))
                continue
            pathname = os.sep.join((dirname, filename)) if dirname else filename
            lfile = os.sep.join((local_prefix, pathname))
            rfile = '/'.join((remote_prefix, pathname))
            ct = mimetypes.guess_type(lfile)[0]
            print('{} as {}'.format(rfile, ct))
            opts = {}
            if ct:
                opts['ExtraArgs'] = {'ContentType': ct}
            fs.upload_file(lfile, rfile, **opts)
    print('--- Files added ---')

if __name__ == '__main__':
    from base import get_stage, get_s3
    stage = get_stage()
    file_store = get_s3(stage)
    fs = resource('s3').Bucket(file_store)
    fsraw = client('s3')

    print('Updating Web for {}'.format(stage))
    remove_s3_web(fsraw, file_store)
    upload_static_files(fs)
