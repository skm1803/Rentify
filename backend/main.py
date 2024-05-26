from fastapi import FastAPI, Depends
from schemas.user import UserSchema

from db.crud.user import create_user
from db.db import get_db


app = FastAPI()


@app.get("/")
def hello():
    return {"Hello": "World"}


@app.post("v1/signup")
def signup(user: UserSchema, db=Depends(get_db)):
    user = create_user(db, user)
    return user
