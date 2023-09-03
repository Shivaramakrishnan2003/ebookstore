package com.ebookstore.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ebookstore.main.model.Book;
import com.ebookstore.main.service.BookService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class BookController {
	@Autowired
	BookService ser;
	
	//Read
	@GetMapping("getBook")
	public List<Book> show(){
		return ser.read();
	}
	
	//Read by Id
	@GetMapping("getBook/{id}")
	public Optional<Book> showId(@PathVariable int id){
		return ser.readid(id);
	}
	
	//Create
	@PostMapping("addBook")
	public String add(@RequestBody Book bk) {
		return ser.create(bk);
	}
	
	//Update
	@PutMapping("updateBook")
	public String update(@RequestBody Book bk) {
		return ser.update(bk);
	}
	
	//Update by Id
	@PutMapping("updateBookId")
	public String updateId(@RequestParam int id, @RequestBody Book bk) {
		return ser.updateid(id, bk);
	}
	
	//Delete
	@DeleteMapping("deleteBook")
	public String delete(Book bk) {
		return ser.delete(bk);
	}
	
	//Delete by Id
	@DeleteMapping("deleteBookId/{id}")
	public String deleteId(@PathVariable int id) {
		return ser.deleteid(id);
	}
	
	//Read sorted
	@GetMapping("getSortedBook/{s}")
	public List<Book> readSorted(@PathVariable String s){
		return ser.readSorted(s);
	}
	
	//Read by Pages
	@GetMapping("/getPages/pgsize{size}/pgno{page}")
	public List<Book> readPages(@PathVariable int page, @PathVariable int size){
		return ser.readPages(page, size);
	}
	
	//Read by Sorted pages
	@GetMapping("/getSortedPages/sortby{s}/pgsize{size}/pgno{page}")
	public List<Book> readSortedPages(@PathVariable int page, @PathVariable int size, @PathVariable String s){
		return ser.readSortedPages(page, size, s);
	}
	
	//Query read by id
	@GetMapping("/queries/read/id/{id}")
	public List<Book> readByIdQuery(@PathVariable int id){
		return ser.readbyid(id);
	}
	
	//Query read by author
	@GetMapping("queries/read/author/{name}")
	public List<Book> readByAuthorQuery(@PathVariable String name){
		return ser.readbyauthor(name);
	}
	
	//Query delete by id
	@DeleteMapping("queries/delete/id/{id}")
	public int deleteByIdQuery(@PathVariable int id){
		return ser.deletebyid(id);
	}
	
	//Query update by id
	@PutMapping("queries/update/price/for{id}to{price}")
	public int updateByIdQuery(@PathVariable float price, @PathVariable int id){
		return ser.updatebyid(price, id);
	}
}
