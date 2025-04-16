from database.db_utils import db

class Bedding(db.Model):
    __tablename__ = 'Bedding'
    
    bed_id = db.Column(db.Integer, primary_key=True)
    bed_type = db.Column(db.String(50))
    bed_status = db.Column(db.String(20))
    patientID = db.Column(db.String(50), db.ForeignKey('patient.patientID'))
    admission_date = db.Column(db.Date)
    discharge_date = db.Column(db.Date)
    cleaning_status = db.Column(db.String(20))
    last_cleaned = db.Column(db.Date)

    def to_dict(self):
        return {
            'bed_id': self.bed_id,
            'bed_type': self.bed_type,
            'bed_status': self.bed_status,
            'patientID': self.patientID,
            'admission_date': self.admission_date.isoformat() if self.admission_date else None,
            'discharge_date': self.discharge_date.isoformat() if self.discharge_date else None,
            'cleaning_status': self.cleaning_status,
            'last_cleaned': self.last_cleaned.isoformat() if self.last_cleaned else None
        }