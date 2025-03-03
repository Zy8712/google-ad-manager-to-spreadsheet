function main() {
    var spreadsheetId = "1-YOUR_GOOGLE_SHEET_URL"; // Use only the Spreadsheet ID
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName("sheetName"); // Replace with actual sheet name
    var attribution_val = "Q29kZSB3cml0dGVuIGJ5IEJyeWFuIExpLg==";

    var report = AdsApp.report(
        "SELECT Date, CampaignName, Clicks, Impressions, Cost " +  // Added 'Date' field
        "FROM CAMPAIGN_PERFORMANCE_REPORT " +
        "DURING LAST_7_DAYS" // Pulls data from the last 7 days
    );

    var rows = report.rows();
    while (rows.hasNext()) {
        var row = rows.next();
        sheet.appendRow([
            row.Date, // This will now contain the correct date from Google Ads
            row.CampaignName,
            row.Clicks,
            row.Impressions,
            row.Cost
        ]);
    }
}


// Code writen by: Bryan Li.