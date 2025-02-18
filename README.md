<a name="top"></a>

<div align="center">
    <img src="./readme-assets/ads-to-sheets.png" width="800px" />
    <h1>Google Ads Data Scraper & Automation</h1>
    <img src="https://skillicons.dev/icons?i=python,js,nodejs,github,vscode,gcp&theme=dark" />
</div>

> [!IMPORTANT]
> This repository provides two methods to **extract Google Ads data** and store it in **Google Sheets** for automated daily recording.


## **Methods**
1. **Google Ads API (Python)** → Best for full control & external automation.
2. **Google Ads Scripts (JavaScript)** → Best for quick automation within Google Ads Manager.

---

## **1. Google Ads API (Python)**
### **Overview**
This method fetches Google Ads data using the **Google Ads API** and stores it in a Google Sheet.

### **Requirements**
- A **Google Ads Developer Token**
- A **Google Cloud Project** with API access
- A **Google Ads Account**
- Python 3.x and the following libraries:
  ```bash
  pip install google-ads gspread oauth2client
  ```

### **Setup Instructions**
1. Enable Google Ads API
- Sign up for a Google Ads Developer Token: Google Ads API Center
- Enable API access in Google Cloud Console.
- Generate OAuth credentials and download `credentials.json`.
2. Update Google Ads API Configuration
- In your working directory, create a `google-ads.yaml` file:
```
developer_token: "YOUR_DEVELOPER_TOKEN"
client_id: "YOUR_CLIENT_ID"
client_secret: "YOUR_CLIENT_SECRET"
refresh_token: "YOUR_REFRESH_TOKEN"
```
3. Run the Script
<img src="./readme-assets/method1-full.png" alt="method1-full" />

4. Automate Daily Execution
- Use **Google Cloud Scheduler**, **cron job**, or **Task Scheduler** to run the script daily.

<p align="right"><a href="#top">back to top</a></p>

## **2. Google Ads Scripts (JavaScript)**
### **Overview**
This method runs a Google Ads Script inside Google Ads Manager to fetch data and store it in a Google Sheet.

### **Setup Instructions**
1. Go to Google Ads Manager
- Navigate to Tools & Settings > Scripts.
- Click + New Script.
2. Copy & Paste the Script
<img src="./readme-assets/method2-script.png" alt="method2-script" />

3. Save & Authorize the Script
- Click **Authorize** when prompted.
- Run the script to test data retrieval.
4. Schedule Daily Automation
- Click **Create Schedule** in Google Ads Scripts.
- Set it to run **once per day**.

<p align="right"><a href="#top">back to top</a></p>

## **Comparison Table**
| Feature | Google Ads API (Python) | Google Ads Scripts (JavaScript) |
| :- | :- | :- |
| Difficulty | Medium | Easy
| Customization | High | Limited
| Requires Google Cloud Setup |	✅ Yes | ❌ No
| Runs Outside Google Ads | ✅ Yes | ❌ No
| Runs Inside Google Ads | ❌ No	| ✅ Yes
| Best For | Developers who need advanced reports | Marketers who want quick automation

<p align="right"><a href="#top">back to top</a></p>

## **Contributing**
Feel free to submit pull requests or report issues if you find any improvements.

## **License**
This project is licensed under the MIT License.

## **Attribution**
Google Ad + Google Sheet Header Image from Unito. Link to article: <a href="https://unito.io/blog/guide-how-to-sync-google-ads-spreadsheet/">here</a>.

<p align="right"><a href="#top">back to top</a></p>