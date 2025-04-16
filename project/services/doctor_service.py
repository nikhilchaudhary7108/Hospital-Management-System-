# from models.doctor_model import Doctor
# from app import db


from models.doctor_model import Doctor
from database.db_utils import db

class DoctorService:
    @staticmethod
    def get_all_doctors():
        return Doctor.query.all()

    @staticmethod
    def create_doctor(data):
        new_doctor = Doctor(**data)
        db.session.add(new_doctor)
        db.session.commit()
        return new_doctor

# class DoctorService:
#     @staticmethod
#     def get_all_doctors():
#         return Doctor.query.all()
    
#     @staticmethod
#     def get_doctor_by_id(doctor_id):
#         return Doctor.query.get_or_404(doctor_id)
    
#     @staticmethod
#     def create_doctor(data):
#         doctor = Doctor(**data)
#         db.session.add(doctor)
#         db.session.commit()
#         return doctor
    
#     @staticmethod
#     def update_doctor(doctor_id, data):
#         doctor = Doctor.query.get_or_404(doctor_id)
#         for key, value in data.items():
#             setattr(doctor, key, value)
#         db.session.commit()
#         return doctor
    
#     @staticmethod
#     def delete_doctor(doctor_id):
#         doctor = Doctor.query.get_or_404(doctor_id)
#         db.session.delete(doctor)
#         db.session.commit()