import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiginScreen from "./pages/SignupSignin/SiginScreen";
// import SignUpScreen from "./pages/SignupSignin/SignUpScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SiginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
