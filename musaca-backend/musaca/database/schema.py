from sqlalchemy import orm
import sqlalchemy


class Base(orm.DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "user"

    id: orm.Mapped[int] = orm.mapped_column(primary_key=True)
    first_name: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    last_name: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    username: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    password: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(300))
