# code to insert user/buyer data to database
from sqlalchemy.orm import Session
from db.models.buyer import Buyer
from schemas.user import UserSchema
from utils.security import Hasher


def create_user(db: Session, user: UserSchema):
    hashed_password = Hasher.get_password_hash(user.password)
    db_user = Buyer(first_name=user.first_name, last_name=user.last_name, email=user.email, password=hashed_password,
                    phone_number=user.phone_number)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user