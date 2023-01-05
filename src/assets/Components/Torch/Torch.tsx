import { useEffect, useRef, useState } from "react";
import "./Style/style.css";

export default function Torch() {
  const flameEl = useRef<HTMLDivElement>(null);
  const [isHidden, setHidden] = useState(true);

  const handleStickClick = () => {
    setHidden(!isHidden);
  };

  useEffect(() => {
    if (flameEl.current) {
      if (isHidden) {
        flameEl.current.classList.add("hidden");
        flameEl.current.classList.remove("show");
      } else {
        flameEl.current.classList.remove("hidden");
        flameEl.current.classList.add("show");
      }
    }
  }, [isHidden]);

  return (
    <div onClick={handleStickClick} className="torch-container">
      <div className="stick">
        <div ref={flameEl} className="flame-container">
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
        </div>
        <div className="spark-container">
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
          <div className={`spark ${!isHidden ? "animate" : ""}`}></div>
        </div>
        <div className="stick-header"></div>
      </div>
    </div>
  );
}
