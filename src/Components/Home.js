import React, { useEffect, useState } from 'react'
import Bookservice from'./Bookservice'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search';
import Menubar from './Menubar';

function Home() {

  const [details, setDetails] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  function FetchDetails(){
    console.log("Fetched");
    Bookservice.getBooks()
      .then((response)=>{
        console.log(response.data)
        setDetails(response.data)
      })
    }
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    // if(searchInput.length > 0) {
    //     details.filter((det) => {
    //     return det.bookName.match(searchInput)
    //   });
    // }

    const filteredData = details.filter((e) => {
      if (searchInput === '') {
        return e;
      }
      else {
        return e.bookName.toLowerCase().includes(searchInput.toLowerCase())
      }
    })

    const bestSellers = details.filter((e) => {
        return e.bookName.toLowerCase().includes("harry")
    })

    useEffect(()=>FetchDetails,[])

  return (
    <div>
      <Menubar/>
      <div className='home'>
        <div className='home-container'>

          <div className='sidebar'>
            <div>
              <h3>Best sellers</h3>
              {bestSellers.map
                (detail=>
                  <div key={detail.bookId} className='best-seller list'>
                    <div>
                      <p>
                        {detail.bookName}
                      </p>
                    </div>
                  </div>
              )
            }
            </div>
          </div>

          <div className='main-content'>
            <div className='search'>
            <input type='text'
                    placeholder='Search for a book'
                    value={searchInput}
                    onChange={handleChange}
                    className='searchBox'/>
                    <SearchIcon className='searchButton'/>
            </div>
            <div className='datagrid'>
              {filteredData.map
                  (detail=>
                    <div key={detail.bookId}>
                      <div>
                        <img src={detail.coverDir} alt='hp1'/>
                      </div>
                      <div>
                        <h4>
                          {detail.bookName}
                        </h4>
                        Author Name : {detail.authorName}<br/>
                        Price : {detail.price}<br/>
                        Stock : {detail.quantity}
                      </div>
                      <button>Add to cart</button>
                    </div>
                )
              }
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Home