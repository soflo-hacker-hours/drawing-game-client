import sys

# Globally unique name.
# Should match cloudformation/deploy.py
default_site = 'drawinggame83960ff7b9404fe2a899e05a0da82fc2'

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
