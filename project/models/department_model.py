from database.db_utils import db

class Department(db.Model):
    __tablename__ = 'department'
    
    dept_ID = db.Column(db.String(25), primary_key=True)
    dept_name = db.Column(db.String(50), nullable=False, unique=True)
    
    doctors = db.relationship('Doctor', backref='department', lazy=True)

    def to_dict(self):
        return {
            'dept_ID': self.dept_ID,
            'dept_name': self.dept_name
        }