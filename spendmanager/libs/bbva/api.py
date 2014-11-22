import urllib
import http.client
import base64
import json

class APIS(object):
    def __init__(self, service_name = False, params = {}, method = 'GET'):        
        self.auth = ""
        self.url = "apis.bbvabancomer.com"
        self.headers = {}
        self.params = params
        self.service_name = service_name
        self.method = method
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
        params = urllib.parse.urlencode(self.params)
        conn = http.client.HTTPSConnection(self.url)
        url = self.service_name +"?%s"%params

        conn.request(self.method, url, None, self.headers)
        
        r = conn.getresponse()
        print(url)

        self.response = r.read()
        self.convert_json()

    def convert_json(self):
        response_json = json.loads(self.response.decode('utf-8'))
        self.response = json.dumps(response_json)
