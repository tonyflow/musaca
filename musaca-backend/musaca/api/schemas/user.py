from pydantic import BaseModel


class UserLoginRequest(BaseModel):
    username: str
    password: str


class UserCreationRequest(BaseModel):
    name: str
    surname: str
    username: str
    email: str
    password: str
