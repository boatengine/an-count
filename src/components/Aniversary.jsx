import React, { useState, useEffect } from "react";
import "../App.css"; // Import the CSS file for styles

const Aniversary = () => {
  const [showCard, setShowCard] = useState(false);
  const [text, setText] = useState("");
  //   const fullText =
  // "Congratulations on your 1 year 5 months! 🥳\nThank you for all the wonderful memories together!\n🎉🎈";
  const fullText =
    "❤️รักหมูอ้วนตั้งแต่ 2023 ตอนนี้จะ 2025 แล้วก็ยัง\nรักเหมือนเดิมนะคับ❤️❤️";

  useEffect(() => {
    if (showCard) {
      let index = 0;
      const timer = setInterval(() => {
        setText((prev) => prev + (fullText[index] || ""));
        index++;
        if (index >= fullText.length) clearInterval(timer);
      }, 60);
    } else {
      setText("");
    }
  }, [showCard]);
  return (
    <div className="App">
      <h1 className="glowing">Happy Anniversary! 🎉</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="button" onClick={() => setShowCard(!showCard)}>
          {showCard ? "ซ่อนข้อความ" : "แสดงข้อความ"}
        </button>
      </div>
      {showCard && (
        <div className="card">
          <p className="para">
            <span className="title">เย้ ถึง1ปี 4+1เดือนแล้ว🥳</span>
            <br />
            {text.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default Aniversary;
