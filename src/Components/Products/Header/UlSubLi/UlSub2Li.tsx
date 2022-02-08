import { Link, NavLink } from "react-router-dom";
import "../UlSubLi/UlSub2Li.css"

export default function UlSub2li({item}) {

    const urlPath = `/${item.toLowerCase()}`

    return (

        <>

            <li>
                <NavLink to={urlPath}>{item}</NavLink>
            </li>
            
        </>

    )

}