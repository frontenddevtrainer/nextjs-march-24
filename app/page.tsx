import Heading from "@/app/components/heading";
import Card from "./components/card";
import LoginForm from "./components/login-form";

export default function Home() {
  const cards = [
    {
      heading: "this is the card component",
      id: 1,
    },
    {
      heading: "This is heading 2",
      content: "this is the card component 2",
      id: 2,
    },
    {
      heading: "This is heading 3",
      content: "this is the card component 3",
      id: 3,
    },
  ];

  return (
    <>
      <Heading />
      <LoginForm />
      {cards?.length > 0 &&
        cards.map((card, index) => {
          const { heading, id, content } = card;
          return <Card heading={heading} content={content} key={id} />;
        })}
    </>
  );
}
