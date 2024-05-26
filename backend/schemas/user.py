from pydantic import BaseModel, EmailStr
from pydantic import validator


class UserSchema(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone_number: str
    password: str

    @validator('email')
    def email_must_contain_gmail(cls, v):
        if 'admin' in v:
            raise ValueError('Admins is not an available keyword.')
        return v