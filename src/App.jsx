import { useState } from "react";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);
    const quizData = [
        {
            question: "React를 만든 회사는?",
            options: ["Google", "Meta", "Microsoft", "Apple"],
            answer: "Meta",
        },
        {
            question: "useState는 무엇을 관리할 때 사용하는가?",
            options: ["파일", "상태", "서버", "라우터"],
            answer: "상태",
        },
        {
            question: "JSX 안에서 자바스크립트 값을 넣을 때 사용하는 것은?",
            options: ["${}", "{}", "()", "[]"],
            answer: "{}",
        },
    ];

    if (currentIndex >= quizData.length) {
        return (
            <div>
                <h1>퀴즈 종료!</h1>
                <h2>점수 : {score} / {quizData.length}</h2>
                <button onClick={() => {
                    setCurrentIndex(0);
                    setResult("");
                    setScore(0);
                }}>
                    다시 시작
                </button>
            </div>
        )
    }

    const currentQuiz = quizData[currentIndex];
    const selectAnswer = (option) => {
        if (option === currentQuiz.answer) {
            setResult("정답입니다!");
            setScore(prev => prev + 1);
        } else {
            setResult("오답입니다!");
        }
    }

    const nextQuestion = () => {
        setCurrentIndex(prev => prev + 1);
        setResult("");
    }


    return (
        <div>
            <h3>문제 {currentIndex + 1} / {quizData.length}</h3>
            <h1>{currentQuiz.question}</h1>
            <ul style={{ display: "inline-flex", flexDirection: "column", gap: "10px" }}>
                {currentQuiz.options.map((option, index) => {
                    return (
                        <li key={index} style={{listStyle: "none"}}>
                            <button
                                disabled={result !== ""}
                                onClick={() => selectAnswer(option)}>
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <br />
            <h2>{result}</h2>

            <br />
            {result !== "" && (
                <button
                    onClick={nextQuestion}>
                    다음 문제
                </button>
            )}
        </div>
    );
}

export default App;
