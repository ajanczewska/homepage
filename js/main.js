const name = "Ola";
const age = 20;
console.log(`Witaj w konsoli!
Jeżeli dotarłeś aż tu, to znaczy, że jesteś zainteresowany jak działa moja strona,
Spokojnie, nie mam nic do ukrycia:)`);


const addText = (classSelector, content) => {
    document.querySelector(classSelector).innerHTML = content;

}

addText(".projects_section--js", "Przykładowy tekst uzupełninony przez JS:)")

function greeting(name, age) {
    console.log(`Witaj! Moje imie to ${name} i mam ${age} lat.`)
}

greeting(name, age)