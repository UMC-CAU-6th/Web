import React, { useState } from "react";

function Counter() {
    //클래스 컴포넌트에서는 usestate 사용 불가
    //함수형 컴포넌트에서 사용 가능
    //number의 값을 usestate에 0으로 설정
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        //setNumber(number + 1);
        //리액트 컴포넌트를 최적화하기에는 함수형 업데이트 사용하는게 좋음
        setNumber(prevNumber => {
            console.log('Increase 버튼이 클릭되었습니다.');
            return prevNumber + 1;
        });
    };
    const onDecrease = () => {
        //setNumber(number - 1)
        setNumber(prevNumber => {
            console.log('Decrease 버튼이 클릭되었습니다.');
            return prevNumber - 1;
        });
    };
    return (
        <div>
            <h1>
                {number} {/*바뀔값을 {number}로 지정 */}
            </h1>
            {/*onIcrease()로 함수를 호출하지 않도록 주의 + 함수의 타입 값 그대로 넣어주기 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
};

export default Counter;