package com.ebookstore.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ebookstore.main.model.Book;

import jakarta.transaction.Transactional;

public interface BookRepo extends JpaRepository<Book, Integer>{
	@Query(value = "select * from e_book_store where book_id=:a", nativeQuery = true)
	public List<Book> readbyqueryid(@Param("a") int id);
	
	@Query(value = "select * from e_book_store where author_name=:a", nativeQuery = true)
	public List<Book> readbyqueryauthor(@Param("a") String aname);
	
	@Modifying
	@Transactional
	@Query(value = "delete from e_book_store where book_id=:a", nativeQuery = true)
	public int deletebyqueryid(@Param("a") int id);
	
	@Modifying
	@Transactional
	@Query(value = "update e_book_store set price=:a where book_id=:b", nativeQuery = true)
	public int updatebyqueryid(@Param("a")float price, @Param("b")int id);
}
