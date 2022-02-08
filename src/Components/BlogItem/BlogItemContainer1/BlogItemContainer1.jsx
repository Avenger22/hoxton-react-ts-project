import { Link } from "react-router-dom"
import { useStore } from "../../../Store/store"

import HeaderCommon from "../../Common/HeaderCommon/HeaderCommon"

import "../BlogItemContainer1/BlogItemContainer1.css"

export default function BlogItemContainer1() {

    const {blogItem} = useStore()
    
    return (

        <>

            <section className="blog-item-container-1" id="blog-item-container-1">

                <HeaderCommon />

                <div className="ribbon-blog">

                    <div className="ribbon-1">
                        <h3><Link to ={`/blog/${blogItem.id}`}>{blogItem.title}</Link></h3>
                    </div>

                    <div className="ribbon-2">
                        <span><Link to ="/blog">Blog</Link></span>
                        <span>/</span>
                        <span><Link to = {`/blog/${blogItem.id}`}>{blogItem.title}</Link></span>
                    </div>

                </div>

                <main className="main">

                    <div className="main-post">

                        <div className="image-box">
                            <img src={blogItem.image} alt=""/>
                        </div>

                        <div className="text">

                            <div className="paragraphs">

                                <h2>{blogItem.title}</h2>

                                <h3>{blogItem.header1}</h3>

                                <p>
                                    {blogItem.paragraph}
                                </p>

                            </div>
                    
                        </div>
                        
                    </div>

                    <div className="main-bottom-ribbon">

                        <span><a href="#">By : {blogItem.user} |</a></span> 
                        <span>Date: {blogItem.date} |</span> 
                        <span><a href="#">Category : {blogItem.category}</a></span>

                    </div>

                </main>

            </section>
            
        </>

    )

}