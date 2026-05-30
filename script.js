const from = document.getElementById("formulario");
from.addEventListener("submit", function(event)
{
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(nome ===""|| email === "")
    {
        alert("Preencha todos os campos: ")
    }
    else
    {
        alert("Mensagem foi enviada com sucesso!")
    }
});
function resposta(botao, correto)
    {
        const resultado = document.getElementById("resultadoQuiz");
        const botoes = document.querySelectorAll(".quiz-buttons button");
            botoes.forEach((btn) => 
            {
                btn.disabled = true;
            });
        if(correto)
        {
            botao.style.background = "#22c55e";
            resultado.innerHTML = "Resposta correta";
            resultado.style.color = "#22c55e";
        } 
        else 
        {
            botao.style.background = "#ef4444";
            resultado.innerHTML = "Resposta Incorreta"
            resultado.style.color = "#ef4444";
        }

    }

