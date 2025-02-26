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
  