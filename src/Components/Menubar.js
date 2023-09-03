import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <div className='navbar'>
        <div className='menu-main-logo'>
          <Link to='/Home' id='logo'><h1>eBook Store</h1></Link>
        </div>
        <div className='items'>
          <Link className='main-menu icons eff' to='/Home'>Home</Link>
          <Link className='main-menu icons eff' to='/About'>About</Link>
          <Link className='main-menu icons eff' to='/Inventory'>Inventory</Link>
          <Link className='main-menu icons eff' to='/'>Logout</Link>
        </div>
    </div>
  )
}

export default Menubar