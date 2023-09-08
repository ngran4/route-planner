from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

load_dotenv()
bcrypt = Bcrypt()

DATABASE_URI = os.environ.get('DATABASE_URI')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:FXZ2v3TmracgceRKluVH@containers-us-west-35.railway.app:7698/railway"


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(128))
    favorites = db.relationship('Favorites', backref='user', lazy=True)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

    def __userThingy__(self):
        return f"User('{self.username}')"


TITLE_CHOICES = (
('home', 'Home'),
('work', 'Work'),
('custom', 'Custom')
)

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    custom_title = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def get_title(self):
        if self.title == 'custom':
            return self.custom_title
        else:
            return self.title

# db.create_all()
