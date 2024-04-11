const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/* Dark Mode */

let index = 1;
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");

darkModeBtn.addEventListener("click", () => {
  applyDarkMode();
});

lightModeBtn.addEventListener("click", () => {
  applyLightMode();
});

function applyDarkMode() {
  index = 0;
  applyTheme();
}

function applyLightMode() {
  index = 1;
  applyTheme();
}

function applyTheme() {
  const body = document.body;
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5");
  const paragraphs = document.querySelectorAll("p");
  const links = document.querySelectorAll("a");
  const footer = document.querySelector("footer");
  const exploreShadow = document.querySelector(".explore__shadow");

  body.classList.toggle("dark");
  body.style.backgroundColor = index === 0 ? "black" : "white";

  headings.forEach((heading) => {
    try {
      heading.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting heading color:", error);
    }
  });

  paragraphs.forEach((paragraph) => {
    try {
      paragraph.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting paragraph color:", error);
    }
  });

  links.forEach((link) => {
    try {
      link.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting link color:", error);
    }
  });

  try {
    footer.style.backgroundColor =
      index === 0 ? "var(--container-color)" : "#C3C3C3";
  } catch (error) {
    console.error("Error setting footer background color:", error);
  }

  try {
    exploreShadow.style.background =
      index === 0
        ? "linear-gradient(180deg, hsl(0, 0%, 0%) 5%, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 0) 60%, hsl(0, 0%, 0%) 92%)"
        : "linear-gradient(180deg, hsl(0, 0%, 100%) 5%, hsla(0, 0%, 100%, 0) 40%, hsla(0, 0%, 100%, 0) 60%, hsl(0, 0%, 100%) 92%)";
  } catch (error) {
    console.error("Error setting explore shadow background:", error);
  }
}

// Initial theme application
applyTheme();
