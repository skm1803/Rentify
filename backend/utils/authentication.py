import os
from pathlib import Path
from jose import JWTError, jwt
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlalchemy.orm import Session
from utils.security import Hasher
from dotenv import load_dotenv

from db.db import get_db
from db.crud.user import get_user
from db.crud.seller import get_seller
from utils.security import create_access_token
from schemas.token import Token

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/v1/signin")
oauth2_scheme_seller = OAuth2PasswordBearer(tokenUrl="/v1/seller/signin")


def authenticate_user(email: str, password: str, db: Session):
    user = get_user(email=email, db=db)
    if not user:
        return False
    if not Hasher.verify_password(password, user.password):
        return False
    return user


def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )
    try:
        payload = jwt.decode(token, os.getenv("JWT_SECRET_KEY"), algorithms=[os.getenv("JWT_ALGORITHM")])
        print("debug")
        print(token, os.getenv("JWT_SECRET_KEY"), [os.getenv("JWT_ALGORITHM")])
        print(f"payload {payload}")
        email: dict = payload.get("email")
        if email is None:
            print("email is none")
            raise credentials_exception
    except JWTError:
        print("jwt error")
        raise credentials_exception
    user = get_user(email=email, db=db)
    if user is None:
        print("user is none")
        raise credentials_exception
    return user


def authenticate_seller(email: str, password: str, db: Session):
    seller = get_seller(email=email, db=db)
    if not seller:
        return False
    if not Hasher.verify_password(password, seller.password):
        return False
    return seller


def get_current_seller(token: str = Depends(oauth2_scheme_seller), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )
    try:
        payload = jwt.decode(token, os.getenv("JWT_SECRET_KEY"), algorithms=[os.getenv("JWT_ALGORITHM")])
        email: dict = payload.get("email")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    seller = get_seller(email=email, db=db)
    if seller is None:
        raise credentials_exception
    return seller