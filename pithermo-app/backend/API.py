from flask import Flask, request
from flask_restful import Resource, Api
from thermoDH22 import get_temp_humidity

app = Flask(__name__)
api = Api(app)

todos = {}

class Rules(Resource):
    def get(self, todo_id):
        return {}

    def put(self, todo_id):
        todos[todo_id] = request.form['data']
        return {todo_id: todos[todo_id]}

api.add_resource(rules, '/<string:rule_id>')

if __name__ == '__main__':
    app.run(debug=True)