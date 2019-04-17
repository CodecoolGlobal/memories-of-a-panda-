from flask import Flask, render_template

app = Flask(__name__)

@app.route('/game')
def index():
    return render_template('index.html')

@app.route('/')
def start():
    return render_template('start.html')

if __name__ == "__main__":
    app.run(debug=True)