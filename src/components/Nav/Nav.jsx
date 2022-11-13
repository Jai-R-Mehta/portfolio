import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}> <AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}> <AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}> <BsCodeSlash/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}> <AiOutlineProject/></a>

    </nav>
  )
}

export default Nav