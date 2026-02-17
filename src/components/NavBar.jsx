import React from 'react'

const NavBar = () => {
  return (
    <header className='navbar'>
        <div className='inner gap-10'>
            <a className='logo hover:scale-110' href="#home">
                <img src="/EpElectrics-Logo.png" alt="EP Logo" />
            </a>
            <nav className='desktop'>
                <ul>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                </ul>
            </nav>
            <a href="#contact">
                <button className='btn-primary'>Contact Us</button>
            </a>
        </div>
    </header>
  )
}

export default NavBar