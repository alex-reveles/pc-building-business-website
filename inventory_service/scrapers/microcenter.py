"""
Micro Center Tustin inventory scraper.
Runs as an AWS Lambda function triggered by EventBridge (Phase 2).
"""

import httpx
from dataclasses import dataclass
from datetime import datetime, timezone


STORE_ID = "151"  # Micro Center Tustin store ID
BASE_URL = "https://www.microcenter.com"

TRACKED_PARTS = [
    {
        "name": "AMD Ryzen 5 7600X",
        "search": "ryzen 5 7600x",
        "category": "CPU",
    },
    {
        "name": "NVIDIA RTX 4060",
        "search": "rtx 4060",
        "category": "GPU",
    },
    {
        "name": "MSI MAG B650 TOMAHAWK",
        "search": "b650 tomahawk",
        "category": "Motherboard",
    },
]


@dataclass
class InventoryResult:
    part_name: str
    category: str
    in_stock: bool
    price: float | None
    url: str | None
    checked_at: datetime


def check_microcenter(part: dict) -> InventoryResult:
    """
    Query Micro Center product search for a given part.
    Note: Micro Center requires store selection via cookie.
    """
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 Chrome/120 Safari/537.36"
        ),
        "Cookie": f"storeSelected={STORE_ID}",
    }
    search_url = f"{BASE_URL}/search/?query={part['search'].replace(' ', '+')}"

    try:
        with httpx.Client(headers=headers, timeout=15, follow_redirects=True) as client:
            resp = client.get(search_url)
            resp.raise_for_status()

            # Phase 2: parse HTML with BeautifulSoup
            # For now, return placeholder
            in_stock = False
            price = None
            url = search_url

    except Exception as e:
        print(f"Error checking {part['name']}: {e}")
        in_stock = False
        price = None
        url = None

    return InventoryResult(
        part_name=part["name"],
        category=part["category"],
        in_stock=in_stock,
        price=price,
        url=url,
        checked_at=datetime.now(timezone.utc),
    )


def run_inventory_check() -> list[InventoryResult]:
    results = []
    for part in TRACKED_PARTS:
        result = check_microcenter(part)
        results.append(result)
        print(f"{result.part_name}: {'IN STOCK' if result.in_stock else 'OUT'} @ {result.price}")
    return results


def lambda_handler(event, context):
    """AWS Lambda entry point."""
    results = run_inventory_check()
    return {
        "statusCode": 200,
        "checked": len(results),
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
