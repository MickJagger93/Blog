from flask import Blueprint, render_template
from models import Post 

public_bp = Blueprint('public', __name__)

@public_bp.route('/public_blogs')
def public_blogs():

    posts = Post.query.all()
    return render_template('layouts/partials/public_blogs.html', posts=posts)