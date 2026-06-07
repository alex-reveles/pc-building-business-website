from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health():
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_builds_returns_list():
    resp = client.get("/builds")
    assert resp.status_code == 200
    assert isinstance(resp.json(), list)
