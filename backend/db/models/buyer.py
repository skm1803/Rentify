# buyer user model
from sqlalchemy import Column, Integer, String, DateTime
import datetime

from db.base_class import Base


class Buyer(Base):
    __tablename__ = 'buyers'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    phone_number = Column(String, index=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)

    def __repr__(self):
        return f'Buyer(id={self.id}, name={self.name}, email={self.email})'