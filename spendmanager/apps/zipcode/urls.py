from django.conf.urls import patterns, url

urlpatterns = patterns('',
        url(r'^basic_stats/$', 'spendmanager.apps.zipcode.views.basic_stats'),
        )
