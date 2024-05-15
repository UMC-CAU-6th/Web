import "./css/Navbar.css"
import {Link} from "react-router-dom";

const buttonInfo = [
    {name:"회원가입", link:"/signup"},
    {name:"Popular", link: "/popular"},
    {name:"Now Playing", link:"/now"},
    {name: "Top Rated", link:"/top"},
    {name: "Upcoming", link: "/upcoming"}
]

function Navbar(){
    return (
        <div id="container">
            <div id="title">네비바</div>
            <div id="panel">
                {buttonInfo.map((content, index) => {
                    return(
                        <Link key={index} to={content.link} style={{textDecoration:"none", color:"white"}}>{content.name}</Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;