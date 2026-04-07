import { useState } from "react";

function App() {
    const [name, setName] = useState(""); // input 관리용 state
    const [cart, setCart] = useState([]);

    const onAdd = e => {
        e.preventDefault();

        if (name === "") return;

        // 중복된 상품명이 들어올 경우, 재등록을 막고 기존 상품에 +1만 해주는 기능
        // 1. 중복된 상품이 있는지 검사 => find + 나중에 quantity도 수정 => index를 알아야 함 => findIndex()
        const existIndex = cart.findIndex((value) => { return value.name === name});
        // existIndex => 값이 없으면 -1, 값이 있으면  0, 1, 2, 3, .....
        if (existIndex > -1) {
            // 장바구니에 이미 있다(중복된 상품이 있다) => 새로운 상품을 추가할게 아니라, 이미 기존에 있는 아이템에 +1
            onUpdateCount(existIndex, 1);
        } else {
            setCart([...cart, { name: name, quantity: 1 }]);
        }
        setName("");
    };

    const onChange = e => {
        setName(e.target.value);
    };

    const onUpdateCount = (index, number) => {
        // 1가지 기능을 하는 함수를 만드는건데,
        // '1을 더하는' 함수가 아니라, '수량을 변경하는' 함수를 만든 것
        // 얼마를 바꿀 것인가는 함수를 실행할 때 매개변수를 통해 제어함

        // 계산은 위에서
        const newCart = [...cart];
        const nextCount = newCart[index].quantity + number;
        if (nextCount > 0) {
            // 저장은 if문 안에서
            newCart[index].quantity = nextCount;
            setCart(newCart);
        }
    };

    const totalCount = cart.reduce((acc, value) => {
        return acc + value.quantity;
    }, 0);

    return (
        <div>
            <h2>🛒 Simple Shop</h2>
            <fieldset>
                <legend>상품 추가</legend>
                <form onSubmit={onAdd}>
                    <input placeholder={"상품명을 입력하세요"} onChange={onChange} value={name} />
                    <button type={"submit"}>카트에 담기</button>
                </form>
            </fieldset>
            <br />
            {/*
                react에서 inline 형식으로 스타일을 적용하는 방법은
                style={} 속성을 동일하게 이용함.
                단! 이 안에 들어가는 값은 "객체"로 작성함
                css : background-color => backgroundColor (객체안에서 키값은 띄어쓰기도 안되고 -도 쓸수 없기 때문에..)
            */}
            <table border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th>상품명</th>
                        <th>수량 제어</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length === 0 && (
                        <tr>
                            <td colSpan={3} style={{ textAlign: "center", height: "100px" }}>
                                카트가 비었습니다
                            </td>
                        </tr>
                    )}
                    {cart.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>
                                    <button onClick={() => onUpdateCount(index, -1)}>-</button>
                                    {value.quantity}
                                    <button onClick={() => onUpdateCount(index, +1)}>+</button>
                                </td>
                                <td>
                                    <button
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setCart(
                                                cart.filter((v, i) => {
                                                    return i !== index;
                                                }),
                                            );
                                        }}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>
                총 품목 : {cart.length}개 / 총 수량 : {totalCount}개
            </h3>
        </div>
    );
}

export default App;
