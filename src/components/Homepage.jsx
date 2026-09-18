
function Homepage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-300 via-purple-200 to-pink-100">

      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-400/30 blur-2xl animate-bounce"></div>

      <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-blue-400/30 blur-xl animate-pulse"></div>

      <div className="absolute bottom-20 right-10 h-28 w-28 rounded-full bg-purple-400/30 blur-xl animate-pulse"></div>

      <div className="absolute top-1/2 right-20 h-16 w-16 rounded-full bg-pink-400/30 blur-xl animate-bounce"></div>



      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-5">


        {/* Robot */}
        <img
          src="/roboimage.png"
          alt="Authify Robot"
          className="w-40 object-contain mb-0 animate-[spin_6s_linear_infinite]"
        />

        {/* Heading */}
        <h2 className="text-1xl md:text-1xl font-bold text-gray-900 -mt-16">
          Welcome to Authify!!
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-lg text-gray-600 text-base font-normal font-sans leading-relaxed">
          Experience secure and seamless authentication.
          Sign up or log in to access our modern authentication platform.
        </p>

      </main>

    </div>
  );
}

export default Homepage;