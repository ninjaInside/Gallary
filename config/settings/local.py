from django.core.exceptions import ImproperlyConfigured

from .base import *


def get_env_variable(var_name):
    try:
        return os.environ[var_name]
    except KeyError:
        err_msg = f'Set {var_name} env variable'
        raise ImproperlyConfigured(err_msg)


SECRET_KEY = get_env_variable('GALLARY_SECRET_KEY')

DEBUG = True

INSTALLED_APPS += ['callforward', 'home.apps.HomeConfig']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'gallary/', 'static/')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'gallary/', 'media/')
