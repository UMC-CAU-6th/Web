import "./css/Navbar.css"
import {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom";

const buttonInfo = [
    {name:"회원가입", link:"/signup"},
    {name:"Popular", link: "/popular"},
    {name:"Now Playing", link:"/now"},
    {name: "Top Rated", link:"/top"},
    {name: "Upcoming", link: "/upcoming"}
]

function Navbar(){
    const [isHovering, setIsHovering] = useState(false);
    const [isLogin, setLogin] = useState(false);

    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])


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