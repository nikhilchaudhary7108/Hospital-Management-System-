from flask import Blueprint
from controllers.consultation_controller import ConsultationController

consultation_bp = Blueprint('consultations', __name__, url_prefix='/api/consultations')

consultation_bp.route('/', methods=['GET'])(ConsultationController.get_all_consultations)
consultation_bp.route('/', methods=['POST'])(ConsultationController.create_consultation)
