// Function to open a selected tab and hide others

function openTab(tabId, titleText) {

  // Select all elements with the class 'tab-content' (all the tab content sections)

  const contents = document.querySelectorAll('.tab-content');

   // Loop through each tab content and hide it by setting display to 'none'

  contents.forEach(div => div.style.display = 'none');

  // Display the selected tab by setting its display to 'block'

  document.getElementById(tabId).style.display = 'block';

  // Update the tab title heading with the provided title text

  document.getElementById('tab-title').textContent = titleText;

}

// Function to simulate an asynchronous REST API call

function simulateAPICall(itemName) {

// Get a reference to the status bar element by its ID

  const statusBar = document.getElementById('status-bar');

  // Update the status bar text to show which menu item's API was "called"

  statusBar.textContent = `The REST API endpoint for menu item ${itemName} is called`;
  
}
