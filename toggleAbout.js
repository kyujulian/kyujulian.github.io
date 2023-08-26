const toggleAboutButton = document.getElementById("toggle-about");

const paragraphContainer = document.getElementById("about-paragraph");
const content = document.getElementById("written-content");

var expanded = false;

toggleAboutButton.addEventListener("click", () => {
  if (!expanded) {
    var contentHeight = content.clientHeight;
    paragraphContainer.style.height = contentHeight + "px";
    content.style.opacity = "1";
  } else {
    paragraphContainer.style.height = "16px"; //obtained beforehand
    content.style.opacity = "0";
  }
  expanded = !expanded;
});
