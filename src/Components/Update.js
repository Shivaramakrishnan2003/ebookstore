import React, { useState } from 'react'
import Menubar from './Menubar'
import './Update.css'
import Bookservice from './Bookservice'

function Update() {

    const[id, setId] = useState('0')
    const[price, setPrice] = useState('0')

    const handleIdChange = (e) =>{
        e.preventDefault();
        setId(e.target.value)
    }
    const handlePriceChange = (e) =>{
        e.preventDefault();
        setPrice(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Price updated')
        addToServer(id, price);
    }
    const addToServer = (id, price) => {
        console.log("Clicked put");
        Bookservice.updateBooks(id, price)
          .then((response) =>{
            console.log(response.data)
            console.log("Updated successfully")
          })
    }

  return (
    <div>
        <Menubar/>
        <div className='update'>
            <form>
                <div className='form-item'>
                  <label className='form-label'>Book Id:</label> 
                  <input type='number' placeholder='Enter Book Id' value={id} name='id' onChange={handleIdChange} className='bookbox'/><br/>
                </div>
                <div className='form-item'>
                  <label className='form-label'>Update Price:</label> 
                  <input type='number' placeholder='Enter price' value={price} name='price' onChange={handlePriceChange} className='bookbox'/><br/>
                </div>
                <button type='submit' className='btn' onClick={handleSubmit}>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update