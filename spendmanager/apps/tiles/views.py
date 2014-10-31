from django.shortcuts import render
from django.shortcuts import render_to_response
from spendmanager.libs.bbva.api import APIS
from django.http import HttpResponse
import json

# Tiles views

def basic(request):
	html = "Basic"
	return HttpResponse(html)
	
def zipcodes(request):
	html = "ZipCodes"
	return HttpResponse(html)

def age(request):
	html = "Age"
	return HttpResponse(html)