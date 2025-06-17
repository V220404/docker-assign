from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow cross-origin from frontend

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print("Received from frontend:", data)
    return jsonify({"status": "success", "data": data}), 200


@app.route('/')
def home():
    return "Hello from Flask!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
