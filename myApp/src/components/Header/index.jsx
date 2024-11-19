import React from 'react'
import "./index.css"
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header-container'>
        <img src="https://media.licdn.com/dms/image/v2/C4E0BAQEYClaCJxdkBw/company-logo_200_200/company-logo_200_200/0/1630617277252/ajackus_logo?e=2147483647&v=beta&t=TNIF1LNy8Wy1kG3kdrdrA5mrtO8_1LQuB9jjm9vO2IQ" alt="ajackus-logo" className='logo-style'/>
        <FaUserCircle className='icon-style'/>
    </div>
  )
}

export default Header