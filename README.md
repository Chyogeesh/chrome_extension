# chrome_extension
#It is a internship assignment
Create a directory for your extension project and navigate into it
mkdir chrome-extension-demo
cd chrome-extension-demo
Create the necessary files:
manifest.json: Defines the extension's metadata and behavior.
popup.html: HTML file for the extension's popup.
popup.js: JavaScript file to handle the popup behavior.
Add an icon (icon.png) in the project directory. This will be displayed as the extension icon.
Zip the contents of your project directory:
zip -r chrome-extension-demo.zip *
Upload the zip file to your GitHub repository.
To install and test the extension:
Open Chrome browser.
Go to chrome://extensions/.
Enable Developer mode.
Click on "Load unpacked" and select the directory containing your extension files.
The extension will be added to Chrome and you can see its icon in the toolbar.
Click on the extension icon, and the popup will show a button labeled "Get Tab Title". Clicking this button will display the title of the current tab.
