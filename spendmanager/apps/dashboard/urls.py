from django.conf.urls import patterns, url

urlpatterns = patterns('',
        url(r'^categories/$', 'spendmanager.apps.dashboard.views.categories')
        )
