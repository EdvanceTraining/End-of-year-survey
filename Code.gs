const SHEET_NAME = "Survey Responses";

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Overall course rating",
        "Would recommend",
        "Most valuable part",
        "Suggestions for improvement"
      ]);

      sheet.getRange(1, 1, 1, 5)
        .setFontWeight("bold")
        .setBackground("#1F4E79")
        .setFontColor("#FFFFFF");
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.rating || "",
      data.recommend || "",
      data.valuable || "",
      data.improvements || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Course feedback form is connected.")
    .setMimeType(ContentService.MimeType.TEXT);
}
