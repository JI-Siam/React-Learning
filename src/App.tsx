import Message from "./Message";
import ListGroup from "./components/ListGroup";
import GreetingCard from "./components/Greeting";
import Avatar from "./components/Avatar";
import ColorfulBox from "./components/ColorfulBox";
import Counter from "./components/Counter";
import ToggleBox from "./components/ToggleBox";
import ShowHideText from "./components/ShowHideText";
import LiveText from "./components/LiveText";

function App() {
  // always close react components otherwise sytanx error
  return (
    <div>
      <Avatar
        name="Jafir Islam Siam"
        imgPath="src/images/23-50574-1.jpg"
        details="Highly Adaptable , Enthuastic and Dedicated CS Gradutate!!"
      ></Avatar>

      <ColorfulBox color="orange"></ColorfulBox>
      <Counter></Counter>
      <ToggleBox />
      <ShowHideText />
      <LiveText />
    </div>
  );
}

export default App;
