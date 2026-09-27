
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { resetOTP } from "../services/auth.service";


function ResetOTP() {

  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleChange = (e, index) => {

    const value = e.target.value;

    // NEW: Allow only numbers
    if (!/^[0-9]?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Check if all OTP boxes are filled
    if (otp.some((digit) => digit === "")) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }
    try {
      const response = await resetOTP({
        email: email,
      })

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Post failed:", error);
    }
 
  alert("OTP verified successfully!");
  navigate("/new-password");
};



return (
  <div className="min-h-screen w-full bg-linear-to-r from-blue-200 via-purple-200 to-purple-300 flex items-center justify-center">

    <div className="min-h-screen flex items-center justify-center">

      <div className="w-[380px] rounded-lg bg-[#091629] px-4 py-4 shadow-xl">

        {/* Heading */}
        <h2 className="!text-white text-center text-3xl font-bold whitespace-nowrap">
          Verify OTP
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-xs text-indigo-300">
          Enter the 6-digit code sent to your Email id
        </p>


        <div className="mt-6 flex justify-center gap-2">

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[0] = el)}
            value={otp[0]}
            onChange={(e) => handleChange(e, 0)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[1] = el)}
            value={otp[1]}
            onChange={(e) => handleChange(e, 1)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[2] = el)}
            value={otp[2]}
            onChange={(e) => handleChange(e, 2)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[3] = el)}
            value={otp[3]}
            onChange={(e) => handleChange(e, 3)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[4] = el)}
            value={otp[4]}
            onChange={(e) => handleChange(e, 4)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

          <input
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[5] = el)}
            value={otp[5]}
            onChange={(e) => handleChange(e, 5)}
            className="h-10 w-10 rounded-md bg-[#354263] text-center text-white outline-none"
          />

        </div>


        {/* NEW: Show error message */}
        {error && (
          <p className="mt-2 text-center text-xs text-red-400">
            {error}
          </p>
        )}


      
        <button
          type="button"
          onClick={handleVerifyOTP}
          className="mt-4 h-7 w-[280px] mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 font-normal text-xs text-white transition hover:scale-[1.02] flex items-center justify-center"
        >
          Verify OTP
        </button>

      </div>
    </div>
  </div>
);
}

export default ResetOTP;
