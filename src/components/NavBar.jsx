import React from 'react'

const NavBar = () => {
  return (
    <header className='navbar'>
        <div className='inner gap-10'>
            <a className='logo hover:scale-110' href="#home">
                <img src="/EP-Symbol.svg" alt="EP Logo" />
            </a>
            <nav className='desktop'>
                <ul>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                </ul>
            </nav>
            <a href="#">
                <button className='btn-primary'>Contact Us</button>
            </a>
        </div>
    </header>
  )
}

export default NavBar