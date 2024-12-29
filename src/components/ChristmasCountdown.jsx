// ChristmasCountdown.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file for styles

const ChristmasCountdown = () => {
  const navigate = useNavigate();

  const calculateTimeLeft = () => {
    const christmasDate = new Date("December 29, 2024 13:35:00").getTime();
    const currentDate = new Date().getTime();
    const difference = christmasDate - currentDate;

    if (difference <= 0) {
      navigate("/aniversary");
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

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
        <p>Counting down to Anniversary 1 year 5 months! 🎄 now</p>
      </footer>
    </div>
  );
};

export default ChristmasCountdown;
