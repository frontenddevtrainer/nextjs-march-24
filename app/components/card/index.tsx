interface ICardProps {
  heading: string;
  content?: string;
}

const Card = (props: ICardProps) => {
  const { heading, content } = props;

  return (
    <div className="p-10 rounded-lg drop-shadow-sm bg-white">
      <h1>{heading}</h1>
      {/* if condition */}
      {/* { content && <section>{content}</section>}  */}

      {content ? <section>{content}</section> : <div>Content not present</div>}
    </div>
  );
};

export default Card;
