// import { useState } from "react";
//
// function App() {
//     const [userChoice, setUserChoice] = useState("");
//     const [computerChoice, setComputerChoice] = useState("");
//     const [result, setResult] = useState("");
//     const [win, setWin] = useState(0);
//     const [lose, setLose] = useState(0);
//     const [draw, setDraw] = useState(0);
//
//     const play = user => {
//         const choices = ["가위", "바위", "보"];
//         const computer = choices[Math.floor(Math.random() * 3)];
//
//         setUserChoice(user);
//         setComputerChoice(computer);
//
//         if (user === computer) {
//             setResult("무승부");
//             setDraw(prev => prev + 1);
//         } else if (
//             (user === "가위" && computer === "보") ||
//             (user === "바위" && computer === "가위") ||
//             (user === "보" && computer === "바위")
//         ) {
//             setResult("승리");
//             setWin(prev => prev + 1);
//         } else {
//             setResult("패배");
//             setLose(prev => prev + 1);
//         }
//     };
//
//     const resetGame = () => {
//         setUserChoice("");
//         setComputerChoice("");
//         setResult("");
//         setWin(0);
//         setLose(0);
//         setDraw(0);
//     };
//
//
//     return (
//         <div>
//             <h1>가위바위보 게임</h1>
//
//             <button onClick={() => play("가위")}>
//                 가위
//             </button>
//             <button onClick={() => play("바위")}>
//                 바위
//             </button>
//             <button onClick={() => play("보")}>
//                 보
//             </button>
//
//             <hr />
//
//             <h2>내 선택 : {userChoice}</h2>
//             <h2>컴퓨터 선택 : {computerChoice}</h2>
//
//             <h2
//                 style={{
//                     color:
//                         result === "승리"
//                             ? "green"
//                             : result === "패배"
//                                 ? "red"
//                                 : result === "무승부"
//                                     ? "gray"
//                                     : "black",
//                     fontSize: "24px",
//                     fontWeight: "bold",
//                 }}>
//                 결과 : {result}
//             </h2>
//
//             <button onClick={resetGame}>게임 다시하기</button>
//
//             <hr />
//
//             <h2>승 : {win}</h2>
//             <h2>패 : {lose}</h2>
//             <h2>무 : {draw}</h2>
//             <h2>총 게임 수 : {win + lose + draw}</h2>
//         </div>
//     );
// }
//
// export default App;

import { useState } from "react";

function App() {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [win, setWin] = useState(0);
    const [lose, setLose] = useState(0);
    const [draw, setDraw] = useState(0);

    const play = user => {
        const choices = ["가위", "바위", "보"];
        const computer = choices[Math.floor(Math.random() * 3)];
        setUserChoice(user);
        setComputerChoice(computer);

        if (user === computer) {
            setResult("무승부");
            setDraw(prev => prev + 1);
        } else if (
            (user === "가위" && computer === "보") ||
            (user === "바위" && computer === "가위") ||
            (user === "보" && computer === "바위")
        ) {
            setResult("승리");
            setWin(prev => prev + 1);
        } else {
            setResult("패배");
            setLose(prev => prev + 1);
        }
    };

    const resetGame = () => {
        setUserChoice("");
        setComputerChoice("");
        setResult("");
        setWin(0);
        setLose(0);
        setDraw(0);
    };

    return (
        <div>
            <div>
                <h2>가위바위보 게임</h2>
                <button onClick={() => play("가위")}>가위</button>
                <button onClick={() => play("바위")}>바위</button>
                <button onClick={() => play("보")}>보</button>

                <hr />

                <h3>내선택 : {userChoice}</h3>
                <h3>컴퓨터 선택 : {computerChoice}</h3>
                <h3
                    style={{
                        color:
                            result === "승리"
                                ? "green"
                                : result === "패배"
                                  ? "red"
                                  : result === "무승부"
                                    ? "gray"
                                    : "black",
                        fontSize: "24px",
                        fontWeight: "bold"
                    }}>
                    결과 : {result}
                </h3>
                <button onClick={resetGame}>게임 다시하기</button>

                <hr />

                <h3>승 : {win}</h3>
                <h3>패 : {lose}</h3>
                <h3>무 : {draw}</h3>
                <h3>총 게임수 : {win + lose + draw}</h3>
            </div>
        </div>
    );
}

export default App;
