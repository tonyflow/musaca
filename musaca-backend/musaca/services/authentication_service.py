import sqlalchemy

from musaca.database import sql_engine
from musaca.database.schemas import user as database_user
from sqlalchemy import orm


def authenticate(username: str, password: str):
    db_session: orm.Session = sql_engine.DatabaseEngine.get_session()
    authentication_statement: sqlalchemy.Select = (
        sqlalchemy.select(database_user.User.id)
        .select_from(database_user.User)
        .where(
            sqlalchemy.and_(
                database_user.User.username == username,
                database_user.User.password == password,
            )
        )
    )
    authenticated_user = db_session.execute(authentication_statement).one_or_none()

    return authenticated_user is not None
