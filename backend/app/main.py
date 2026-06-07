from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routers import builds, leads, contact, inventory

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AlexBuildsPC API",
    description="Backend API for the AlexBuildsPC platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://*.amplifyapp.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(builds.router)
app.include_router(leads.router)
app.include_router(contact.router)
app.include_router(inventory.router)


@app.get("/health")
def health():
    return {"status": "ok"}
