from models.consultation_model import Consultation
from database.db_utils import db

class ConsultationService:
    @staticmethod
    def get_all_consultations():
        return Consultation.query.all()

    @staticmethod
    def create_consultation(data):
        new_consultation = Consultation(**data)
        db.session.add(new_consultation)
        db.session.commit()
        return new_consultation
