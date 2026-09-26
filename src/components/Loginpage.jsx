// import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useState } from "react";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Check username
    if (username.trim() === "") {
      setError("Please enter your username");
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

    try {
      const response = await fetch("https://authify-backend-ypf8.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      if (!response.ok) throw new Error(`Status: ${response.status}`);

      const result = await response.json();
      alert("Login Successful")
      console.log("Success:", result);
    } catch (error) {
      console.error("Post failed:", error);
    }
  };


  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-r from-blue-200 via-purple-200 to-purple-300 flex items-center justify-center">
        <div className="min-h-screen flex items-center justify-center">

          <div className="w-[350px] rounded-lg bg-[#091629] px-3 py-7 shadow-xl">

            {/* Heading */}
            <h2 className="!text-white text-center text-3xl font-bold whitespace-nowrap">
              Login Account
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-center text-xs text-indigo-300">
              Login to your account
            </p>


            {/* username */}
            <div className="mt-3 relative w-[280px] mx-auto">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-8 w-[280px] rounded-full bg-[#354263] pl-10 px-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
              />
              <MdOutlineDriveFileRenameOutline
              className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-100"
                size={15}
               />
            </div>

            {/* Email */}
            <div className="mt-3 relative w-[280px] mx-auto">
              <input
                type="email"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 w-[280px] rounded-full bg-[#354263] pl-10 pr-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
              />
              <MdMarkEmailRead
                className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-100"
                size={15} />
            </div>

            {/* Password */}

            <div className="mt-3 relative w-[280px] mx-auto">
              {/* Password Icon */}
              <RiLockPasswordFill
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-100"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-8 w-[280px] rounded-full bg-[#354263] pl-10 pr-10 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
              </button>
            </div>



            {error && (
              <p className="mt-2 text-center text-xs text-red-400">
                {error}
              </p>
            )}

            {/* Forgot Password */}
            <div className="mt-3">

              <Link
                to="/reset-password" className="text-sm text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button type="button"
              onClick={handleLogin}
              className="mt-3 h-8 w-[280px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 font-semibold text-white transition hover:scale-[1.02]"
            > Login
            </button>

            {/* Signup */}
            <p className="mt-3 text-center text-xs text-gray-400">
              Don't have an account?{" "}

              <Link
                to="/signin" className="text-indigo-400 hover:text-indigo-300">
                Sign up
              </Link>
            </p>

          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default LoginCard;