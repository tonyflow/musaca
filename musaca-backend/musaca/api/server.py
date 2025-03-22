import sqlalchemy
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from musaca.api.schemas import user
from musaca.database.schemas import user as database_user
from musaca.database import sql_engine
from musaca.services import authentication_service
from sqlalchemy import orm
import logging

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:4200"] for tighter security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.DEBUG, format="%(asctime)s - %(levelname)s - %(message)s"
)

_logger = logging.getLogger(__name__)


@app.get("/")
def healthcheck():
    return 204


@app.get("/users")
async def get_all_users():
    db_session: orm.Session = sql_engine.DatabaseEngine.get_session()
    all_users = db_session.execute(
        sqlalchemy.select(database_user.User).select_from(database_user.User)
    ).scalars()
    return all_users.all()


@app.post("/users/login")
async def user_login(user_login_request: user.UserLoginRequest):
    return authentication_service.authenticate(
        user_login_request.username, user_login_request.password
    )


@app.post("/users")
async def create_user(user_creation_request: user.UserCreationRequest):
    db_session: orm.Session = sql_engine.DatabaseEngine.get_session()
    db_user: database_user.User = database_user.User(
        name=user_creation_request.name,
        surname=user_creation_request.surname,
        username=user_creation_request.username,
        email=user_creation_request.email,
        password=user_creation_request.password,
    )
    db_session.add(db_user)
    db_session.commit()
    return db_user
