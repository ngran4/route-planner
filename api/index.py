from flask import Flask, request, jsonify
from models import User
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy())

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:FXZ2v3TmracgceRKluVH@containers-us-west-35.railway.app:7698/railway"
    db.init_app(app)

    return app

@app.route("/api/users", methods=['GET'])
def get_user():
    users = User.query.all()
    user_list = []

    for user in users:
        data = {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
        user_list.append(data)
    
    return jsonify(user_list)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json

    new_user=User(id=35, username=data['username'], email=data['email'])


    db.session.add(new_user)
    db.session.commit()

    return jsonify({"done"})

if __name__ == "__main__":
    app.run(debug=True)