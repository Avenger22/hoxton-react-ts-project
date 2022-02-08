import { Link, useNavigate } from "react-router-dom";

export default function BlogMiniPost({post}) {

    const navigate = useNavigate()
    
    function handleRedirectFooter() {
        navigate(`/blog/${post.id}`)
        window.location.reload()
    }

    return (

        <>
            <div className="blogs-mini-post">
                
                <img src = {post.image} alt="" onClick = {handleRedirectFooter} /> 
                
                <span>
                    <Link to = {`/blog/${post.id}`}>{post.desc}</Link>
                </span>
            
            </div>
        
        </>

    )

}