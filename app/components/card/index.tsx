"use client";

import { useEffect, useState } from "react";

interface ICardProps {
  heading: string;
  content?: string;
}

const Card = (props: ICardProps) => {
  const { heading, content } = props;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter updated " + counter);
  }, [counter, content]);

  return (
    <div className="p-10 rounded-lg drop-shadow-sm bg-white">
      <h1>{heading}</h1>
      {/* if condition */}
      {/* { content && <section>{content}</section>}  */}
      {content ? <section>{content}</section> : <div>Content not present</div>}

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        1+
      </button>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Card;
