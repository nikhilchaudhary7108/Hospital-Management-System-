from flask import Blueprint, request, jsonify
from controllers.patient_controller import PatientController

patient_bp = Blueprint('patient', __name__, url_prefix='/api/patients')

# Route to get all patients
patient_bp.route('/', methods=['GET'])(PatientController.get_all_patients)

# Route to get a specific patient by patientID
patient_bp.route('/<patientID>', methods=['GET'])(PatientController.get_patient)

# Route to create a new patient
patient_bp.route('/', methods=['POST'])(PatientController.create_patient)

# Route to update patient details by patientID
patient_bp.route('/<patientID>', methods=['PUT'])(PatientController.update_patient)

# Route to delete a patient by patientID
patient_bp.route('/<patientID>', methods=['DELETE'])(PatientController.delete_patient)
