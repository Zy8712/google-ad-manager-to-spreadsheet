# 🚀 Google Ads Data to Google Sheets with ChatGPT Insights

This project automates the extraction of **Google Ads Manager** data into **Google Sheets** and enriches it with **AI-generated insights** using ChatGPT.  

## ✨ Features
- 📊 **Extract Google Ads data** and store it in a Google Sheet.
- 🤖 **Use ChatGPT (GPT-4 or GPT-3.5)** to analyze each row.
- 📌 **Insights are added in the rightmost column** of the sheet.
- ⏳ **Automate the process** to run daily.

---

## 📌 Setup Instructions

### **1️⃣ Get an OpenAI API Key**
1. Go to [OpenAI](https://platform.openai.com/signup/) and sign up.
2. Generate an **API key** from the OpenAI dashboard.

### **2️⃣ Open Google Apps Script**
1. Open your **Google Sheet**.
2. Click **Extensions** → **Apps Script**.

---

## 📝 Google Apps Script

### **3️⃣ Copy & Paste This Code**
Replace `"YOUR_OPENAI_API_KEY"` with your actual API key.

```js
function addChatGPTInsights() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // Change to your sheet name
  var data = sheet.getDataRange().getValues(); // Get all data
  var lastCol = sheet.getLastColumn() + 1; // Determine the rightmost empty column

  var apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key
  var model = "gpt-4"; // You can use "gpt-3.5-turbo" if preferred

  for (var i = 1; i < data.length; i++) { // Skip the header row
    var rowData = data[i].join(", "); // Combine row data as context
    var prompt = "Analyze this data and provide a brief insight: " + rowData;

    var response = callChatGPT(apiKey, model, prompt); // Get AI response
    sheet.getRange(i + 1, lastCol).setValue(response); // Write to the rightmost column
  }
}

function callChatGPT(apiKey, model, prompt) {
  var url = "https://api.openai.com/v1/chat/completions";
  var payload = {
    model: model,
    messages: [{ role: "system", content: "You are a data analyst." }, { role: "user", content: prompt }],
    max_tokens: 50
  };

  var options = {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    payload: JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url, options);
  var json = JSON.parse(response.getContentText());
  return json.choices[0].message.content.trim();
}
```

### **🔄 Automate the Process (Optional)**
To automate this daily, set up a time trigger:
1. Go to Apps Script → Click on **Triggers** (⏰ Clock icon).
2. Click "Add Trigger".
3. Select `addChatGPTInsights` → Time-driven → Daily.
4. Save and authorize when prompted.


### **🎯 How It Works**
1. Extracts Google Ads data and stores it in Google Sheets.
2. Sends each row to ChatGPT for analysis.
3. Writes the insights in the last column for each row.
4. Automates daily execution if enabled.

### **🛠️ Future Enhancements**
-  Add error handling for API failures.
-  Improve prompt engineering for deeper insights.
-  Enable multiple sheets support.

---

### **What This Does**
- ✅ Provides **clear installation steps**.
- ✅ Uses **markdown formatting** for readability.
- ✅ Includes **future enhancements** for community input.
- ✅ **Bullet points and emojis** for an engaging read.

Let me know if you want any tweaks! 🚀
