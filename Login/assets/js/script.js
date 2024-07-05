document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Realiza uma requisição AJAX para validar o login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerText = 'Login Realizado com Sucesso!';
            // Redireciona para outra página
            window.location.href = 'success.html';
        } else {
            document.getElementById('message').innerText = 'Usuário ou senha inválidos!';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').innerText = 'Ocorreu um erro. Tente novamente mais tarde.';
    });
});
