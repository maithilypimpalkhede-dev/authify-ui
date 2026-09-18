// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // NEW: Stores the error message
  const [error, setError] = useState("");

  // NEW: Used to move to another page
  const navigate = useNavigate();

  // NEW: This function runs when Login is clicked
  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear old error
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
      const response = await fetch("http://localhost:3000/api/auth/login", {
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
          <div className="mt-3">
            <input
              type="text"
              placeholder="Username"
              // NEW: React stores username
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-8 w-[280px] rounded-full bg-[#354263] px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <input
              type="email"
              placeholder="Email id"
              // NEW: React stores email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-8 w-[280px] rounded-full bg-[#354263] px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <input
              type="password"
              placeholder="Password"
              // NEW: React stores password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-8 w-[280px] rounded-full bg-[#354263] px-5 text-sm text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
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
            // NEW: Run validation when clicked
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