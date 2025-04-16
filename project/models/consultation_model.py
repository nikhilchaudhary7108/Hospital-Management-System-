from database.db_utils import db

class Consultation(db.Model):
    __tablename__ = 'Consultation'
    
    app_id = db.Column(db.String(50), primary_key=True)
    app_date = db.Column(db.Date, nullable=False)
    app_time = db.Column(db.Time, nullable=False)
    
    labtestID = db.Column(db.String(50))
    test_name = db.Column(db.String(25))
    test_description = db.Column(db.String(60))
    test_cost = db.Column(db.Numeric(10, 4))
    
    pharmacyID = db.Column(db.String(250))
    medicine_name = db.Column(db.String(250))
    stock_quantity = db.Column(db.Integer)
    price_per_unit = db.Column(db.Numeric(10, 4))
    
    billID = db.Column(db.String(250))
    total_amount = db.Column(db.Numeric(10, 4), nullable=False)
    
    recordID = db.Column(db.String(250), nullable=False)
    diagonsis = db.Column(db.String(50))
    treatment = db.Column(db.String(250))
    prescription = db.Column(db.String(250))
    record_date = db.Column(db.Date, nullable=False)
    
    patientID = db.Column(db.String(50), db.ForeignKey('patient.patientID'))
    doctorID = db.Column(db.String(20), db.ForeignKey('doctor.doctorID'))

    def to_dict(self):
        return {
            'app_id': self.app_id,
            'app_date': self.app_date.isoformat(),
            'app_time': str(self.app_time),
            'labtestID': self.labtestID,
            'test_name': self.test_name,
            'test_description': self.test_description,
            'test_cost': float(self.test_cost) if self.test_cost else None,
            'pharmacyID': self.pharmacyID,
            'medicine_name': self.medicine_name,
            'stock_quantity': self.stock_quantity,
            'price_per_unit': float(self.price_per_unit) if self.price_per_unit else None,
            'billID': self.billID,
            'total_amount': float(self.total_amount),
            'recordID': self.recordID,
            'diagonsis': self.diagonsis,
            'treatment': self.treatment,
            'prescription': self.prescription,
            'record_date': self.record_date.isoformat(),
            'patientID': self.patientID,
            'doctorID': self.doctorID
        }