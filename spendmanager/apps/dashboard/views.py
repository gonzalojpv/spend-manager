from django.shortcuts import render
from django.shortcuts import render_to_response
from spendmanager.libs.bbva.api import APIS
from django.http import HttpResponse
import json

# Create your views here.

def categories(request):
    api = APIS(service_name="/datathon/info/merchants_categories")
    api.request()
    response_json = json.loads(api.response.decode('utf-8'))
    return HttpResponse(json.dumps(response_json), content_type='application/json')
