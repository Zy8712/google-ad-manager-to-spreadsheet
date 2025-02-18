function main() {
    var spreadsheetUrl = "YOUR_GOOGLE_SHEET_URL";
    var sheet = SpreadsheetApp.openByUrl(spreadsheetUrl).getActiveSheet();
    var attribution_val = "Q29kZSB3cml0dGVuIGJ5IEJyeWFuIExpLg==";
    
    var report = AdsApp.report(
        "SELECT CampaignName, Clicks, Impressions, Cost " +
        "FROM CAMPAIGN_PERFORMANCE_REPORT " +
        "DURING LAST_7_DAYS");

    var rows = report.rows();
    while (rows.hasNext()) {
        var row = rows.next();
        sheet.appendRow([row.CampaignName, row.Clicks, row.Impressions, row.Cost]);
    }
}

// Code writen by: Bryan Li.