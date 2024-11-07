package com.seuusuario.esseeujali.service;

import com.seuusuario.esseeujali.model.Book;
import java.util.List;
import java.util.ArrayList;

public class BookService {
    private List<Book> books = new ArrayList<>();

    public List<Book> getAllBooks() {
        return books;
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public void markAsRead(String title) {
        for (Book book : books) {
            if (book.getTitle().equals(title)) {
                book.setRead(true);
            }
        }
    }
}
