import os
from pathlib import Path
from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
print("Database URL is ", SQLALCHEMY_DATABASE_URL)
engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, bind=engine)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()