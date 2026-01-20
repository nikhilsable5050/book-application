package com.nikhilsable.BookApplication.Service;

import com.nikhilsable.BookApplication.Entity.Book;
import com.nikhilsable.BookApplication.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public Book addBook(Book book){
        return bookRepository.save(book);

    }

    public Book getBookByName(String name) {
         return bookRepository.findBookByTitle(name);

    }

    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(Integer id) {
        bookRepository.deleteById(id);
    }
}
