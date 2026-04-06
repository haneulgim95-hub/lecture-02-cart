import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [cart, setCart] = useState([]);

    const onAdd = e => {
        e.preventDefault();

        if (text === "") return;

        setCart([...cart, { name: text, quantity: 1 }]);
        setText("");
    };

    const onChange = e => {
        setText(e.target.value);
    };

    const onUpdateCount = (index, number) => {
        const newCart = [...cart];
        const nextCount = newCart[index].quantity + number;
        if (nextCount > 0) {
            newCart[index].quantity = nextCount;
            setCart(newCart);
        }
    }

    return (
        <div>
            <h1>Simple Shop</h1>
            <fieldset>
                <legend>상품추가</legend>
                <form
                    onSubmit={onAdd}>
                    <input
                        placeholder={"상품명을 입력하세요"}
                        onChange={onChange}
                        value={text}
                    />
                    <button>카트에 담기</button>
                </form>
            </fieldset>

            <br />

            <table border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#9b9b9b" }}>
                        <th>상품명</th>
                        <th>수량제어</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((value, index) => {
                        return (
                            <tr>
                                <td key={index}>{value.name}</td>
                                <td key={index}>
                                    <button onClick={() => onUpdateCount(index, -1)}>-</button>
                                    {value.quantity}
                                    <button onClick={() => onUpdateCount(index, +1)}>+</button>
                                </td>
                                <td key={index}>
                                    <button
                                        onClick={() => {
                                            setCart(cart.filter((v, i) => index !== i));
                                        }}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <h2>총 품목 : {cart.length}개/ 총 수량 : {cart.reduce((acc, item)=>{
                return acc + item.quantity;
            }, 0)}개</h2>
        </div>
    );
}

export default App;
