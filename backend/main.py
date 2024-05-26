from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from schemas.user import UserSchema
from sqlalchemy.orm import Session

from db.db import get_db
from schemas.token import Token
from schemas.seller import SellerSchema
from schemas.property import PropertySchema
from db.crud.user import create_user, get_user
from db.crud.seller import create_seller, get_seller_by_id
from db.crud.property import create_property, list_properties, get_property, update_property, delete_property, filter_properties
from utils.security import Hasher, create_access_token
from utils.authentication import get_current_user, authenticate_user, authenticate_seller, get_current_seller


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


@app.post("/v1/signup", tags=["buyer"])
def signup(user: UserSchema, db=Depends(get_db)):
    user = create_user(db, user)
    return user


@app.post("/v1/signin", response_model=Token, tags=["buyer"])
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
    access_token = create_access_token(data={"email": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/v1/seller/signup", tags=["seller"])
def seller_signup(user: SellerSchema, db=Depends(get_db)):
    seller = create_seller(db, user)
    return seller


@app.post("/v1/seller/signin", response_model=Token, tags=["seller"])
def seller_login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    seller = authenticate_seller(form_data.username, form_data.password, db)
    if not seller:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
    access_token = create_access_token(data={"email": seller.email})
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/v1/seller/{seller_id}", tags=["seller"])
def get_seller(seller_id: int, db=Depends(get_db)):
    return get_seller_by_id(seller_id, db)


@app.post("/v1/property", tags=["property"])
def add_property(property: PropertySchema, db=Depends(get_db), seller = Depends(get_current_seller)):
    property = create_property(db, property, seller.id)
    return property


@app.get("/v1/properties", tags=["property"])
def get_properties(db=Depends(get_db)):
    return list_properties(db)


@app.get("/v1/property/{property_id}", tags=["property"])
def get_property_by_id(property_id: int, db=Depends(get_db)):
    return get_property(db, property_id)


@app.put("/v1/property/{property_id}", tags=["property"])
def update_property_by_id(property_id: int, property: PropertySchema, db=Depends(get_db)):
    return update_property(db, property_id, property)


@app.delete("/v1/property/{property_id}", tags=["property"])
def delete_property_by_id(property_id: int, db=Depends(get_db)):
    return delete_property(db, property_id)




@app.post("/v1/properties/filter", tags=["property"])
def filter_properties_by_filters(filters: dict, db=Depends(get_db)):
    """
    Example filter {"flat_type": "3BHK"}
    """
    return filter_properties(db, filters)
