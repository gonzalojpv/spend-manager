from django.conf.urls import patterns, urls

urlpatterns = patterns('',
        url(r'^categories/$', 'spendmanager.apps.dashboard.views.categories')
        )
