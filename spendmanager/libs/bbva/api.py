import urllib
import http.client
import base64

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
            'Content': 'application/json',
            'Accept-Language': 'ES',
            'Authorization': 'Basic YXBwLmJidmEuc3BlbmQtbWFuYWdlcjplMTc1ZTI2NWI2NDhmYWY2MGMxOTI0YmE5Mjk0YTQ4MGU5MTUyYjVi',            
        }

    def request(self):
        params = urllib.parse.urlencode(self.params)
        conn = http.client.HTTPSConnection(self.url)

        conn.request(self.method, self.service_name, None, self.headers)
        r = conn.getresponse()
        print(r.status)
        if int(r.status) == 200:
            self.response = r.read()
        else:
            print("Error")

