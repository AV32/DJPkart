import "./App.css";
import { useState } from "react";
import LandingPage from "./pages/landing-page";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function signIn() {
    setIsSignedIn(!isSignedIn);
  }
  console.log(isSignedIn);
  return (
    <div className="App">
      <LandingPage isSignedIn={isSignedIn} signIn={signIn} />
    </div>
  );
}

export default App;
