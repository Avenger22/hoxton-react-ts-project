import { Link } from "react-router-dom"
import "../FooterCommon/FooterCommon.css"
import BlogMiniPost from './BlogMiniPost'
import {  } from "react"
import { useEffect } from "react"
import SocialMediaImg from "./SocialMediaImg"

export default function FooterCommon() {

    const [posts, setPosts] = ([])

    useEffect(() => {
        fetch(`http://localhost:8000/articles`)
            .then(resp => resp.json())
            .then(postsFromServer => setPosts(postsFromServer))
    }, [])

    const newPosts = posts.slice(0,3)

    return (

        <>

             <footer className="container-9" id="container-9">

                <div className="footer-group-1">

                    <h5>AlbFitness</h5>

                    <p>
                        A very well said quote ‘Health is wealth’. 
                        The healthy you will be the more active you will be. 
                        It is not money that can bring comfort to your body, it is all how to treat your body brings all kind of ease as well as comfort. Health is said to be wealth because ‘if money is lost, something is lost but if health 
                        is lost, it is everything you lost’. So, always be healthy and fit first.  
                        But when we are sick, we need help and feel powerless. 
                    </p>
                    
                    <div className="footer-icons">

                        <span>Follow Us:</span>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>

                    </div>

                    <div className="footer-form">

                        <input type="email" placeholder="Email: "/>

                        <button>
                            <span>Subscribe</span>
                        </button>

                    </div>

                </div>

                <div className="footer-group-2">

                    <h5>Blogs</h5>

                    <div className="blogs-mini">

                        {
                            newPosts.map(post => 
                                
                               <BlogMiniPost 
                                    key={post.id}
                                    post = {post}
                               /> 
                                
                            )
                        }

                    </div>

                </div>

                <div className="footer-group-3">

                    <h5>Instagram</h5>

                    <div className="row-wrapper">

                        <div className="row">
                              
                              {

                                  posts.map(post => 
                                    
                                    <SocialMediaImg 
                                        key = {post.id}
                                        post = {post}
                                    />
  
                                )

                              }
                          
                        </div>
                    
                    </div>

                    <Link to = "/blog">
                        View more blog posts
                    </Link>

                </div>

            </footer>

        </>

    )

}