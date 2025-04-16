from models.bedding_model import Bedding
from database.db_utils import db

class BeddingService:
    @staticmethod
    def get_all_beds():
        return Bedding.query.all()

    @staticmethod
    def create_bed(data):
        new_bed = Bedding(
            bed_id=data["bed_id"],
            bed_type=data["bed_type"],
            bed_status=data["bed_status"],
            patientID=data.get("patientID"),
            admission_date=data.get("admission_date"),
            discharge_date=data.get("discharge_date"),
            cleaning_status=data.get("cleaning_status"),
            last_cleaned=data.get("last_cleaned"),
        )
        db.session.add(new_bed)
        db.session.commit()
        return new_bed
