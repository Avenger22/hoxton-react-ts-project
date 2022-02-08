import {  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import HeaderCommon from '../../Components/Common/HeaderCommon/HeaderCommon'
import { useStore } from '../../Store/store'
import './SignIn.css'

export default function SignInPage() {

    const {handleFormSubmitSignIn, handleUserNameChangeSignIn, handlePasswordChangeSignIn} = useStore()

    return (

        <>

            <HeaderCommon />
        
            <section className="container-login">

                <form className="form-login" 
                    onSubmit={function (e) {
                        e.preventDefault()
                        handleFormSubmitSignIn(e)
                    }}
                >

                    <div className="container-form">

                        <h1>Sign In</h1>

                        <label>

                            <span>UserName : </span>
                            
                            <input 
                                // defaultValue = {userName} 
                                required 
                                name="username" 
                                type="text" 
                                placeholder="Enter your username: " 
                                onChange={function (e) {
                                    handleUserNameChangeSignIn(e)
                                }}
                            />

                        </label>

                        <label>

                            <span>Password</span>

                            <input
                                // defaultValue={password} 
                                required 
                                name="password" 
                                type="password" 
                                placeholder="Enter your password: "
                                onChange={function (e) {
                                    handlePasswordChangeSignIn(e)
                                }} 
                            />
                        
                        </label>

                        <button type="submit">
                            Sign In
                        </button>

                        <p>If you don't have an account, <Link to = {'/sign-up'}>sign up here</Link> !</p>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}