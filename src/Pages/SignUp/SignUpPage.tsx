import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import { useStore } from "../../Store/store";
import "./SignUp.css"

export default function SignUpPage() {
    
    const navigate = useNavigate()

    const {handleFormSubmitSignUp, handleFullNameChangeSignUp, handleEmailChangeSignUp, 
        handleUserNameChangeSignUp, handlePasswordChangeSignUp, users, setUsers} = useStore()
    
        function getUsersFromServer() {
        
            fetch('http://localhost:8000/users')
                .then(resp => resp.json())
                .then(usersFromServer => {
                setUsers(usersFromServer)
            })
        
        }

        useEffect(getUsersFromServer, [])

        return (

        <>

            <HeaderCommon />
        
            <section className="container-register">

                <form 
                    className="form-register"
                    onSubmit={function (e) {
                        e.preventDefault()
                        handleFormSubmitSignUp(e)
                        navigate(`/sign-in`)
                    }}
                >

                    <div className="container-form-register">

                        <h1>Sign Up</h1>

                        <label>

                            <span>Full name : </span>
                            <input 
                                required 
                                name="fullname" 
                                type="text" 
                                placeholder="Enter your full name : " 
                                onChange={function (e) {
                                    handleFullNameChangeSignUp(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Username : </span>
                            <input 
                                required 
                                name="username" 
                                type="text" 
                                placeholder="Enter your username: " 
                                onChange={function (e) {
                                    handleUserNameChangeSignUp(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Email : </span>
                            <input 
                                required 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email adress: " 
                                onChange={function (e) {
                                    handleEmailChangeSignUp(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Password</span>
                            <input 
                                required 
                                name="password" 
                                type="password" 
                                placeholder="Enter your password: " 
                                onChange={function (e) {
                                    handlePasswordChangeSignUp(e)
                                }}
                            />
                        
                        </label>

                        <button type="submit">
                            Sign Up
                        </button>

                        <p>Already have an account, <Link to = "/sign-in">sign in here</Link> !</p>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}