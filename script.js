// script.js

document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('formContato');
    const botaoEnviarForm = document.getElementById('botaoEnviarForm');
    const mensagemConfirmacao = document.getElementById('mensagemConfirmacao');
    const nomeExibido = document.getElementById('nomeExibido'); // Novo elemento para exibir o nome

    if (formContato && botaoEnviarForm && mensagemConfirmacao && nomeExibido) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página

            const nomeUsuario = document.getElementById('nomeUsuario').value;
            const doramaFavorito = document.getElementById('doramaFavorito').value;

            console.log(`Nome do usuário: ${nomeUsuario}`);
            console.log(`Dorama favorito: ${doramaFavorito}`);

            // Exibe o nome do usuário na mensagem de confirmação
            nomeExibido.textContent = nomeUsuario;
            mensagemConfirmacao.classList.remove('hidden'); // Torna a mensagem visível

            formContato.reset(); // Limpa os campos do formulário

            // Faz a mensagem de confirmação desaparecer após 5 segundos
            setTimeout(() => {
                mensagemConfirmacao.classList.add('hidden'); // Esconde a mensagem
            }, 5000);
        });
    } else {
        console.error("Um ou mais elementos do formulário ou mensagem de confirmação não foram encontrados. Verifique os IDs.");
    }
});