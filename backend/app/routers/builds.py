from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas

router = APIRouter(prefix="/builds", tags=["builds"])


@router.get("", response_model=list[schemas.BuildOut])
def list_builds(db: Session = Depends(get_db)):
    return db.query(models.Build).filter(models.Build.active == True).all()


@router.get("/{slug}", response_model=schemas.BuildOut)
def get_build(slug: str, db: Session = Depends(get_db)):
    build = db.query(models.Build).filter(models.Build.slug == slug).first()
    if not build:
        raise HTTPException(status_code=404, detail="Build not found")
    return build
