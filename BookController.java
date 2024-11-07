package com.seuusuario.esseeujali.controller;

import com.seuusuario.esseeujali.service.BookService;
import com.seuusuario.esseeujali.model.Book;

public class BookController {
    private BookService bookService = new BookService();

    public void viewBookDetails(String title) {
        for (Book book : bookService.getAllBooks()) {
            if (book.getTitle().equals(title)) {
                System.out.println("Title: " + book.getTitle());
                System.out.println("Author: " + book.getAuthor());
                System.out.println("Genre: " + book.getGenre());
                System.out.println("Read: " + book.isRead());
            }
        }
    }

    public void addBook(String title, String author, String genre) {
        Book book = new Book(title, author, genre);
        bookService.addBook(book);
    }

    public void listBooks() {
        for (Book book : bookService.getAllBooks()) {
            System.out.println(book.getTitle() + " by " + book.getAuthor() + " - " + book.getGenre() + " (Read: " + book.isRead() + ")");
        }
    }

    public void markBookAsRead(String title) {
        bookService.markAsRead(title);
    }
}
