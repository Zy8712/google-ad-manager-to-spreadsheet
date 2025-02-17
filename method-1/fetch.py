from google.ads.google_ads.client import GoogleAdsClient

client = GoogleAdsClient.load_from_storage()
customer_id = "123-456-7890"

query = """
SELECT campaign.id, campaign.name, metrics.impressions, metrics.clicks, metrics.cost_micros
FROM campaign
WHERE segments.date DURING LAST_7_DAYS
"""

response = client.service.google_ads.search(customer_id=customer_id, query=query)
for row in response:
    print(f"Campaign {row.campaign.id.value} - {row.campaign.name.value}")
