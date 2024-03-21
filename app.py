import jinja2
from flask import *

app = Flask(__name__, template_folder='templates', static_url_path='/static')


@app.route("/")
def index():
    # template_loader = jinja2.FileSystemLoader(searchpath="./")
    # template_env = jinja2.Environment(loader=template_loader)
    # template_file = "myapp/templates/index.html.j2"
    # template = template_env.get_template(template_file)
    # page = template.render()
    return render_template('index.html.j2')


# app.run(debug=True, host="0.0.0.0")

#
# @app.route("/action_page")
# def hello():
#     return "Hello, World!"
#
# @app.route("/devopsEngineerJob")
# def hello():
#     return "Hello, World!"
#
# @app.route("/how-to")
# def hello():
#     return "Hello, World!"
#
# @app.route("/introduction")
# def hello():
#     return "Hello, World!"
#
# @app.route("/simpleQuiz")
# def hello():
#     return "Hello, World!"
#
# @app.route("/tools")
# def hello():
#     return "Hello, World!"
