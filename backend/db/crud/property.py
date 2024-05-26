from sqlalchemy.orm import Session
from db.models.property import Property
from schemas.property import PropertySchema


def create_property(db: Session, property: PropertySchema, seller_id: int):
    db_property = Property(**property.dict(), seller_id=seller_id)
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    return db_property


def list_properties(db: Session):
    return db.query(Property).all()


def get_property(db: Session, property_id: int):
    return db.query(Property).filter(Property.id == property_id).first()


def update_property(db: Session, property_id: int, property: PropertySchema):
    db.query(Property).filter(Property.id == property_id).update(property.dict())
    db.commit()
    return db.query(Property).filter(Property.id == property_id).first()


def delete_property(db: Session, property_id: int):
    db.query(Property).filter(Property.id == property_id).delete()
    db.commit()
    return {"message": "Property deleted successfully"}


def filter_properties(db: Session, filters: dict):
    return db.query(Property).filter_by(**filters).all()