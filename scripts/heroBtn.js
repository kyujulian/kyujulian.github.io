const heroBtn = document.getElementById("hero-btn");

heroBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
});
