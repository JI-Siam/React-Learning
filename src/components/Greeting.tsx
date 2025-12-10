interface NameProps {
  name: string;
}

function GreetingCard({ name }: NameProps) {
  return (
    <div>{name ? <div>Hello {name} !!</div> : <div>Hello World!!</div>}</div>
  );
}
export default GreetingCard;
