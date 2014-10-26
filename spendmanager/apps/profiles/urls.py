from django.conf.urls import patterns, url

urlpatterns = patterns ('',
        url(r'^$', 'spendmanager.apps.profiles.views.index')
        )
