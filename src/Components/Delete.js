import React, { useState } from 'react'
import './Delete.css'
import Menubar from './Menubar'
import Bookservice from './Bookservice'

function Delete() {

    const[id, setId] = useState('0')

    const handleChange = (e) =>{
        e.preventDefault();
        setId(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Deleted')
        addToServer(id);
    }

    const addToServer = (id) => {
        console.log("Clicked delete");
        Bookservice.deleteBook(id)
          .then((response) =>{
            console.log(response.data)
            console.log("Deleted successfully")
          })
    }
  return (
    <div>
        <Menubar/>
        <div className='delete'>
            <form>
                <div className='form-item'>
                    <label className='form-label'>Book Id:</label> 
                    <input type='number' placeholder='Enter Book Id' value={id} name='id' onChange={handleChange} className='bookbox'/><br/>
                </div>
            <button type='submit' className='btn' onClick={handleSubmit}>Delete</button>
            </form>
        </div>
    </div>
  )
}

export default Delete