from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", status_code=201)
def submit_contact(msg: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_msg = models.ContactMessage(**msg.model_dump())
    db.add(db_msg)
    db.commit()
    return {"status": "received"}
