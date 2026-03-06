const menu = document.querySelector(".menu");
const navLinks = document.querySelector("#main-menu");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
  navLinks?.classList.toggle("active");
});