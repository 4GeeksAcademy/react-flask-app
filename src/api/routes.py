"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_create_user():

    body = request.get_json()

    if body is None: 
        return jsonify({ 'msg': 'error'}), 400
    if 'email' not in body:
        return jsonify({ 'msg': 'error'}), 400
    if 'password' not in body: 
        return jsonify({ 'msg': 'error'}), 400
    
    user = User()

    user.email = body['email']
    user.password = body['password']

    db.session.add(user)
    db.session.commit()

    return jsonify({}), 201

@api.route('/auth', methods=['POST'])
def handler_auth(): 
    body = request.get_json()

    if body is None: 
        return jsonify({ 'msg': 'error'}), 400
    if 'email' not in body:
        return jsonify({ 'msg': 'error'}), 400
    if 'password' not in body: 
        return jsonify({ 'msg': 'error'}), 400
    
    user = User.query.filter_by(email=body['email'], password=body['password']).first()

    if user is None:
        return jsonify({ 'msg': 'user not exist'}), 401
    
    token = create_access_token(identity=user.email)

    return jsonify({ 'token': token}), 200