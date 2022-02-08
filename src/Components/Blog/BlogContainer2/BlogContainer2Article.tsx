import { Link } from "react-router-dom"

import "../BlogContainer2/BlogContainerArticle.css"

export default function BlogContainer2Article({article}) {

    return (

        <>
        
            <div className="blog-post">

                <div className="date-box">
                    <span>{article.date}</span>
                </div>

                <div className="icon-box">
                    <i className="fas fa-pen-fancy"></i>
                </div>

                <img src={article.image} alt=""/>
                
                <h3>
                    <Link to = {`/blog/${article.id}`}>{article.title}</Link>
                </h3>

                <div className="span-box">
                    <span className="span-1">By {article.user} | </span>
                    <span className="span-2">{article.date} | </span>
                    <span className="span-3">{article.category}</span>
                </div>

                <p>{article.desc}</p>

                <Link to = {`/blog/${article.id}`}>
                    Read More
                </Link>

            </div>
            
        </>

    )

}