import { postRegister } from "../services/auth.service";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  // const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    // 1. Check name
    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }

    // 2. Check email
    if (email.trim() === "") {
      setError("Please enter your email");
      return;
    }

    // 3. Check email format
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      return;
    }

    // 4. Check password
    if (password === "") {
      setError("Please enter your password");
      return;
    }

    // 5. Check confirm password
    if (confirmPassword === "") {
      setError("Please confirm your password");
      return;
    }

    // 6. Compare passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await postRegister({
        name: name,
        email: email,
        password: password
      })

      const result = await response.json();
      console.log("Success:", result);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Post failed:", error);
      alert("Account creation failed!");
    }
  };


  return (

    <div className="min-h-screen w-full bg-linear-to-r from-blue-200 via-purple-200 to-purple-300 flex items-center justify-center">
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-[350px] rounded-lg bg-[#091629] px-3 py-7 shadow-xl">

          {/* Heading */}
          <h2 className="!text-white text-center text-3xl font-bold whitespace-nowrap">
            Create Account
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-center text-xs text-indigo-300">
            Create your new account
          </p>


          {/* username */}
          <div className="mt-3 relative w-[280px] mx-auto">
            <input
              type="text"
              placeholder="New Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-8 w-[280px] rounded-full bg-[#354263] pl-8 px-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <MdOutlineDriveFileRenameOutline
              className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-100"
              size={15}
            />

          </div>

          {/* Email */}
          <div className="mt-3 relative w-[280px] mx-auto">
            <input
              type="email"
              placeholder="Your Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-8 w-[280px] rounded-full bg-[#354263] pl-8 px-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <MdMarkEmailRead
              className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-100"
              size={15} />
          </div>

          {/* Password */}
          <div className="relative mt-3 w-[280px] mx-auto">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-8 w-full rounded-full bg-[#354263] pl-5 pr-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-300 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mt-3 w-[280px] mx-auto">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-8 w-full rounded-full bg-[#354263] pl-5 pr-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="button"
              onClick={() => setConfirmPassword(!confirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-300 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>


          {error && (
            <p className="mt-2 text-center text-xs text-red-400">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="button"
            onClick={handleSignup}
            className="mt-3 h-8 w-[280px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 font-semibold text-white transition hover:scale-[1.02]"
          >
            Create
          </button>



        </div>
      </div>
    </div>
  );
}

export default Signin;
