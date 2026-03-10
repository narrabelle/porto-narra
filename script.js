const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

document.addEventListener("mousemove", e => {
  const spark = document.createElement("span");
  spark.className = "spark";
  spark.style.left = e.pageX + "px";
  spark.style.top = e.pageY + "px";
  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 600);
});

/* Hamburger Menu */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Navbar hide on scroll */
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

document.addEventListener("mousemove", (e) => {
  const glitter = document.createElement("span");
  glitter.className = "cursor-glitter";

  glitter.style.left = e.pageX + "px";
  glitter.style.top = e.pageY + "px";

  document.body.appendChild(glitter);

  setTimeout(() => {
    glitter.remove();
  }, 700);
});

let last = 0;
document.addEventListener("mousemove", e => {
  const now = Date.now();
  if (now - last < 40) return;
  last = now;
  // glitter code
});

const form = document.getElementById("contactForm");
const successMsg = document.querySelector(".success-message");

form.addEventListener("submit", () => {
  successMsg.style.display = "block";
});

function openGraphic(){
document.getElementById("graphicPortfolio").style.display="flex";
}

function closeGraphic(){
document.getElementById("graphicPortfolio").style.display="none";
}
function openWebsitePortfolio(){
document.getElementById("websitePortfolio").style.display="flex";
}

function closeWebsitePortfolio(){
document.getElementById("websitePortfolio").style.display="none";
}

function openGraphicPortfolio(){
document.getElementById("graphicPortfolio").style.display="flex";
}

function closeGraphicPortfolio(){
document.getElementById("graphicPortfolio").style.display="none";
}
function showWebPortfolio(){
document.getElementById("webPortfolio").style.display = "block";
document.getElementById("webPortfolio").scrollIntoView({behavior:"smooth"});
}