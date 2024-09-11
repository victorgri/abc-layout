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
document.querySelector('.hero').appendChild(herobutton);
