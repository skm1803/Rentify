from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from schemas.user import UserSchema
from sqlalchemy.orm import Session

from utils.security import create_access_token
from db.crud.user import create_user, get_user
from utils.security import Hasher
from db.db import get_db
from schemas.token import Token
from utils.authentication import get_current_user, authenticate_user


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
def health_check(user = Depends(get_current_user)):
    print("user is", user)
    return {"ping": "pong"}


@app.post("/v1/signup")
def signup(user: UserSchema, db=Depends(get_db)):
    user = create_user(db, user)
    return user


@app.post("/v1/signin", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
    access_token = create_access_token(data={"email": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


