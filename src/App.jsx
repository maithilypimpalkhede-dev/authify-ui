import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Loginpage from "./components/Loginpage.jsx";
import Newpassword from "./components/Newpassword.jsx";
import ResetOTP from "./components/ResetOTP.jsx";
import Resetpass from "./components/Resetpass.jsx";
import Signin from "./components/Signin.jsx";

function App() {
  return (
    <BrowserRouter>

       <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset-password" element={<Resetpass />} />
        <Route path="/reset-otp" element={<ResetOTP />} />
        <Route path="/new-password" element={<Newpassword />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;