from flask import jsonify, request
from services.bedding_service import BeddingService

class BeddingController:
    @staticmethod
    def get_all_beds():
        try:
            beds = BeddingService.get_all_beds()
            return jsonify([bed.to_dict() for bed in beds]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def create_bed():
        try:
            data = request.get_json()
            bed = BeddingService.create_bed(data)
            return jsonify(bed.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
