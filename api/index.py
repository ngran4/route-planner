from flask import Flask, request, jsonify
from models import User, db, app
from flask_sqlalchemy import SQLAlchemy

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
    print(data)

    new_user=User(username=data['username'], email=data['email'])


    db.session.add(new_user)
    db.session.commit()

    return jsonify({"done":"done"})

if __name__ == "__main__":
    app.run(debug=True)