from models.patient_model import Patient
from database.db_utils import db

class PatientService:
    @staticmethod
    def get_all_patients():
        return Patient.query.all()
    
    @staticmethod
    def get_patient_by_id(patientID):
        return Patient.query.get_or_404(patientID)
    
    @staticmethod
    def create_patient(data):
        patient = Patient(**data)
        db.session.add(patient)
        db.session.commit()
        return patient
    
    @staticmethod
    def update_patient(patientID, data):
        patient = Patient.query.get_or_404(patientID)
        for key, value in data.items():
            setattr(patient, key, value)
        db.session.commit()
        return patient
    
    @staticmethod
    def delete_patient(patientID):
        patient = Patient.query.get_or_404(patientID)
        db.session.delete(patient)
        db.session.commit()