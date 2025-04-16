from flask import Blueprint
from controllers.department_controller import DepartmentController

department_bp = Blueprint('departments', __name__, url_prefix='/api/departments')

department_bp.route('/', methods=['GET'])(DepartmentController.get_all_departments)
department_bp.route('/', methods=['POST'])(DepartmentController.create_department)
