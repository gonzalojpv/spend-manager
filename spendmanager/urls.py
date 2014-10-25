from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'spendmanager.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    (r'^dash/', include('spendmanager.apps.dashboard.urls')),
    (r'^', include('spendmanager.apps.profiles.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
