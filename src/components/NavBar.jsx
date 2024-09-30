import React from "react"
import '../app.css'
import { Link } from "react-router-dom"




const NavBar = ({ toggleTheme, onSearch }) => {


    const handleSearch = (event) => {
        onSearch(event.target.value);
    }


    return (

        <nav className="navbar">
            <Link style={{ fontSize: '2.2rem', }} to="/">t-card</Link>
            <Link style={{}} to="/about">about</Link>
            <input className="input" type="text" placeholder="search" onChange={handleSearch} />
            <button onClick={toggleTheme} className="btns" href="">theme</button>

            <Link className="btns" to="/SignIn">login</Link>
            <Link className="btns" to="/SignUp">regiseter</Link>
        </nav>
    )

}

export default NavBar