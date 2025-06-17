# utils/time_utils.py
import pytz
from datetime import datetime

TZ_LOCAL = pytz.timezone("Europe/Zurich")


def to_utc(dt: datetime) -> datetime:
    return dt.astimezone(pytz.utc)


def to_local(dt: datetime) -> datetime:
    return dt.astimezone(TZ_LOCAL)


def fmt_local(dt: datetime, fmt: str = "%Y-%m-%d %H:%M:%S") -> str:
    return to_local(dt).strftime(fmt)


def now_utc() -> datetime:
    """Gibt den aktuellen Zeitpunkt in UTC zurück."""
    return datetime.now(pytz.utc)


def fmt_utc(dt: datetime, fmt: str = "%Y-%m-%d %H:%M:%S") -> str:
    """Formatiert ein datetime-Objekt als UTC-Zeitstempel."""
    return to_utc(dt).strftime(fmt)
