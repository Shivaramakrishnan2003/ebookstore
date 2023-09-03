package com.ebookstore.main.model;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="eBookStore")
public class Book {
	@Id
	private int bookId;
	private String bookName;
	private float price;
	private int quantity;
	private String authorName;
	private String coverDir;
	private LocalDateTime createdOn = LocalDateTime.now();
	
	//One to one - one book has one detail
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_details")
	private BookDetails bookDetails;
	public BookDetails getBookDetails() {
		return bookDetails;
	}
	public void setBookDetails(BookDetails bookDetails) {
		this.bookDetails = bookDetails;
	}

	//many to many - many books have many customers
	@ManyToMany(cascade = CascadeType.ALL)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "fk_customer")
	private List<Customer> custDetails;
	public List<Customer> getCustDetails() {
		return custDetails;
	}
	public void setCustDetails(List<Customer> custDetails) {
		this.custDetails = custDetails;
	}
	
	//Field Constructor
	public Book(int bookId, String bookName, float price, int quantity, String authorName, String coverDir, LocalDateTime createdOn,
			BookDetails bookDetails, List<Customer> custDetails) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.price = price;
		this.quantity = quantity;
		this.coverDir = coverDir;
		this.createdOn = createdOn;
		this.bookDetails = bookDetails;
		this.custDetails = custDetails;
	}
	
	//Getters and Setters
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}
	public String getCoverDir() {
		return coverDir;
	}
	public void setCoverDir(String coverDir) {
		this.coverDir = coverDir;
	}
	//Default Constructor
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
}
