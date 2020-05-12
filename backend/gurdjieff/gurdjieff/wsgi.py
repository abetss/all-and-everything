"""
WSGI config for gurdjieff project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

assert 'BUILD_ENV' in os.environ, 'BUILD_ENV not set, don\'t forget to `export BUILD_ENV`'
BUILD_ENV = os.environ['BUILD_ENV']
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gurdjieff.settings.' + BUILD_ENV)

application = get_wsgi_application()
