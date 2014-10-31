from django.shortcuts import render
from django.http import HttpResponse
from spendmanager.libs.bbva.api import APIS
# Create your views here.

def basic_stats(request):
    qparams = {}
    qparams["date_min"] = "20140101"
    qparams["date_max"] = "20140331"
    qparams["group_by"] = "month"
    api = APIS(
            service_name = "/datathon/zipcodes/15390/basic_stats", 
            params = qparams
            )
    api.request()
    return HttpResponse(api.response, content_type='application/json')
