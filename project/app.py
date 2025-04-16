import sys, os
sys.path.append(os.getcwd())

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from database.db_utils import db
from shared.database.db import db
from shared.config.config import Config
from flask_cors import CORS
# CORS(app, origins=["http://localhost:3000"])

# app = Flask(__name__)
# CORS(app)  # Allow all domains by default


# Import blueprints
from routes.patient_routes import patient_bp
from routes.department_routes import department_bp
from routes.doctor_routes import doctor_bp
from routes.bedding_routes import bedding_bp
from routes.consultation_routes import consultation_bp


app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=["http://localhost:3000"])

db.init_app(app)

app.register_blueprint(patient_bp)
app.register_blueprint(department_bp)
app.register_blueprint(doctor_bp)
app.register_blueprint(bedding_bp)
app.register_blueprint(consultation_bp)

if __name__ == '__main__':
    app.run(debug=True)
    
# @app.route('/')
app = Flask(__name__)
CORS(app)  # Allow all domains by default
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
# def create_app():
#     app = Flask(__name__)
#     app.config.from_object(Config)
    
#     # Initialize extensions
#     db.init_app(app)
    
#     # Register blueprints
#     app.register_blueprint(patient_bp, url_prefix='/api/patients')
#     app.register_blueprint(doctor_bp, url_prefix='/api/doctors')
#     app.register_blueprint(department_bp, url_prefix='/api/departments')
#     app.register_blueprint(consultation_bp, url_prefix='/api/consultations')
#     app.register_blueprint(bedding_bp, url_prefix='/api/bedding')
    
#     @app.before_first_request
#     def create_tables():
#         db.create_all()
    
#     return app

# if __name__ == '__main__':
#     app = create_app()
#     app.run(debug=True, port=5001)