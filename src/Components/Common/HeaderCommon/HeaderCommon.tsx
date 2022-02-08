import { Link, NavLink, useNavigate } from "react-router-dom";
import '../HeaderCommon/HeaderCommon.css'

import {useStore} from "../../../Store/store"

export default function HeaderCommon() {

    const {signInStatus, signInUserName, setSignInStatus} = useStore()

    const navigate = useNavigate()

    function handleServicesClick() {
        navigate("/services")
    }
    
    return (

        <>

            <header className="header">

                <div className="header-group-1">
                    
                    <ul className="ul-header-1">
                        
                        <li id="special-logo">

                            <Link to = "/home">
                                AlbVitaFitness
                            </Link>

                        </li>
                        
                        <li><NavLink to = "/home">Home</NavLink></li>
                        <li><NavLink to = "/about-us">About Us</NavLink></li>

                        <div className="dropdown">

                            <NavLink to = {`/services`} className="dropbtn">Services</NavLink>

                            <div className="dropdown-content">
                                <Link to ="/services/1">Yoga</Link>
                                <Link to ="/services/2">Fitness</Link>
                                <Link to ="/services/3">Crossfit</Link>
                                <Link to ="/services/4">Bodybuilding</Link>
                                <Link to ="/services/5">Martial arts</Link>
                                <Link to ="/services/6">Cardio</Link>
                                <Link to ="/services/7">Resistance</Link>
                            </div>

                        </div>
                        
                        <li><NavLink to = "/teams">Our Team</NavLink></li>
                        <li><NavLink to = "/blog">Blog</NavLink></li>
                        <li><NavLink to = "/products">Products</NavLink></li>
                        <li><NavLink to = "/contact">Contact</NavLink></li>
                    
                    </ul>

                </div>

                <div className="void"></div>

                <div className="header-group-2">

                    <ul className="ul-header-2">

                        {signInStatus === false ? (

                            <>
                                <li className = "sign-links"><Link to = "/sign-in">Sign In</Link></li>
                                <li className = "sign-links"><Link to = "/sign-up">Sign Up</Link></li>
                            </>

                        ): (

                                <>

                                    <div className="dropdown">

                                        <li className="dropbtn">
                                            <i className="fas fa-user"></i>
                                            {signInUserName}
                                        </li>

                                        <div className="dropdown-content">

                                            <button className="log-out" onClick={setSignInStatus}>

                                                <span>Log Out</span>
                                                
                                            </button>

                                        </div>

                                    </div>

                                </>

                            )
                            
                        }

                    </ul>

                </div>

            </header>
            
        </>

    )

}