import React, { useState } from "react";

const LuckyNum = () => {
  // let luckyNum;
  const [luckyNum, setLuckyNum] = useState(0);

  const [isvisible, setIsvisible] = useState(false);
  return (
    <div>
      {isvisible && "LuckyNumber : " + luckyNum + " "}
      {!isvisible && (
        <button
          onClick={() => {
            setLuckyNum(Math.round(Math.random() * 10));
            setIsvisible(true);
          }}
        >
          get number
        </button>
      )}
    </div>
  );
};

export default LuckyNum;
