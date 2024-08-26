import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [Menu,setMenu] = useState("shop")
  const {getTotalCartItmes} = useContext(ShopContext);

  return (
    <div className='navbar'>
    <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>SHOPER</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{Menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{ textDecoration:'none'}} to='/Men'>Mens</Link>{Menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{ textDecoration:'none'}} to='/Women'>Womens</Link>{Menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none'}} to='/Kids'>Kids</Link>{Menu==="Kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/Login'><button>Login</button></Link>}
        
       <Link to='/Cart'> <img src= {cart_icon} alt='' /> </Link>
        <div className="nav-cart-count">{getTotalCartItmes()}</div>
    </div>
    </div>
  )
}

export default Navbar
