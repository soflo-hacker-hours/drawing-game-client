import os
import sys

default_site = os.environ["DRAWINGGAMESITE"]
if not default_site:
    raise Exception('Environment variable DRAGINGGAMESITE must be set.')

def get_stage(default='staging'):
    stage = default
    if len(sys.argv) < 2:
        print('Missing stage. Assuming {}'.format(default))
    else:
        stage = sys.argv[1]
    return stage

def get_s3(stage, site=False):
    if not site:
        site = default_site
    return '{}{}'.format(site, stage)

def get_dynamo(stage, site=False):
    if not site:
        site = default_site
    return '{}{}'.format(site, stage)
