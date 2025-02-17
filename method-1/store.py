import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("your-credentials.json", scope)
client = gspread.authorize(creds)

sheet = client.open("Google Ads Data").sheet1
sheet.append_row(["Campaign ID", "Name", "Impressions", "Clicks", "Cost"])
