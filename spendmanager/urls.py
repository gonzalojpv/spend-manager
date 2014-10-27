from django.conf.urls import patterns, include, url
from django.contrib import admin

from django.conf import settings
from django.template import add_to_builtins
import django.template.loader

for tag in settings.TEMPLATE_TAGS:
    add_to_builtins(tag)


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'spendmanager.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    (r'^dash/', include('spendmanager.apps.dashboard.urls')),
    (r'^', include('spendmanager.apps.profiles.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
