import { Link } from "react-router-dom";

export default function HomeContainer8Article({article}) {

    return (

        <>
        
            <div className="blog-article">

                <img src={article.image} alt=""/>

                <h5><Link to = {`/blog/${article.id}`}>{article.title}</Link></h5>

                <span>AlbFitness</span>
                <p>{article.desc}</p>
                <span>{article.date}</span>

            </div>
        
        </>

    )

}