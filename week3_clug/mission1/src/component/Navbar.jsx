import "./css/Navbar.css"
import {useState} from 'react'
import {Link} from "react-router-dom";

const buttonInfo = [
    {name:"회원가입", link:"/signup"},
    {name:"Popular", link: "/popular"},
    {name:"Now Playing", link:"/now"},
    {name: "Top Rated", link:"/top"},
    {name: "Upcoming", link: "/upcoming"}
]

function Navbar(){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div id="container">
            <div id="title">
                <Link to="/popular" style={{textDecoration:"none", color:"white"}}>UMC</Link>
            </div>
            <div id="panel">
                {buttonInfo.map((content, index) => {
                    return(
                        <div className={isHovering ? "grow" : ""} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <Link key={index} to={content.link} style={{textDecoration:"none", color:"white"}}>{content.name}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;