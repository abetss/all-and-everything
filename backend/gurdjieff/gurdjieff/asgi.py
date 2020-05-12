"""
ASGI config for gurdjieff project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

assert 'BUILD_ENV' in os.environ, 'BUILD_ENV not set, don\'t forget to `export BUILD_ENV`'
BUILD_ENV = os.environ['BUILD_ENV']
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gurdjieff.settings.' + BUILD_ENV)

application = get_asgi_application()
