from flask import Flask, request, jsonify
from flask_cors import CORS
from models import User, db, app
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from dotenv import load_dotenv
import os

load_dotenv()
CORS(app)

SECRET_KEY= os.environ.get('SECRET_KEY')
app.config['JWT_SECRET_KEY'] = SECRET_KEY
jwt = JWTManager(app)


@app.route("/api/users", methods=['GET'])
def get_user():
    users = User.query.all()
    user_list = []

    for user in users:
        data = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        }
        user_list.append(data)
    
    return jsonify(user_list)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    print(data)

    new_user=User(username=data['username'], email=data['email'], password=data['password'])


    db.session.add(new_user)
    db.session.commit()

    # return jsonify({"done":"done"})
    access_token = create_access_token(identity=new_user.id)
    return jsonify({"access_token": access_token}), 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return {"token": access_token, "username": username}, 200
    else:
        return f"Invalid username or password. Which one? Good question. And good luck.", 401

if __name__ == "__main__":
    app.run(debug=True)