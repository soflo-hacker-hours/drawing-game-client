from datetime import datetime
from datetime import timedelta
from dateutil.parser import parse

session_expiration=14400 # 4 hours
seconds_per_year = 31471200
seconds_per_day = 86400

def iso_to_cookie(time):
    # convert iso time to cookie time string
    return iso_to_time(time).strftime('%a, %d %b %Y %H:%M:%S GMT')

def time_to_iso(time):
    # convert python time to iso time
    return time.isoformat().replace('+00:00','Z')

def iso_to_time(iso):
    return parse(iso)

def now_iso():
    # return current UTC as iso time
    return time_to_iso(datetime.utcnow())

def time_after(time, seconds=None):
    # given python time, return ISO time after given seconds
    if seconds is None:
        seconds = session_expiration
    return time_to_iso(time + timedelta(seconds=seconds))

def iso_diff(late, early):
    return (iso_to_time(late) - iso_to_time(early)).total_seconds()

def iso_after(time, seconds=None):
    # given ISO time, return ISO time after given seconds
    if seconds is None:
        seconds = session_expiration
    return time_after(iso_to_time(time), seconds)
