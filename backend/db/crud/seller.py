from sqlalchemy.orm import Session

from db.models.seller import Seller
from utils.security import Hasher
from schemas.seller import SellerSchema


def create_seller(db: Session, seller: SellerSchema):
    hashed_password = Hasher.get_password_hash(seller.password)
    db_seller = Seller(first_name=seller.first_name, last_name=seller.last_name, email=seller.email, password=hashed_password,
                    phone_number=seller.phone_number)
    db.add(db_seller)
    db.commit()
    db.refresh(db_seller)
    return db_seller


def get_seller(email: str, db: Session):
    return db.query(Seller).filter(Seller.email == email).first()


def get_seller_by_id(seller_id: int, db: Session):
    return db.query(Seller).filter(Seller.id == seller_id).first()
