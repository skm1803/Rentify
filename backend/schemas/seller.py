from pydantic import BaseModel, EmailStr, Field
from pydantic import validator


class SellerSchema(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: int
    password: str
