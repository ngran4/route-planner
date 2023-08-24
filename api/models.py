from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:FXZ2v3TmracgceRKluVH@containers-us-west-35.railway.app:7698/railway"
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), unique=True)
    email = db.Column(db.String(100), unique=True)

    def __userThingy__(self):
        return f"User('{self.username}')"
    
# db.create_all()
