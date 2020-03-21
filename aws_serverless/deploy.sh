#!/bin/bash

if [ "$PACKAGEBUCKET" = "" ]; then
  echo 'Please set PACKAGEBUCKET="your_s3_bucket_for_packaging_deployments"'
 exit 1
fi

if [ "$DRAWINGGAMESITE" = "" ]; then
  echo 'Please set PACKAGEBUCKET="your_s3_bucket_for_packaging_deployments"'
 exit 2
fi

sam --help > /dev/null
if [ $? -ne 0 ]; then
  echo "Missing sam. Install AWS Serverless."
  exit 3
fi

if [ "$1" = "" ]; then
  echo "Caution: missing stage argument. Assuming staging."
  STAGE=staging
else
  STAGE=$1
fi

# ensure a build directory is ready to accept files
mkdir -p build

FIRST="sam package --s3-bucket $PACKAGEBUCKET --template-file ./cloudformation/deploy.yaml --output-template-file ./build/deployed$STAGE.yaml"

SECOND="sam deploy --template-file ./build/deployed$STAGE.yaml --stack-name $DRAWINGGAMESITE$STAGE --capabilities CAPABILITY_IAM --parameter-overrides Stage=$STAGE UniqueName=$DRAWINGGAMESITE"

THIRD="python3 UpdateWeb.py $STAGE && `date -Iseconds` > updateweb.txt"

## TODO only run web update if updateweb.txt is newer than random frontend build file

$FIRST && $SECOND && $THIRD
