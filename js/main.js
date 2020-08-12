const name = "Ola";
const age = 20;
console.log(`Witaj w konsoli!
Jeżeli dotarłeś aż tu, to znaczy, że jesteś zainteresowany jak działa moja strona,
Spokojnie, nie mam nic do ukrycia:)`);

function greeting(name, age) {
  console.log(`Witaj! Moje imie to ${name} i mam ${age} lat.`);
}

greeting(name, age);

const hamburgerMenu = document.querySelector(".hamburger--js");

hamburgerMenu.addEventListener("click", () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});
