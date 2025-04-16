from database.db_utils import db
from datetime import datetime

class Patient(db.Model):
    __tablename__ = 'patient'
    
    patientID = db.Column(db.String(50), primary_key=True)
    patient_name = db.Column(db.String(20), nullable=False)
    DOB = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(50))
    contactNo = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(20), unique=True)
    insurance_details = db.Column(db.String(250))
    
    consultations = db.relationship('Consultation', backref='patient', lazy=True)
    bedding = db.relationship('Bedding', backref='patient', lazy=True)

    def to_dict(self):
        return {
            'patientID': self.patientID,
            'patient_name': self.patient_name,
            'DOB': self.DOB.isoformat(),
            'gender': self.gender,
            'address': self.address,
            'contactNo': self.contactNo,
            'email': self.email,
            'insurance_details': self.insurance_details
        }