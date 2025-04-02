import "./App.css";
import Card from "./component/Card";

function App() {
  let myObj = {
    name: "John",
    age: 30,
  };

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card username="Lauren" btnText="Click to view me"/>
      <Card username="Monica" btnText="Visit my website"/>
    </>
  );
}

export default App;
