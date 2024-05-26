# property model of seller
from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime, Boolean
from sqlalchemy.orm import relationship
import datetime

from db.base_class import Base


class Property(Base):
    __tablename__ = 'properties'

    id = Column(Integer, primary_key=True, index=True)
    flat_type = Column(String)
    status = Column(String)
    flat_number = Column(String)
    address = Column(String)
    image = Column(String)
    hospital_radius = Column(String)
    airport_radius = Column(String)
    number_of_collages = Column(String)
    is_active = Column(Boolean, default=True)
    seller_id = Column(Integer, ForeignKey('sellers.id'))
    seller = relationship('Seller', back_populates='properties')

    def __repr__(self):
        return f'Property(id={self.id}, name={self.name})'