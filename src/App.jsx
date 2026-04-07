import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    const [cart, setCart] = useState([]);

    const onAdd = e => {
        e.preventDefault();
        if (name === "") return;

        const existIndex = cart.findIndex((value) => {
            return value.name === name;
        })

        if (existIndex > -1) {
            onUpdateCount(existIndex, 1);

        } else {
            setCart([...cart, {name: name, quantity: 1}])
            setName("");
        }

    }

    const onChange = (e) => {
        setName(e.target.value)
    }

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
                <legend>상품 추가</legend>
                <form onSubmit={onAdd}>
                    <input value={name} onChange={onChange} placeholder={"상품명을 입력하세요"}></input>
                    <button type={"submit"}>카트에 담기</button>
                </form>
            </fieldset>
            <br/>
            <table border={1} cellPadding={10} cellSpacing={0} style={{width: "100%"}}>
                <thead>
                <tr>
                    <th>상품명</th>
                    <th>수량 제어</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                {cart.length === 0 && <tr>
                    <td colSpan={3} style={{textAlign: "center"}}>카트가 비었습니다</td>
                </tr>}
                {cart.map((value, index) => {
                    return <tr key={index}>
                        <td>{value.name}</td>
                        <td>
                            <button onClick={() => {
                                onUpdateCount(index, -1)
                            }}>-
                            </button>
                            {value.quantity}
                            <button onClick={() => {
                                onUpdateCount(index, +1)
                            }}>+
                            </button>
                        </td>
                        <td>
                            <button>삭제</button>
                        </td>
                    </tr>
                })
                }
                </tbody>
            </table>
            <h3>총 품목 : {cart.length}개 / 총 수량 : {cart.reduce((acc, value) => {
                return acc + value.quantity;
            }, 0)}개</h3>

        </div>
    )
}

export default App;