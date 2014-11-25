from django.conf.urls import patterns, url

urlpatterns = patterns('',
       url(r'^categories/$', 'spendmanager.apps.dashboard.views.categories'),
       url(r'^zipcodes/$', 'spendmanager.apps.dashboard.views.zipcodes'),
       url(r'^tiles/$', 'spendmanager.apps.dashboard.views.tiles'),
       url(r'^basic_stats/$', 'spendmanager.apps.dashboard.views.basic_stats'),
       url(r'^customer_zipcodes/$', 'spendmanager.apps.dashboard.views.customer_zipcodes'),
       url(r'^age_distribution/$', 'spendmanager.apps.dashboard.views.age_distribution'),
       url(r'^gender_distribution/$', 'spendmanager.apps.dashboard.views.gender_distribution'),
       url(r'^payment_distribution/$', 'spendmanager.apps.dashboard.views.payment_distribution'),
       url(r'^category_distribution/$', 'spendmanager.apps.dashboard.views.category_distribution'),
       url(r'^consumption_pattern/$', 'spendmanager.apps.dashboard.views.consumption_pattern'),
       url(r'^cards_cube/$', 'spendmanager.apps.dashboard.views.cards_cube'),
       url(r'^payments_cube/$', 'spendmanager.apps.dashboard.views.payments_cube'),
        )
