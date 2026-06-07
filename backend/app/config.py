from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "postgresql://pcbuilder:pcbuilder@localhost:5432/pcbuilder"
    secret_key: str = "dev-secret"
    aws_region: str = "us-west-2"
    ses_from_email: str = ""
    airtable_api_key: str = ""
    airtable_base_id: str = ""
    make_webhook_url: str = ""

    class Config:
        env_file = ".env"


settings = Settings()
