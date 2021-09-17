import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (

        <>
        <ul className="navbar">
        <li className="navbar__item active">
                <Link className="navbar__link" to ="/"
                >
                    Home
                </Link>
                </li>
                
        <li className="navbar__item active">
                <Link className="navbar__link" to="/vehicles"
                >
                    Vehicles
                </Link>
                </li>
        <li className="navbar__item active">
                <Link className="navbar__link" to="/maintenance"
                >
                    Maintenance
                </Link>
                </li>
                <li className="navbar__item active">
                <Link className="navbar__link" to="/parts"
                >
                    Parts
                </Link>
            </li>
        <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("weekendWarrior_user_id")
                    }
                }>
                    Logout
                </Link>
            </li>
        </ul>
    </>
        // <ul className="navbar">
        //     <li className="navbar__item active">
        //         <Link className="navbar__link" to= "/">Home</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="logoutButton" className="navbar__link" to="/vehicles">Vehicles</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="logoutButton" className="navbar__link" to="/parts">Parts</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="logoutButton" className="navbar__link" to="/login">Log out</Link>
        //     </li>
        //   </ul>
    )
}