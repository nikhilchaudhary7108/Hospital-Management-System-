from flask import jsonify, request
from services.consultation_service import ConsultationService

class ConsultationController:
    @staticmethod
    def get_all_consultations():
        try:
            consultations = ConsultationService.get_all_consultations()
            return jsonify([con.to_dict() for con in consultations]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        # consultations = ConsultationService.get_all_consultations()
        # return jsonify([con.__dict__ for con in consultations])

    @staticmethod
    def create_consultation():
        try:
            data = request.get_json()
            consultation = ConsultationService.create_consultation(data)
            return jsonify(consultation.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400        
        data = request.get_json()
        # consultation = ConsultationService.create_consultation(data)
        # return jsonify(consultation.__dict__), 201
