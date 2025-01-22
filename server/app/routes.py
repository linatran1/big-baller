from app import app
from flask import jsonify

#@app.route('/')
#def greet():
#    return 'Hello from Flask!'

@app.route('/api/hello')
def hello_api():
    return jsonify({"message": "What's up my beautiful queen you've called the backend!"})
