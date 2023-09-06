const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  console.log("clicked");
  navbar.classList.toggle("nav__expanded");
});

// ------------------ active tab ----------------------

const activePage = window.location.pathname;
const navItems = document.querySelectorAll("nav a").
forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
