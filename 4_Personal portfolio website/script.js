
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#111";
    navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.6)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});
/* Created By Shivam Kumar...   */ 