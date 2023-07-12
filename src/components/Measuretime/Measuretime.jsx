import React, { useEffect, useState } from "react";
import "./Measuretime.scss";

export default function Measuretime() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => (num < 10 && num > 0 ? "0" + num : num);

  // Miesiąc: aktualny - 1
  const timer = () => {
    const measureTime =
      Date.parse(new Date(2023, 7, 6, 6, 0, 0)) - Date.parse(new Date());
    const seconds = Math.floor((measureTime / 1000) % 60);
    const minutes = Math.floor((measureTime / 1000 / 60) % 60);
    const hours = Math.floor((measureTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(measureTime / (1000 * 60 * 60 * 24));

    if (days < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  useEffect(() => {
    timer();
    setInterval(() => timer(), 1000);
  });

  return (
    <div className="measure">
      <div className="measure__time">Następne zawody</div>
      <div className="measure__name">Ironman Gdynia</div>
      <div className="measure__timenumber">
        <div className="measure__timenumber-col">
          <div className="measure__timenumber-days">{leading0(days)} </div>
          <div className="measure__timenumber-name">dni</div>
        </div>

        <div className="measure__timenumber-col">
          <div className="measure__timenumber-hours">{leading0(hours)}</div>
          <div className="measure__timenumber-name">godzin</div>
        </div>

        <div className="measure__timenumber-col">
          <div className="measure__timenumber-minutes">{leading0(minutes)}</div>
          <div className="measure__timenumber-name">minut</div>
        </div>

        <div className="measure__timenumber-col">
          <div className="measure__timenumber-seconds">{leading0(seconds)}</div>
          <div className="measure__timenumber-name">sekund</div>
        </div>
      </div>
    </div>
  );
}
