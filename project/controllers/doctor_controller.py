from flask import jsonify, request
from services.doctor_service import DoctorService

class DoctorController:
    @staticmethod
    def get_all_doctors():
        try:
            doctors = DoctorService.get_all_doctors()
            return jsonify([doc.to_dict() for doc in doctors]), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @staticmethod
    def create_doctor():
        try:
            data = request.get_json()
            doctor = DoctorService.create_doctor(data)
            return jsonify(doctor.to_dict()), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
        
        

    



# from flask import jsonify, request
# from services.doctor_service import DoctorService

# class DoctorController:
#     @staticmethod
#     def get_all_doctors():
#         doctors = DoctorService.get_all_doctors()
#         return jsonify([doc.__dict__ for doc in doctors])

#     @staticmethod
#     def create_doctor():
#         data = request.get_json()
#         doctor = DoctorService.create_doctor(data)
#         return jsonify(doctor.__dict__), 201
