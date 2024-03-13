import Heading from "@/app/components/heading";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Heading />
      <Card heading="this is the card component" />
      <Card
        content="This is heading 2"
        heading="this is the card component 2"
      />
    </>
  );
}
