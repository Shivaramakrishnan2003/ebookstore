package com.ebookstore.main.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BookDetails {
	@Id
	private int bookId;
	private String authorName;
	@Column(length=1024)
	private String description;
	private String publisher;
	private String language;
	private String genre;
	public BookDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookDetails(int bookId, String authorName, String description, String publisher, String language,
			String genre) {
		super();
		this.bookId = bookId;
		this.authorName = authorName;
		this.description = description;
		this.publisher = publisher;
		this.language = language;
		this.genre = genre;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
}
