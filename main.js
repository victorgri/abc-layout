import "./style.css";

const burger = document.getElementById("burger-menu-btn");
let open = false;

burger.addEventListener("click", function () {
  open = !open;

  if (!open) {
    burger.innerHTML = `<img class="burger-menu-icon" src="./images/burger.png" alt="menu" />`;
  }
  if (open) {
    burger.innerHTML = `<img class="burger-menu-icon" src="./images/close.png" alt="menu" />`;
  }
  const burgerMenu = document.getElementById("burger-menu");
  burgerMenu.classList.toggle("open");
});

const Button = (label) => {
  const button = document.createElement('button')
  button.className = 'button'

  button.innerText = `${label}`;

  return button;
}

const herobutton = Button('GET STARTED');
herobutton.classList.add('hero__button')
document
  .querySelector(".hero__slide")
  .insertAdjacentElement("beforebegin", herobutton);

const stakeButton = Button("Stake now");
stakeButton.classList.add('stake__button');

document.querySelector(".stake__text").append(stakeButton);

document.addEventListener("DOMContentLoaded", function () {
  const animatedBlocks = document.querySelectorAll(".animate-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Зупиняє спостереження після анімації
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedBlocks.forEach((block) => {
    observer.observe(block);
  });
});

