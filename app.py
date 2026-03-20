from flask import Flask
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect
from config import DevelopmentConfig
from models import Blogger, db
import os

def create_app():

    app = Flask(__name__)
    app.config.from_object(DevelopmentConfig)
    login_manager = LoginManager(app)
    migrate = Migrate(app, db)
    csrf = CSRFProtect(app)
    db.init_app(app)

    @login_manager.user_loader
    def load_user(blogger_id):

        return db.session.get(Blogger, int(blogger_id))

    from auth.routes import auth_bp
    from post.routes import posts_bp
    from main.routes import main_bp
    from public.routes import public_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(posts_bp)
    app.register_blueprint(main_bp)
    app.register_blueprint(public_bp)

    return app

if __name__ == '__main__':

    app = create_app()
    with app.app_context():
        db.create_all()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)