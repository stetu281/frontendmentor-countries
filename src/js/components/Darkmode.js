export const Darkmode = () => {
  document.querySelector(".header__button").addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    const icon = document.querySelector(".icon");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
  });
};
