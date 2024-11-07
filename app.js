document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simular o login chamando o método loginUser
    const loginResult = loginUser(username, password);
    const loginResultDiv = document.getElementById('loginResult');
    if (loginResult) {
        loginResultDiv.innerText = 'Login bem-sucedido!';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('loggedInSection').style.display = 'block';
        displayBooks();
    } else {
        loginResultDiv.innerText = 'Falha no login.';
    }
});

// Função de login simulada (em vez de chamar o backend, apenas um exemplo)
function loginUser(username, password) {
    const users = {
        'usuario1': 'senha123'
    };
    return users[username] === password;
}

// Função para exibir a lista de livros
function displayBooks() {
    const books = getBooks();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerText = `${book.title} by ${book.author} - ${book.genre} (Read: ${book.read ? 'Yes' : 'No'})`;
        bookList.appendChild(listItem);
    });
}

// Função para obter a lista de livros (simulação)
function getBooks() {
    return [
        { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', genre: 'Fantasia', read: false },
        { title: '1984', author: 'George Orwell', genre: 'Distopia', read: true }
    ];
}

// Manipulador para adicionar livro
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    // Adicionar o livro à lista (simulação)
    addBook(title, author, genre);
    displayBooks();
});

function addBook(title, author, genre) {
    // Esta função deve realmente adicionar o livro ao backend ou ao armazenamento
    console.log(`Adicionar livro: ${title} by ${author} - ${genre}`);
}
