import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [cart, setCart] = useState([]);

    const onAdd = e => {
        e.preventDefault();

        if (name === "") return;

        const existIndex = cart.findIndex(value => value.name === name);
        if (existIndex > -1) {
            onUpdateCount(existIndex, 1);
        } else {
            setCart([...cart, { name: name, quantity: 1 }]);
            setName("");
        }
    }

    const onChange = e => setName(e.target.value);

    const onUpdateCount = (index, num) => {
        const newCart = [...cart];
        const nextCount = newCart[index].quantity + num;
        if (nextCount > 0) {
            newCart[index].quantity = nextCount;
            setCart(newCart);
        }
    }

    const onRemove = (index) => {
        setCart(cart.filter((v, i) => i !== index));
    };

    return (
        <div>
            <h1>Simple shop</h1>
            <fieldset style={{ marginBottom: "20px" }}>
                <legend>상품 추가</legend>
                <form
                    onSubmit={onAdd}>
                    <input
                        value={name}
                        placeholder={"상품명을 입력하세요"}
                        onChange={onChange}
                    />
                    <button type={"submit"}>카트에 담기</button>
                </form>
            </fieldset>

            <table style={{ width: "100%" }} border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr
                        border={1}
                        cellPadding={10}
                        cellSpacing={0}
                        style={{ backgroundColor: "#c8c7c7"}}>
                        <th>상품명</th>
                        <th>수량제어</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((value, index) => (
                        <tr key={index} style={{textAlign: "center"}}>
                            <td>{value.name}</td>
                            <td>
                                <button
                                    onClick={() => onUpdateCount(index, -1)}>
                                    -
                                </button>
                                {value.quantity}
                                <button
                                    onClick={() => onUpdateCount(index, 1)}>
                                    +
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => onRemove(index)}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
                <h2>
                    총 품목 : {cart.length} 개 / 총 수량 :{" "}
                    {cart.reduce((acc, value) => acc + value.quantity, 0)} 개
                </h2>
        </div>
    );
}

export default App;
