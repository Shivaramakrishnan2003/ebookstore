import React, { useState } from 'react';
import Bookservice from'./Bookservice';
import './Add.css'
import Menubar from './Menubar';

function Add() {

    const [Book, setBook] = useState({
        bookId : '0',
        bookName : '',
        price : '0.00',
        quantity : '0',
        authorName : '',
        coverDir : '',
        bookDetails : {
          bookId : '0',
          authorName : '',
          description : '',
          publisher : '',
          language : '',
          genre : ''
        }
      })
    const [details, setBookDetails] = useState({
          bookId : '0',
          authorName : '',
          description : '',
          publisher : '',
          language : '',
          genre : ''
    })


    const handleSubmit = (e) =>{
        e.preventDefault();
        Book.bookDetails = details;
        details.bookId = Book.bookId;
        details.authorName = Book.authorName;
        setBook({...Book});
        alert('Record added successfully');
        console.log('Form submitted');
        console.log(Book)
        addToServer(Book);
    }
    const addToServer = (book) => {
        console.log("Clicked post");
        Bookservice.postBooks(book)
          .then((response) =>{
            console.log(response.data)
            console.log("Added successfully")
          })
    }
    
    const handleBookChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setBook((c) => ({...c, [name] : value}))
    }
    const handleDetailsChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setBookDetails((c) => ({...c, [name] : value}))
    }
  return (
    <div>
    <Menubar/>
      <div className='add'>
        <div className='add-container'>

            <form onSubmit={handleSubmit}>

              <div className='form'>
                <div className='form-item'>
                  <label className='form-label'>Book Id:</label> 
                  <input type='number' placeholder='Enter Book Id' value={Book.bookId} name='bookId' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Book name:</label>
                  <input type='text' placeholder='Enter Book name' value={Book.bookName} name='bookName' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Price:</label>
                  <input type='number' step='0.01' min='0' max='5000' placeholder='Enter price' value={Book.price} name='price' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Author:</label>
                  <input type='text' placeholder='Enter Author name' value={Book.authorName} name='authorName' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Quantity:</label>
                  <input type='number' placeholder='Enter quantity' value={Book.quantity} name='quantity' onChange={handleBookChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Book Cover URL:</label>
                  <input type='text' placeholder='Enter URL' value={Book.coverDir} name='coverDir' onChange={handleBookChange} className='bookbox'/><br/>
                </div>
              </div>

              <div className='form'>
                <div className='form-item'>
                  <label className='form-label'>Description:</label>
                  <input type='text' placeholder='Description' value={details.description} name='description' onChange={handleDetailsChange} className='bookbox'/><br/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Genre:</label>
                  <input type='text' placeholder='Enter genre' value={details.genre} name='genre' onChange={handleDetailsChange} className='bookbox'/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Language:</label>
                  <input type='text' placeholder='Language' value={details.language} name='language' onChange={handleDetailsChange} className='bookbox'/>
                </div>

                <div className='form-item'>
                  <label className='form-label'>Publisher:</label>
                  <input type='text' placeholder='Publisher' value={details.publisher} name='publisher' onChange={handleDetailsChange} className='bookbox'/><br/>
                </div>
              </div>
              <button type='submit' className='btn'>Insert Record</button>
            </form>


        </div>
      </div>
    </div>
  )
}

export default Add