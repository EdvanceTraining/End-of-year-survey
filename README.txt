# GitHub Course Feedback Survey

GitHub Pages is a static website host, so it cannot directly write responses into a file stored in the GitHub repository.

This version keeps the website on GitHub Pages and stores each response in a Google Sheet.

## Files

- `index.html` — upload this to your GitHub repository.
- `Code.gs` — paste this into Google Apps Script.

## Set-up

1. Create a new Google Sheet.
2. In the Sheet, select **Extensions → Apps Script**.
3. Delete the sample code and paste in the contents of `Code.gs`.
4. Select **Deploy → New deployment**.
5. Choose **Web app**.
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Select **Deploy** and authorise access.
8. Copy the Web App URL.
9. Open `index.html`.
10. Replace:

   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

   with your Web App URL.
11. Upload `index.html` to your GitHub repository.
12. Open the GitHub Pages website and submit a test response.

Responses will appear automatically in a tab called **Survey Responses** in the Google Sheet.

## Important

Do not put a Google password, API key, or GitHub personal access token in the HTML file. Anything inside a GitHub Pages website can be viewed by visitors.
