"""
Django settings for spendmanager project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

PROJECT_PATH = os.path.join(BASE_DIR, os.pardir)
PROJECT_PATH = os.path.abspath(PROJECT_PATH)
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'qm6%ud-zs_5@%2e%7jre^-+_akh+&p+s*vl27^vuewer%b6wg$'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'spendmanager.apps.profiles',
    'spendmanager.apps.dashboard',
    'spendmanager.apps.zipcode',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'spendmanager.urls'

WSGI_APPLICATION = 'spendmanager.wsgi.application'

STATIC_PATH = os.path.join(PROJECT_PATH, 'spendmanager','static')

# Additional locations of static files
STATICFILES_DIRS = (
        # Put strings here, like "/home/html/static" or "C:/www/django/static".
        # Always use forward slashes, even on Windows.
        # Don't forget to use absolute paths, not relative paths.
        STATIC_PATH,
    )
TEMPLATE_DIRS = ('templates',)
TEMPLATE_TAGS = ('templatetags.tags_html',)
# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

_enviroment = 'dev'

if _enviroment == 'dev':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'spend',
            'USER': 'postgres',
            'PASSWORD': 'chipi',
            'HOST': 'localhost',
            'PORT': '',
        }
    }

elif _enviroment =='prod':
    DATABASES = {
            'default': {
                 'ENGINE': 'django.db.backends.postgresql_psycopg2',
                 'NAME': 'd30epu8vo4sv6b',
                 'USER': 'xvqjgevagfeacs',
                 'PASSWORD': 'FOlm4Dm3kwc4m5HPsxLDqCqqWD',
                 'HOST': 'ec2-54-83-204-104.compute-1.amazonaws.com',
                 'PORT': '5432',
                }
            }
elif _enviroment == 'local':
    DATABASES = {
            'default': {
                    'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
                }
            }

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'
