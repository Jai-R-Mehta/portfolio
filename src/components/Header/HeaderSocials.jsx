import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href ="https://www.linkedin.com/in/jai-rajesh-mehta/" target="_blank"> <BsLinkedin  size="25"/> </a>
        <a href ="https://github.com/Jai-R-Mehta" target="_blank"> <BsGithub size="25"/> </a>
    </div>
  )
}

export default HeaderSocials