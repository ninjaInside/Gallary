from django.core.exceptions import ImproperlyConfigured

from .base import *


def get_env_variable(var_name):
    try:
        return os.environ[var_name]
    except KeyError:
        err_msg = f'Set {var_name} env variable'
        raise ImproperlyConfigured(err_msg)


SECRET_KEY = get_env_variable('GALLARY_SECRET_KEY')

DEBUG = False

INSTALLED_APPS += ['callforward', 'home.apps.HomeConfig']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'gallary',
        'USER': 'django',
        'PASSWORD': get_env_variable('DATABASE_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'gallary/', 'static/')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'gallary/', 'media/')
