class Config:
    SECRET_KEY = 'dev-secret-key'  # In production, use a secure secret key
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:LiveLifeLoud1234@localhost/hospital'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True