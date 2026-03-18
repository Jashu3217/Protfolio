// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color =
      link.getAttribute("href") === "#" + current
        ? "#00e5ff"
        : "";
  });
});
