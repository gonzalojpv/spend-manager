import urllib
import httplib
import base64
import json

class APIS(object):
    def __init__(self, service_name, params, method = 'GET'):        
        self.auth = ""
        self.url = "apis.bbvabancomer.com"
        self.headers = {}
        self.service_name = service_name
        self.method = method

        self.parse_params(params)
        self.header()

        self.response = []

    def header(self):
        self.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': 'ES',
            'Authorization': 'Basic YXBwLmJidmEuc3BlbmQtbWFuYWdlcjplMTc1ZTI2NWI2NDhmYWY2MGMxOTI0YmE5Mjk0YTQ4MGU5MTUyYjVi',            
        }

    def request(self):
        params = urllib.urlencode(self.params)
        conn = httplib.HTTPSConnection(self.url)

        url = self.service +"?%s"%params

        conn.request(self.method, url, None, self.headers)
        
        r = conn.getresponse()

        self.response = r.read()
        self.convert_json()

    def convert_json(self):
        response_json = json.loads(self.response.decode('utf-8'))
        self.response = json.dumps(response_json)

    def create_request(self):
        
        service = "/datathon/"

        if "zipcode" in self.aux:
            self.service = service + "zipcodes/" + self.aux["zipcode"] + "/" + self.service_name
        elif "lat" in self.aux and "lng" in self.aux:
            self.service = service + "tiles/" + self.aux["lat"] + "/" + self.aux["lng"] + "/" + self.service_name
        else:
            self.service = service + "info/" + self.service_name


    def parse_params(self, params):
        
        self.params = {}
        self.aux = {}
        for index in params:
           if ("zipcode"== index) or ("lat" == index) or ("lng" == index):
               self.aux[index] = params[index]
           else:
               self.params[index] = params[index]

        print(self.params)
        self.create_request()
