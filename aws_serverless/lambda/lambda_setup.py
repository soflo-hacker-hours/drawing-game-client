from setuptools import setup, find_packages

setup(
  name='DrawGameLambda',
  version='0.0.1',
  packages=find_packages("PythonDeps/python"),
  package_dir={"": "PythonDeps/python"},
  install_requires=[
    'boto3',
  ],
  license='MIT',
  long_description='DrawGame lambda functions for local testing.',
)
