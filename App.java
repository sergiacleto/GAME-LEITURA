package com.seuusuario.esseeujali;

import com.seuusuario.esseeujali.controller.UserController;
import com.seuusuario.esseeujali.controller.BookController;

public class App {
    public static void main(String[] args) {
        UserController userController = new UserController();
        BookController bookController = new BookController();

        // Registrar um novo usuário
        userController.registerUser("usuario1", "senha123");

        // Realizar login
        boolean loginSuccessful = userController.loginUser("usuario1", "senha123");
        if (loginSuccessful) {
            System.out.println("Login bem-sucedido!");
            int pontos = userController.viewUserPoints("usuario1");
            System.out.println("Pontos do usuário: " + pontos);

            // Adicionar livros
            bookController.addBook("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
            bookController.addBook("1984", "George Orwell", "Distopia");

            // Listar livros
            System.out.println("\nLista de livros:");
            bookController.listBooks();

            // Visualizar detalhes de um livro
            System.out.println("\nDetalhes do livro 'O Senhor dos Anéis':");
            bookController.viewBookDetails("O Senhor dos Anéis");

            // Marcar livro como lido
            bookController.markBookAsRead("O Senhor dos Anéis");

            // Verificar se o livro foi marcado como lido
            System.out.println("\nDepois de marcar como lido:");
            bookController.viewBookDetails("O Senhor dos Anéis");
        } else {
            System.out.println("Falha no login.");
        }
    }
}
