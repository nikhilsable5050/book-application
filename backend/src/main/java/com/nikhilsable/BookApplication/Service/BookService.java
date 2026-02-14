package com.nikhilsable.BookApplication.Service;

import com.nikhilsable.BookApplication.Entity.Book;
import com.nikhilsable.BookApplication.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    // Add book
    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Get book by title
    public Book getBookByName(String name) {
        return bookRepository.findBookByTitle(name);
    }

    // Full update (PUT)
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    // Partial update (PATCH)
    public Book patchBook(Integer id, Book book) {

        Book existing = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (book.getTitle() != null) {
            existing.setTitle(book.getTitle());
        }

        if (book.getAuthor() != null) {
            existing.setAuthor(book.getAuthor());
        }

        if (book.getGenre() != null) {
            existing.setGenre(book.getGenre());
        }

        return bookRepository.save(existing);
    }

    // Delete book
    public void deleteBook(Integer id) {
        bookRepository.deleteById(id);
    }
}
