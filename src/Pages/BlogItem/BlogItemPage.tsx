import "./BlogItem.css"
import { useEffect } from 'react'
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'
import BlogItemContainer1 from '../../Components/BlogItem/BlogItemContainer1/BlogItemContainer1'
import BlogItemContainer2 from '../../Components/BlogItem/BlogItemContainer2/BlogItemContainer2'
import { useParams } from "react-router-dom"
import { useStore } from "../../Store/store"

function BlogItem() {

    const params = useParams()

    const {blogItem, setBlogItem} = useStore()

    function getIndividualBlogFromServer () {

        fetch(`http://localhost:8000/articles/${params.id}`)
          .then(resp => resp.json())
          .then(blogFromServer => setBlogItem(blogFromServer))
        
    }
    
    useEffect(getIndividualBlogFromServer, [])

    if (blogItem === null) {
        return <main>Loading...</main>
    }

    if (blogItem.title === undefined) {
        return <main>Blog Article not found</main>
    }

    return (

        <>

            <ButtonTop />

            <BlogItemContainer1 />

            <BlogItemContainer2 />
        
            <FooterCommon />

        </>

    )

}

export default BlogItem