import sqlalchemy
from sqlalchemy import orm
import logging

_logger = logging.getLogger(__name__)


class DatabaseEngine:
    _engine: sqlalchemy.Engine | None = None

    _postgres_url: sqlalchemy.engine.URL = sqlalchemy.engine.URL.create(
        drivername="postgresql",
        username="postgres",
        password="admin",
        host="database",
        database="musaca",
        port=5432,
    )

    @classmethod
    def get_engine(cls) -> sqlalchemy.Engine:
        if cls._engine is None:
            cls._engine = sqlalchemy.create_engine(url=cls._postgres_url)
            _logger.info("Successfully created a new SLQAlchemy engine")
        return cls._engine

    @classmethod
    def get_session(cls) -> orm.Session:
        a_session_maker = orm.sessionmaker(bind=cls.get_engine())
        return a_session_maker()
