const heroBtn = document.getElementById("hero-btn");

//button to scroll down from hero section
heroBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
});
