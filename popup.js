document.addEventListener('DOMContentLoaded', function() {
  // Get the extract button
  const extractButton = document.getElementById('extract-button');
  
  // Add a click event listener to the extract button
  extractButton.addEventListener('click', function() {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Get the title of the active tab and display it in the popup
      const tabTitle = tabs[0].title;
      document.getElementById('title').textContent = tabTitle;
    });
  });
});
