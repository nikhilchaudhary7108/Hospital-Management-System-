from models.appointment_model import Appointment
from app import db

class AppointmentService:
    @staticmethod
    def get_all_appointments():
        return Appointment.query.all()
    
    @staticmethod
    def get_appointment_by_id(appointment_id):
        return Appointment.query.get_or_404(appointment_id)
    
    @staticmethod
    def create_appointment(data):
        appointment = Appointment(**data)
        db.session.add(appointment)
        db.session.commit()
        return appointment
    
    @staticmethod
    def update_appointment(appointment_id, data):
        appointment = Appointment.query.get_or_404(appointment_id)
        for key, value in data.items():
            setattr(appointment, key, value)
        db.session.commit()
        return appointment
    
    @staticmethod
    def delete_appointment(appointment_id):
        appointment = Appointment.query.get_or_404(appointment_id)
        db.session.delete(appointment)
        db.session.commit()