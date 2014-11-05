from django.conf.urls import patterns, url

urlpatterns = patterns('',
	url(r'^basic/$', 'spendmanager.apps.tiles.views.basic'),
	url(r'^zipcodes/$', 'spendmanager.apps.tiles.views.zipcodes'),
	url(r'^age/$', 'spendmanager.apps.tiles.views.age'),
)
