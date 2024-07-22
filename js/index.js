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