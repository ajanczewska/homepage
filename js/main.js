
const hamburgerMenu = document.querySelector(".hamburger--js");

hamburgerMenu.addEventListener("click", () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});

fetch('https://api.github.com/users/ajanczewska/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
  for (let repo of resp){
    const {name, html_url} = repo;
    const reposList = document.querySelector('.list--js');
    const template = `<li>
    ${name} <a href="${html_url}" title="link do repozytorium ${name} 
    na githubie ">link do gihuba</a>
    </li>`;

    reposList.innerHTML += template
  }

})
.catch(error =>{
  console.log("failed in download repos")
})