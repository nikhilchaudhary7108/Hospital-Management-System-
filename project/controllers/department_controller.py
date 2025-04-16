from flask import jsonify, request
from services.department_service import DepartmentService

class DepartmentController:
    @staticmethod
    def get_all_departments():
        try:
            departments = DepartmentService.get_all_departments()
            return jsonify([dept.to_dict() for dept in departments]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def create_department():
        try:
            data = request.get_json()
            department = DepartmentService.create_department(data)
            return jsonify(department.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
