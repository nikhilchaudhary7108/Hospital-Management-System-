from models.department_model import Department
from database.db_utils import db

class DepartmentService:
    @staticmethod
    def get_all_departments():
        return Department.query.all()

    @staticmethod
    def create_department(data):
        new_department = Department(**data)
        db.session.add(new_department)
        db.session.commit()
        return new_department
