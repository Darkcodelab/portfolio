const workCard = document.querySelectorAll(".work-card");
const contactCard = document.querySelectorAll(".contact-card");
const aboutCard = document.querySelectorAll(".about-card");
const workTray = document.querySelector(".work__tray");
const aboutTray = document.querySelector(".about__tray");
const contactTray = document.querySelector(".contact__tray");

for (let i = 0; i < 2; i++) {
  workCard[i].addEventListener("click", function () {
    workTray.style.right = "0";
    workTray.style.opacity = "1";
    contactTray.style.right = "-1200px";
    contactTray.style.opacity = "0";
    aboutTray.style.left = "-1200px";
    aboutTray.style.opacity = "0";
  });
  aboutCard[i].addEventListener("click", function () {
    aboutTray.style.left = "0";
    aboutTray.style.opacity = "1";
    workTray.style.right = "-1200px";
    workTray.style.opacity = "0";
    contactTray.style.right = "-1200px";
    contactTray.style.opacity = "0";
  });

  contactCard[i].addEventListener("click", function () {
    workTray.style.right = "-1200px";
    workTray.style.opacity = "0";
    contactTray.style.right = "0";
    contactTray.style.opacity = "1";
    aboutTray.style.left = "-1200px";
    aboutTray.style.opacity = "0";
  });
}
