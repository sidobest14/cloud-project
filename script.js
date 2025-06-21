/**
 * Handles tab click and displays the corresponding dropdown
 */
function openTab(tabId) {
  // Hide all currently visible dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(d => d.style.display = 'none');

  // Find the tab button that triggered this function using its tabId
  const tabButton = document.querySelector(`[onclick*="${tabId}"]`);

  // Get the closest parent tab-wrapper of the clicked button
  const tabWrapper = tabButton.closest('.tab-wrapper');

  // Find the dropdown inside this tab-wrapper
  const dropdown = tabWrapper.querySelector('.dropdown');

  // Display the associated dropdown
  if (dropdown) dropdown.style.display = 'block';
}


/**
 * Simulates an API call when a dropdown item is selected
 * - Shows a loading message
 * - Updates the .content area
 * - Hides dropdowns and resets active styles
 */
function simulateAPICall(itemName) {
  const body = document.body;
  const status = document.getElementById('status-bar');
  const content = document.querySelector('.content'); // Using class selector for content box

  // Display loading message in status bar
  status.textContent = `Status: Loading ${itemName}...`;

  // Set wait cursor on entire page
  body.style.cursor = 'wait';

  // Hide all dropdowns and remove active classes from all tabs
  document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
    wrapper.classList.remove('active');
    wrapper.querySelector('.dropdown').style.display = 'none';
  });

  // Simulate delay for API response, then:
  setTimeout(() => {
    // Reset cursor to default
    body.style.cursor = 'default';

    // Update status bar with loaded message
    status.textContent = `Status: Loaded ${itemName}`;

    // Inject content into content area
    content.innerHTML = `
      <h4>${itemName}</h4>
      <p>This is the content for <strong>${itemName}</strong>.</p>
    `;
  }, 2000); // Simulate 1 second API delay
}


/**
 * Global event listener to close dropdowns when clicking outside any tab
 */
document.addEventListener('click', function (e) {
  // Check if click happened inside a tab-wrapper
  const clickedInside = e.target.closest('.tab-wrapper');

  // If not inside any tab, hide all dropdowns and remove active classes
  if (!clickedInside) {
    document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
      wrapper.classList.remove('active');
      wrapper.querySelector('.dropdown').style.display = 'none';
    });
  }
});