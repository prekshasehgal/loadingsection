const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const loadingSectionEl = document.querySelector(".loadingSection"); // Assuming your section has this class

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;

  if (idx === 101) { // Hide after reaching 100%
    loadingSectionEl.style.display = "none"; // Hide the loading section

    // Open the target website in a new tab/window using a safe method
    const link = document.createElement("a");
    link.href = "https://www.google.com/";
    link.click(); // Simulate a click to trigger navigation
    
  } else {
    setTimeout(updateNum, 20); // Continue animation if not 100%
  }
}