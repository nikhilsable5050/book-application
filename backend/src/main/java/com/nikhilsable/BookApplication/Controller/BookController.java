package com.nikhilsable.BookApplication.Controller;

import com.nikhilsable.BookApplication.Entity.Book;
import com.nikhilsable.BookApplication.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book/v1/books")
@CrossOrigin(origins = "${frontend.url}")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // Add book
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.addBook(book));
    }

    // Get all books
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    // Get book by name
    @GetMapping("/{bookName}")
    public ResponseEntity<Book> getBookByName(@PathVariable String bookName) {
        return ResponseEntity.ok(bookService.getBookByName(bookName));
    }

    // Update full book
    @PutMapping
    public ResponseEntity<Book> updateBook(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.updateBook(book));
    }

    // Partial update
    @PatchMapping("/{id}")
    public ResponseEntity<Book> patchBook(
            @PathVariable Integer id,
            @RequestBody Book book) {
        return ResponseEntity.ok(bookService.patchBook(id, book));
    }

    // Delete book
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
