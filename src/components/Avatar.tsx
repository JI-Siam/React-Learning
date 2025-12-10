import GreetingCard from "./Greeting";
interface AvatarProps {
  imgPath: string;
  name: string;
  details: string;
}
function Avatar({ imgPath, name, details }: AvatarProps) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgPath} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
        </div>
      </div>
    </>
  );
}

export default Avatar;
