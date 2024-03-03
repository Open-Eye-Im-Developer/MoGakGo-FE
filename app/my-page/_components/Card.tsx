interface CardProps {
  image: string;
  title: string;
  body: string;
}

function Card(props: CardProps) {
  return (
    <div className="align-center flex gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 rounded-full">
        <img src={props.image} alt="" />
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <div className="text-sm">{props.title}</div>
        <div className="text-xs">{props.body}</div>
      </div>
    </div>
  );
}

export default Card;
