document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = this.getElementById("hamburger-icon");
  const sideBar = this.getElementById("menu-container");
  menuIcon.addEventListener("click", function () {
    sideBar.classList.toggle("open");
  });

  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  const animationDuration = 15; // Total duration of one cycle in seconds
  const delayBetweenItems = animationDuration / totalItems;

  items.forEach((item, index) => {
    item.style.animationDelay = `${delayBetweenItems * index}s`;
  });

  setTimeout(() => {
    items[0].style.animation = `fade ${animationDuration}s infinite`;
    items[0].style.animationDelay = "0s";
  }, delayBetweenItems * 1000);
});
