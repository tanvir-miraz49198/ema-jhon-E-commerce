import React from 'react';
import './Header.css'
import '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'> 
           <h3>Ema-Jhon</h3>
            
           <div>
           <a href="">Shop</a>
           <a href="">Oeder</a>
           <a href="">Manage History</a>
           <a href="">Login</a>
           </div>
        </nav>
    );
};

export default Header;