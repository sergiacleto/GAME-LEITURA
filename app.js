document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simular o login chamando o método loginUser
    const loginResult = loginUser(username, password);
    document.getElementById('loginResult').innerText = loginResult ? 'Login bem-sucedido!' : 'Falha no login.';
});

// Função de login simulada (em vez de chamar o backend, apenas um exemplo)
function loginUser(username, password) {
    const users = {
        'usuario1': 'senha123'
    };
    return users[username] === password;
}
