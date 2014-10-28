from django.conf.urls import patterns, url

urlpatterns = patterns('',
       url(r'^categories/$', 'spendmanager.apps.dashboard.views.categories'),
       url(r'^zipcodes/$', 'spendmanager.apps.dashboard.views.zipcodes'),
       url(r'^tiles/$', 'spendmanager.apps.dashboard.views.tiles'),
        )
