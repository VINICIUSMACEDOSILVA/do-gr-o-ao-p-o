let section = document.getElementsByTagName("section");
let novoparagrafo = document.createElement("p")
let formularioelemento = document.getElementById("Formulario")
let labelelemento = document.getElementById("label")

novoparagrafo.textContent = "Paragrafo criado via JS"
section[0].appendChild(novoparagrafo);
formularioelemento.removeChild(labelelemento)