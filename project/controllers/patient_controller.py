from flask import jsonify, request
from services.patient_service import PatientService
from flask_cors import CORS

class PatientController:
    @staticmethod
    def get_all_patients():
        try:
            patients = PatientService.get_all_patients()
            return jsonify([patient.to_dict() for patient in patients]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def get_patient(patientID):
        try:
            patient = PatientService.get_patient_by_id(patientID)
            return jsonify(patient.to_dict()), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def create_patient():
        try:
            data = request.get_json()
            patient = PatientService.create_patient(data)
            return jsonify(patient.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def update_patient(patientID):
        try:
            data = request.get_json()
            patient = PatientService.update_patient(patientID, data)
            return jsonify(patient.to_dict()), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def delete_patient(patientID):
        try:
            PatientService.delete_patient(patientID)
            return '', 204
        except Exception as e:
            return jsonify({"error": str(e)}), 500
