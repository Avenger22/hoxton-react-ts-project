import { Link, useNavigate } from "react-router-dom";

export default function BlogItemRelatedImg({post}) {

    const navigate = useNavigate()
    
    function handleRedirectLink() {
        navigate(`/blog/${post.id}`)
        window.location.reload()
    }

    return (

        <>
            <img src = {post.image} alt="" onClick = {handleRedirectLink}/>
        </>

    )

}