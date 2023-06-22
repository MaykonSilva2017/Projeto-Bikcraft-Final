const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if (resposta.ok) {
        formulario.innerHTML =
            "<p>Mensagem enviada, em breve entraremos em contao.</p>";
    } else {
        formulario.innerHTML =
            "<p>Erro no envio, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
