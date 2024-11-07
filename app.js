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

// Função para obter a lista de livros (atualizada)
function getBooks() {
    return [
        { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', genre: 'Fantasia', read: false },
        { title: '1984', author: 'George Orwell', genre: 'Distopia', read: true },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Ficção', read: false },
        { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', read: false },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Ficção', read: true },
        { title: 'Moby Dick', author: 'Herman Melville', genre: 'Aventura', read: false },
        { title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Histórico', read: false },
        { title: 'Ulysses', author: 'James Joyce', genre: 'Ficção', read: false },
        { title: 'The Odyssey', author: 'Homer', genre: 'Épico', read: true },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Crime', read: false },
        { title: 'Madame Bovary', author: 'Gustave Flaubert', genre: 'Romance', read: false },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Ficção', read: true },
        { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Distopia', read: false },
        { title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'Poema', read: false },
        { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Filosófico', read: false },
        { title: 'In Search of Lost Time', author: 'Marcel Proust', genre: 'Romance', read: false },
        { title: 'The Iliad', author: 'Homer', genre: 'Épico', read: true },
        { title: 'Don Quixote', author: 'Miguel de Cervantes', genre: 'Ficção', read: false },
        { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', genre: 'Realismo Mágico', read: false },
        { title: 'Les Misérables', author: 'Victor Hugo', genre: 'Histórico', read: true },
        { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'Ficção', read: false },
        { title: 'Anna Karenina', author: 'Leo Tolstoy', genre: 'Romance', read: false },
        { title: 'Frankenstein', author: 'Mary Shelley', genre: 'Ficção Científica', read: true },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasia', read: false },
        { title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Distopia', read: false },
        { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Filosófico', read: true },
        { title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Drama', read: false },
        { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasia', read: false },
        { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', genre: 'Infantil', read: true },
        { title: 'The Grapes of Wrath', author: 'John Steinbeck', genre: 'Ficção', read: false },
        { title: 'The Lord of the Flies', author: 'William Golding', genre: 'Ficção', read: false },
        { title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Romance', read: true }
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
