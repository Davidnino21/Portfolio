import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";


function Footer() {
  return (
    <footer id='footer'>
      <p><a href="https://github.com/Davidnino21" target="_blank" rel="noopener noreferrer"><FaGithub /></a></p>
      <p><a href="https://www.linkedin.com/in/david-nino-063364132/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></p>
      <p><a href="https://stackoverflow.com/users/22456778/david-nino" target="_blank" rel="noopener noreferrer"><FaStackOverflow /></a></p>
    </footer>
  )
}

export default Footer