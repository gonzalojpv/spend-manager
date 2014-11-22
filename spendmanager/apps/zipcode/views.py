from django.shortcuts import render
from django.http import HttpResponse
from spendmanager.libs.bbva.api import APIS
from spendmanager.apps.zipcode.helpers import Helper
# Create your views here.

def basic_stats(request):
    #http://localhost:8000/zipcode/basic_stats/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET['zipcode'] if request.GET['zipcode'] else ""

    api = APIS( service_name = "/datathon/zipcodes/%s/basic_stats"%zipcode, params = helper.params )
    api.request()

    return HttpResponse(api.response, content_type='application/json')

def customer_zipcodes(request):
    #http://localhost:8000/zipcode/customer_zipcodes/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month&by=incomes
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by", "by"])

    zipcode = request.GET['zipcode'] if request.GET['zipcode'] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/customer_zipcodes"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def age_distribution(request):
    #http://localhost:8000/zipcode/age_distribution/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET['zipcode'] if request.GET['zipcode'] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/age_distribution"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def gender_distribution(request):
    #http://localhost:8000/zipcode/gender_distribution/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode =  request.GET['zipcode'] if request.GET['zipcode'] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/gender_distribution"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def payment_distribution(request):
    #http://localhost:8000/zipcode/payment_distribution/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET["zipcode"] if request.GET["zipcode"] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/payment_distribution"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def category_distribution(request):
    #http://localhost:8000/zipcode/category_distribution/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET["zipcode"] if request.GET["zipcode"] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/category_distribution"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def consumption_pattern(request):
    #http://localhost:8000/zipcode/consumption_pattern/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET["zipcode"] if request.GET["zipcode"] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/consumption_pattern"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def cards_cube(request):
    #http://localhost:8000/zipcode/cards_cube/?zipcode=15390&date_min=20140101&date_max=20140331&group_by=month
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET["zipcode"] if request.GET["zipcode"] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/cards_cube"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")

def payments_cube(request):
    #
    helper = Helper()
    helper.parse_params(request.GET, ["date_min", "date_max", "group_by"])

    zipcode = request.GET["zipcode"] if request.GET["zipcode"] else ""

    api = APIS(service_name = "/datathon/zipcodes/%s/payments_cube"%zipcode, params = helper.params)
    api.request()

    return HttpResponse(api.response, content_type = "application/json")
