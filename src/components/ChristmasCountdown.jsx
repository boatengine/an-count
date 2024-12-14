import { useState, useEffect } from "react";
import "../App.css"; // Import the CSS file for styles
import "./cs.module.css";
const ChristmasCountdown = () => {
  const calculateTimeLeft = () => {
    const christmasDate = new Date("December 29, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const difference = christmasDate - currentDate;

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1 className="glowing">Countdown 1 year 5 months🎄💖</h1>
      <div className="countdown-timer">
        <div>
          <span>{timeLeft.days} Days</span>
        </div>
        <div>
          <span>{timeLeft.hours} Hours</span>
        </div>
        <div>
          <span>{timeLeft.minutes} Minutes</span>
        </div>
        <div>
          <span>{timeLeft.seconds} Seconds</span>
        </div>
      </div>
      <footer>
        <p>Counting down to Anniversary 1 yar 5 month ! 🎄</p>
      </footer>
    </div>
  );
};

export default ChristmasCountdown;
