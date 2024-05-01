
import { useState } from "react";

function Poster(props){
    const [isHovering, setIsHovering] = useState(0);
    return (
        <>
        <span
            className="wrapper"
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        ></span>
        <div className="overview">
            {isHovering ? (
            <div>
                <div className="hovername">
                    {props.name}
                </div>
                <div className="hoveroverview">
                    {
                        <div>{props.overview}</div>
                    }
                </div>
            </div>
            ) : (
                <>
                <img
                    alt={props.name + "poster"}
                    className="poster"
                    src={props.poster}
                >
                </img>
                <div className="info">
                <span className="namebox">{props.name}</span>
                <span className="date">
                    {Number(props.date.substr(5,2))}.{Number(props.date.substr(8,2))}
                </span>
            </div>
            </>
            )}
        </div>
    </>
    )
}

export default Poster;