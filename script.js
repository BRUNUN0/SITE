document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um listener para o envio do formulário
    document.querySelector('.formLogin').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        verificarCredenciais();
    });

    // Adiciona um listener para o evento de teclado nos campos de entrada
    document.getElementById('usuario').addEventListener('keypress', function(event) {
        // Verifica se a tecla pressionada é "Enter"
        if (event.key === 'Enter') {
            verificarCredenciais();
        }
    });

    document.getElementById('password').addEventListener('keypress', function(event) {
        // Verifica se a tecla pressionada é "Enter"
        if (event.key === 'Enter') {
            verificarCredenciais();
        }
    });

    // Adiciona um listener para o clique no botão de acesso
    document.getElementById("btn-acessar").addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão
        verificarCredenciais();
    });

    // Função para verificar as credenciais
    function verificarCredenciais() {
        // Obter os valores do formulário
        var username = document.getElementById('usuario').value;
        var password = document.getElementById('password').value;

        // Verificar as credenciais (isso pode ser mais sofisticado em um ambiente de produção)
        if (username === 'usuario' && password === 'senha') {
            // Redirecionar para a próxima página se as credenciais estiverem corretas
            window.location.href = 'pagina_selecao.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    }
});

window.onload = function() {
    var imagens = ['Assets/Fotos_UFVs/bg1.jpg', 'Assets/Fotos_UFVs/bg2.jpg', 'Assets/Fotos_UFVs/bg3.jpg', 'Assets/Fotos_UFVs/bg4.jpg', 'Assets/Fotos_UFVs/bg5.jpg', 'Assets/Fotos_UFVs/bg6.jpg', 'Assets/Fotos_UFVs/bg7.jpg', 'Assets/Fotos_UFVs/bg8.jpg', 'Assets/Fotos_UFVs/bg9.jpg', 'Assets/Fotos_UFVs/bg10.jpg', 'Assets/Fotos_UFVs/bg11.jpg']; // Adicione o caminho das suas imagens aqui
    var randomIndex = Math.floor(Math.random() * imagens.length);
    var imagemAleatoria = imagens[randomIndex];
    var elementoBackground = document.getElementById('background');
    elementoBackground.style.backgroundImage = 'url(' + imagemAleatoria + ')';
};