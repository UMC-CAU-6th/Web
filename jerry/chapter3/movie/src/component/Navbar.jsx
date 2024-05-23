import "./Navbar.css";
import { Link } from "react-router-dom";

const buttonInfo = [ 
    {name: "sign in", link: "/signin"},
    {name: "popular", link: "/popular"},
    {name: "now playing", link: "/nowplaying"},
    {name: "top rated", link: "/toprated"}, ]

const Navbar = ({isLogin, setLogin}) => {
    return ( 
        <div className="navbar">
            <Link id="home" to='/'>MOVIE</Link>
            <div>
            <Button isLogin={isLogin} setLogin={setLogin} />
            {buttonInfo.map((contents, index) => {
                return <Link className="navbar-content" key={index} to={contents.link}>{contents.name}</Link>
            })}
            </div>
        </div>
    );
}

function Button({isLogin, setLogin}) {
    if (isLogin) {
        return ( <button onClick={() => {setLogin(!isLogin);console.log("로그아웃 clicked");}}>로그아웃</button> );
    } else {
        return ( <button onClick={() => {setLogin(!isLogin);console.log("로그인 clicked");}}>로그인</button> );
    }
}

export default Navbar;