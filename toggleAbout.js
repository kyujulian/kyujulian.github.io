const toggleAboutButton = document.getElementById("toggle-about");
console.log(toggleAboutButton);
const aboutParagraph = document.querySelector(".paragraph");

toggleAboutButton.addEventListener("click", () => {
  aboutParagraph.classList.toggle("active");
  aboutParagraph.classList.toggle("hidden");
});
// )}
