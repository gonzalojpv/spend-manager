from django.conf.urls import patterns, url

urlpatterns = patterns('',
        url(r'^basic_stats/$', 'spendmanager.apps.zipcode.views.basic_stats'),
        url(r'^customer_zipcodes/$', 'spendmanager.apps.zipcode.views.customer_zipcodes'),
        url(r'^age_distribution/$', 'spendmanager.apps.zipcode.views.age_distribution'),
        url(r'^gender_distribution/$', 'spendmanager.apps.zipcode.views.gender_distribution'),
        url(r'^payment_distribution/$', 'spendmanager.apps.zipcode.views.payment_distribution'),
        url(r'^category_distribution/$', 'spendmanager.apps.zipcode.views.category_distribution'),
        url(r'^consumption_pattern/$', 'spendmanager.apps.zipcode.views.consumption_pattern'),
        url(r'^cards_cube/$', 'spendmanager.apps.zipcode.views.cards_cube'),
        url(r'^payments_cube/$', 'spendmanager.apps.zipcode.views.payments_cube')
        )
