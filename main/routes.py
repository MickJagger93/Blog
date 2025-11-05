from flask import Blueprint, render_template, get_flashed_messages

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():

    messages = get_flashed_messages()
    return render_template('layouts/partials/blog.html', messages=messages)