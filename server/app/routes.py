from app import app

@app.route('/')
def greet():
    return 'Hello from Flask!'
