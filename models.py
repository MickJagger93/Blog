from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

db = SQLAlchemy()

class Blogger(db.Model, UserMixin):

    __tablename__ = 'bloggers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    
    post = db.relationship('Post', backref='blogger', lazy=True)

    def __init__(self, name, email, password):

        self.name = name
        self.email = email
        self.set_password(password)

    def set_password(self, password):

        self.password = generate_password_hash(password)
    
    def check_password(self, password):

        return check_password_hash(self.password, password)

class Post(db.Model):

    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    name_post = db.Column(db.String(100), nullable=False)
    post = db.Column(db.Text, nullable=False)
    date = db.Column(db.String, nullable=False, default=lambda: datetime.utcnow().strftime('%Y-%m-%d'))
    category = db.Column(db.String, nullable=False)
    blogger_id = db.Column(db.Integer, db.ForeignKey('bloggers.id', name='fk_post_blogger_id'), nullable=False)