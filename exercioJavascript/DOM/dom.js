let elementosporclass = document.getElementsByClassName("texto");
let elementoporid = document.getElementById("Formulario");
let link = document.getElementsByTagName("a")

console.log(elementosporclass);
console.log(elementoporid);

link[0].textContent = "musica boa"
link[0].style.color = "red";
link[0].style.fontSize = "30px";

console.log(link[0].textContent);

