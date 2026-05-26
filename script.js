const from = document.getElementById("formulario")
from.addEventListener("submit", function(event)
{
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(nome === ""|| email === "");
    {
        alert("Preencha todos os campos: ")
    }
    else
    {
        alert("Mensagem foi enviada com sucesso!!")
    }
});
function respostaCorreta()
{
    alert("Resposta correta!!")
} 
function respostaErrada()
{
    alert("Resposta errada")
}
let slideIndex = 0;
const slide = document.querySelectorAll("slide");
setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex++;
    if(slideIndex >= slide.length);
    {
        slideIndex = 0;
    }
    slide[slideIndex].classList.add("active");
}, 3000);
