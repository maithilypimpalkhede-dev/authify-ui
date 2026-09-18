import { Link } from "react-router-dom";


function Navbar() {
  return (
  
    <nav className="sticky top-0 z-50  w-full mx-auto mt-1 px-2 py-1 rounded-2xl bg-slate-100 flex items-center justify-between">


      {/* Authify Logo */}
      <Link to="/">
      <img
        src="/logoauth1.png"
        alt="Authify"
        className="w-28 h-20 object-contain"
      />
      </Link>

      {/* Login Button */}

 <Link
  to="/Login" className="
    px-5 py-3
    rounded-xl
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white font-medium
    shadow-[0_0_15px_rgba(99,102,241,0.6)]
    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(139,92,246,0.9)]
  ">

  Get Started
</Link>
</nav>

  );
}
export default Navbar;



