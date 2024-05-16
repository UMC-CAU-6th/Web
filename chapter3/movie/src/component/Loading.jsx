import Spinner from "../static/spinner.svg";
import "./Loading.css";
function Loading() {
    return (
        <div id="loading">
            <img src={Spinner}/>
        </div>
    );
}

export default Loading;