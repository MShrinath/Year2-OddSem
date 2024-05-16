from flask import Flask , render_template

app = Flask(__name__, template_folder='', static_folder='', static_url_path='')


@app.route('/')
def home():
    return render_template('./login.html')


def run():
  app.run(host='0.0.0.0', port=8080)
run()
