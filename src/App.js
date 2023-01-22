import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileScreen from "./ProfileScreen";
import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
