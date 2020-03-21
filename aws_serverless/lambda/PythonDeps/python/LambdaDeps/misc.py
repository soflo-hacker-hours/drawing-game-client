import json

def deep_get(fnc, *args, fail=False):
    if not fnc:
        return fail
    obj = fnc
    for arg in args:
        if not arg in obj or not obj.__getitem__(arg):
            return fail
        obj = obj.__getitem__(arg)
    return obj

class FixDecimal(json.JSONEncoder):
  def default(self, o):
      if type(o).__name__ == 'Decimal':
          return float(o)
      return json.JSONEncoder.default(self, o)

def dynamo2json(dynamo_obj):
    return json.dumps(dynamo_obj, cls=FixDecimal)
