from django.shortcuts import render
from django.shortcuts import render_to_response
from spendmanager.libs.bbva.api import APIS
from django.http import HttpResponse
import json

# Create your views here.

def categories(request):
    api = APIS(service_name = "/datathon/info/merchants_categories")
    api.request()
    return HttpResponse(api.response, content_type='application/json')

def zipcodes(request):
    api = APIS(service_name = "/datathon/info/zipcodes")
    api.request()
    return HttpResponse(api.response, content_type='application/json')

def tiles(request):
    api = APIS(service_name = "/datathon/info/tiles")
    api.request()
    return HttpResponse(api.response, content_type='application/json')
