const selectMenu = document.getElementById("base-color");
const colorPicker = document.getElementById("custom-color-picker");
const disableRefreshButton = document.getElementById("disableRefreshButton");
const enableRefreshButton = document.getElementById("enableRefreshButton");
const DISABLE_REFRESH_KEY = "disableRefresh";

// Load disable refresh preference from local storage, or set it to true by default
let disableRefresh = localStorage.getItem(DISABLE_REFRESH_KEY) !== "false";

// If disable refresh preference is set, disable the refresh button
if (disableRefresh) {
  disableRefreshButton.disabled = true;
} else {
  enableRefreshButton.disabled = true;
}

// Add event listeners
selectMenu.addEventListener("change", refreshPage);
colorPicker.addEventListener("change", refreshPage);
disableRefreshButton.addEventListener("click", toggleDisableRefresh);
enableRefreshButton.addEventListener("click", toggleDisableRefresh);

function refreshPage() {
  // If refresh is not disabled, reload the page
  if (!disableRefresh) {
    location.reload();
  }
}

function toggleDisableRefresh() {
  // Toggle disable refresh preference
  disableRefresh = !disableRefresh;
  try {
    localStorage.setItem(DISABLE_REFRESH_KEY, String(!disableRefresh));
  } catch (e) {
    console.log("Error setting local storage item:", e);
  }

  // Disable or enable the refresh button based on the preference
  if (disableRefresh) {
    disableRefreshButton.disabled = true;
    enableRefreshButton.disabled = false;
  } else {
    disableRefreshButton.disabled = false;
    enableRefreshButton.disabled = true;
  }
}
