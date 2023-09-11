import React from 'react'

const Nav = () => {
  return (
      <nav>
          <div className="Logo">
              <img src="./Images/Nike logo.png" alt="Logo" srcset="" />
          </div>

          <ul>
              <li href='#'>Menu</li>
              <li href='#'>Location</li>
              <li href='#'>About</li>
              <li href='#'>Contact</li>

          </ul>

          <button> Login </button>
      </nav>
  )
}

export default Nav