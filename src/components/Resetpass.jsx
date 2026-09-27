//import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../services/auth.service";


function Resetpass() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();

    setError("");

    // 1. Check email
    if (email.trim() === "") {
      setError("Please enter your email");
      return;
    }

    // 2. Check email format
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      return;
    }

    const response = await resetPassword({
      otp: otp,
      email: email,
      password: password
    })

    const result = await response.json();
    console.log("Success:", result);
 
  alert("OTP sent successfully!");
  navigate("/reset-otp");
};

return (
  <div className="min-h-screen w-full bg-linear-to-r from-blue-200 via-purple-200 to-purple-300 flex items-center justify-center">
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-[380px] rounded-lg bg-[#091629] px-4 py-4 shadow-xl">

        {/* Heading */}
        <h2 className="!text-white text-center text-3xl font-bold whitespace-nowrap">
          Send-Reset-OTP
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-xs text-indigo-300">
          Enter your Registered Email Address
        </p>

        {/* Email */}
        <div className="mt-4 relative w-[280px] mx-auto">
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-7 w-[280px] rounded-full bg-[#354263]  pl-8 px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
          <MdMarkEmailRead
            className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-100"
            size={15} />
        </div>

       
        {error && (
          <p className="mt-2 text-center text-xs text-red-400">
            {error}
          </p>
        )}


        {/* Login Button */}

        <button
          type="button"
          onClick={handleReset}
          className="mt-4 h-7 w-[280px] mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 font-normal text-xs text-white transition hover:scale-[1.02] flex items-center justify-center">
          Send OTP
        </button>

      </div>
    </div>
  </div>
);
}

export default Resetpass;