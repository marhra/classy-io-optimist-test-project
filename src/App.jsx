import { useState } from "react";
import './App.css';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  const [firstName, setFirstName] = useState("")

  console.log(firstName)
  return (
    <div className="App">
      <form>
        <SignUp placeholder="First name" setFirstName={setFirstName}/>
        <SignUp placeholder="Last name"/>
        <SignUp placeholder="Email"/>
        <SignUp placeholder="Password"/>
        <SignUp placeholder="Repeat password"/>
      </form>
    </div>
  );
}

export default App;
