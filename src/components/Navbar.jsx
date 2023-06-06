import React, { useEffect, useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
    const [show, setShow] = useState(false)
    const transitionNav = () =>{
        if (window.scrollY > 100) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNav)
        return ()=>{
            window.removeEventListener("scroll", transitionNav)
        }
    },[])
  return (
    <nav>
      <div className={`navbar ${show && "dark_bg"}`}>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJC2MBZfWCy4jq6XP8K5ST__uvByLv14RnQRZhkABx&s" alt="" />
        </div>
        <div className="menu">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Contact Us</a></li>
            </ul>
        </div>
            <div className="button">
                <button>Launch App</button>
            </div>
      </div>
    </nav>
  )
}

export default Navbar
