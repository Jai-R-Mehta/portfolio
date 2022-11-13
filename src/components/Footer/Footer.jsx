import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdEmail} from "react-icons/md"
const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li> <a href='#'> Home </a></li>
        <li> <a href='#about'> About </a></li>
        <li> <a href='#experience'> Experience </a></li>
        <li> <a href='#projects'> Projects </a></li>
      </ul>

      <div className='footer__links'>
        <a href='https://www.linkedin.com/in/jai-rajesh-mehta/' target='_blank'><BsLinkedin className='footer__links-icon'/> Linkedin</a>
        <a href='https://github.com/Jai-R-Mehta' target='_blank'><BsGithub className='footer__links-icon'/> Github</a>
        <a href='mailto:jairajeshmehta@gmail.com'><MdEmail className='footer__links-icon'/> jairajeshmehta@gmail.com</a>
      </div>

    </footer>
  )
}

export default Footer