
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Newpassword() {

  // NEW: Stores the new password
  const [password, setPassword] = useState("");

  // NEW: Stores the confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  // NEW: Stores the error message
  const [error, setError] = useState("");

  // NEW: Used to move to another page
  const navigate = useNavigate();


  // NEW: This function runs when Confirm Password is clicked
  const handlePassword = (e) => {
    e.preventDefault();

    // Clear old error
    setError("");

    // 1. Check new password
    if (password === "") {
      setError("Please enter your new password");
      return;
    }

    // 2. Check password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // 3. Check confirm password
    if (confirmPassword === "") {
      setError("Please confirm your password");
      return;
    }

    // 4. Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Everything is valid
    alert("Password changed successfully!");

    // Go to Login page
    navigate("/login");
  };


  return(
    <div className="min-h-screen w-full bg-linear-to-r from-blue-200 via-purple-200 to-purple-300 flex items-center justify-center">

      <div className="min-h-screen flex items-center justify-center">

        <div className="w-[350px] rounded-lg bg-[#091629] px-3 py-7 shadow-xl">

          {/* Heading */}
          <h2 className="!text-white text-center text-3xl font-bold whitespace-nowrap">
            New Password
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-center text-xs text-indigo-300">
            Create your new Password
          </p>

          {/* Password */}
          <div className="mt-3">
            <input
              type="password"
              placeholder="New Password"

              // NEW: React stores new password
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              className="h-8 w-[280px] rounded-full bg-[#354263] px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-3">
            <input
              type="password"
              placeholder="Confirm Password"

              // NEW: React stores confirm password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}

              className="h-8 w-[280px] rounded-full bg-[#354263] px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>


          {/* NEW: Show error message */}
          {error && (
            <p className="mt-2 text-center text-xs text-red-400">
              {error}
            </p>
          )}


          {/* Confirm Password Button */}
          <button
            type="button"

            // NEW: Run validation when clicked
            onClick={handlePassword}

            className="mt-4 h-7 w-[280px] mx-auto rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 font-normal text-xs text-white transition hover:scale-[1.02] flex items-center justify-center"
          >
            Confirm Password
          </button>

        </div>
      </div>
    </div>
  );
}

export default Newpassword;