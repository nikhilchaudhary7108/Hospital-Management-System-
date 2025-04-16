from database.db_utils import db

class Doctor(db.Model):
    __tablename__ = 'doctor'
    
    doctorID = db.Column(db.String(20), primary_key=True)
    doctorName = db.Column(db.String(20), nullable=False)
    specialisation = db.Column(db.String(50), nullable=False)
    dept_name = db.Column(db.String(50), db.ForeignKey('department.dept_name'), nullable=False)
    
    consultations = db.relationship('Consultation', backref='doctor', lazy=True)

    def to_dict(self):
        return {
            'doctorID': self.doctorID,
            'doctorName': self.doctorName,
            'specialisation': self.specialisation,
            'dept_name': self.dept_name
        }