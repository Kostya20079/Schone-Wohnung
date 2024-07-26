document.addEventListener("DOMContentLoaded", () => {
  const scrollEl = document.getElementById("scrollBtn");
  scrollEl.addEventListener("click", (e) => {
    e.preventDefault();
    let target = scrollEl.getAttribute("href");
    let targetPosition = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});


const burger = document.querySelector('.burger')
const navContent = document.querySelector('.nav-menu__content')

burger.addEventListener("click", () => {
  burger.classList.toggle('active')
  navContent.classList.toggle('open')
})