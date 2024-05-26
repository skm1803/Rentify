from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from schemas.user import UserSchema

from db.crud.user import create_user
from db.db import get_db


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello():
    return {"Hello": "World"}


@app.post("/v1/signup")
def signup(user: UserSchema, db=Depends(get_db)):
    user = create_user(db, user)
    return user
