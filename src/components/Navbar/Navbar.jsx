import React from 'react'
import logo from '../Assets/logo.png'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        {/* need image for logo here */}
        <div className='nav-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu === "shop"? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu === "mens"? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link> {menu === "womens"? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu === "kids"? <hr /> : <></>}</li>
        </ul>
        {/* need image for cart here */}
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
  <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
</svg></div></Link>
        </div>
    </div>
  )
}

export default Navbar