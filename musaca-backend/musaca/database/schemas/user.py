import sqlalchemy
from sqlalchemy import orm
from musaca.database.schemas import base


class User(base.Base):
    __tablename__ = "user"

    id: orm.Mapped[int] = orm.mapped_column(primary_key=True)
    name: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    surname: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    username: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    email: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(30))
    password: orm.Mapped[str] = orm.mapped_column(sqlalchemy.String(300))

    def __str__(self) -> str:
        return f"I am {self.name} {self.surname} with email {self.email}"
