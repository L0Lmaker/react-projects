import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, id, info }) => {
  const [minimized, setMinimized] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setMinimized(!minimized);
          }}
        >
          {minimized ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!minimized && <p>{info}</p>}
    </article>
  );
};

export default Question;
