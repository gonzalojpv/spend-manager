from django.shortcuts import render
from django.shortcuts import render_to_response
from spendmanager.libs.bbva.api import APIS
from django.http import HttpResponse
import json

# Create your views here.

def categories(request):
    api = APIS("merchants_categories", request.GET)
    api.request()
    return HttpResponse(api.response, content_type='application/json')

def zipcodes(request):
    api = APIS("zipcodes", request.GET)
    api.request()
    return HttpResponse(api.response, content_type='application/json')

def tiles(request):
    api = APIS("tiles", request.GET)
    api.request()
    return HttpResponse(api.response, content_type='application/json')

def basic_stats(request):

    api = APIS("basic_stats", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def customer_zipcodes(request):
    
    api = APIS("customer_zipcodes", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def age_distribution(request):

    api = APIS("age_distribution", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def gender_distribution(request):

    api = APIS("gender_distribution", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def payment_distribution(request):

    api = APIS("payment_distribution", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def category_distribution(request):

    api = APIS("category_distribution", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def consumption_pattern(request):

    api = APIS("consumption_pattern", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def cards_cube(request):

    api = APIS("cards_cube", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def payments_cube(request):

    api = APIS("payments_cube", request.GET)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")


