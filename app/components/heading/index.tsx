"use client"

const Heading = () => {
  const message = "hello world";
  const id = "heading-12";
  const textColor = "red";

  const clickHandler = () => {
    console.log("hello world is clicked");
  };

  return (
    <h1
      style={{ color: Math.random() > 0.5 ? "red" : "blue" }}
      id={id}
      onClick={clickHandler}
      onMouseEnter={clickHandler}
      className="text-3xl"
    >
      {message}
    </h1>
  );
};

export default Heading;
