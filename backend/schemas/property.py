from pydantic import BaseModel, Field
from pydantic import validator


class PropertySchema(BaseModel):
    flat_type: str
    status: str
    flat_number: str
    address: str
    image: str
    hospital_radius: str
    airport_radius: str
    number_of_collages: str

    @validator('flat_type')
    def flat_type_must_be_valid(cls, v):
        if v not in ['1BHK', '2BHK', '3BHK', '4BHK']:
            raise ValueError('Invalid flat type')
        return v

    @validator('flat_number')
    def flat_number_must_be_valid(cls, v):
        if len(v) < 1:
            raise ValueError('Invalid flat number')
        return v

    @validator('address')
    def address_must_be_valid(cls, v):
        if len(v) < 1:
            raise ValueError('Invalid address')
        return v

    @validator('image')
    def image_must_be_valid(cls, v):
        if "http" not in v:
            raise ValueError('Invalid image url')
        return v

