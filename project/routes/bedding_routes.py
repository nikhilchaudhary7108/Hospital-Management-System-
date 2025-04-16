from flask import Blueprint
from controllers.bedding_controller import BeddingController

bedding_bp = Blueprint('bedding', __name__, url_prefix='/api/bedding')

bedding_bp.route('/', methods=['GET'])(BeddingController.get_all_beds)
bedding_bp.route('/', methods=['POST'])(BeddingController.create_bed)
