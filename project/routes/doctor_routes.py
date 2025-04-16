from flask import Blueprint
from controllers.doctor_controller import DoctorController

doctor_bp = Blueprint('doctors', __name__, url_prefix='/api/doctors')

doctor_bp.route('/', methods=['GET'])(DoctorController.get_all_doctors)
doctor_bp.route('/', methods=['POST'])(DoctorController.create_doctor)
# doctor_bp.route('/', methods=['PUT'])(DoctorController.delete_doctor)