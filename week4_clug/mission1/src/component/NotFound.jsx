import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleDetail = styled.div`

    background-color: #1e174e;
    color: white;
    padding:1px;

    text-align: center;
    height: 1000px;
    h5{
        font-style: italic;
    }
`
function NotFound(){

    const navigate = useNavigate();

    return (

        <StyleDetail>
            <h1>Oops!</h1>
            <h4>예상치 못한 에러가 발생했습니다;`^'</h4>
            <h5>Not Found</h5>
            <h3 onClick= {() => navigate('/')}>메인으로 이동하기</h3>
        </StyleDetail>
    )
}
export default NotFound;