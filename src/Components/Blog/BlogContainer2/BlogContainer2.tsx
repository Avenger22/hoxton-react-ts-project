import BlogContainer2Article from "./BlogContainer2Article"
import "../BlogContainer2/BlogContainer2.css"
import { Link } from "react-router-dom"
import {useStore} from "../../../Store/store"
import { useEffect } from "react"

export default function BlogContainer2() {

    const {articles, setArticles} = useStore()
    
    function getArticlesFromServer() {

        fetch(`http://localhost:8000/articles`)
          .then(resp => resp.json())
          .then(articlesFromServer => setArticles(articlesFromServer))

    }

    useEffect(getArticlesFromServer, [])
    
    return (

        <>
        
            <section className="blog-container-2" id="blog-container-2">

                <div className="ribbon-blog">

                    <div className="ribbon-1">
                        <h3><Link to ="/blog">BLOG</Link></h3>
                    </div>

                    <div className="ribbon-2">
                        <span><Link to = "/home">Home</Link></span>
                        <span>/</span>
                        <span><Link to = "/blog">Blog</Link></span>
                    </div>

                </div>

                <div className="blog-wrapper">

                    {

                        articles.map(article => 

                            <div className="row">

                                <BlogContainer2Article 
                                    key = {article.id}
                                    article = {article}
                                />
    
                            </div>

                        )

                    }


                   

                </div>

                <button>
                    Load more posts
                </button>

            </section>

        </>

    )
    
}