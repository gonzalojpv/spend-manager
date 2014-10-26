from django.shortcuts import render
from django.shortcuts import render_to_response
from spendmanager.libs.bbva.api import APIS
#import urllib
#import http.client
#import base64

# Create your views here.

def categories(request):
    api = APIS()
    api.request()
    #qparams = {}
    #parqparams =  urllib.parse.urlencode(qparams)

    #conn = http.client.HTTPSConnection('apis.bbvabancomer.com')

    #headers = {}
    #headers['Accept'] = "application/json"
    #headers['Content-Type'] = "application/json"
    #headers['Accept-Language'] = 'ES'
    #headers['Authorization'] = "Basic YXBwLmJidmEuc3BlbmQtbWFuYWdlcjplMTc1ZTI2NWI2NDhmYWY2MGMxOTI0YmE5Mjk0YTQ4MGU5MTUyYjVi" 

    #conn.request('GET', '/datathon/info/merchants_categories', None,headers)
    #r = conn.getresponse()
    #print(r.status)
    #print(r.read())
    return render_to_response('dashboard/index.html')
