from datetime import datetime
from pydantic import BaseModel, EmailStr


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    budget: str | None = None
    message: str | None = None


class LeadOut(BaseModel):
    id: int
    name: str
    email: str
    budget: str | None
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class BuildOut(BaseModel):
    id: int
    slug: str
    name: str
    tagline: str
    price: float
    description: str
    active: bool

    model_config = {"from_attributes": True}


class InventoryOut(BaseModel):
    id: int
    part_name: str
    vendor: str
    in_stock: bool
    price: float | None
    last_checked: datetime

    model_config = {"from_attributes": True}
