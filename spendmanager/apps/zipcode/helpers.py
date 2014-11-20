
class Helper(object):

    def __init__(self):
        self.params = {}
        self.response = {
                'data': [],
                'result': {'info': 'Bad Request', 'code': 400}
                }

    def mandatory_params(self, params = {}, indexes = []):
       
        self.parse_params(params, indexes)
        is_here =  False

        for index in indexes:
            if index in params:
                is_here = True
            else:
                is_here = False
                break

        return is_here

    def parse_params(self, params, indexes):

        for index in indexes:
            if index in params:
                self.params[index] = params[index]
