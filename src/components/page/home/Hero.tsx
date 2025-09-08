

const Hero = () => {
  return (
    <section className="relative w-full h-screen md:max-h-[600px] max-h-[700px] flex items-center bg-gradient-to-b from-black/100 via-black/100 to-black/80 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://rangpur.polytech.gov.bd/sites/default/files/files/rangpur.polytech.gov.bd/top_banner/b85f72c8_f9a0_45ab_90b5_5680af4dcaba/2024-08-30-13-22-815d9ba61fe0c97726331e8001b754d1.jpg"
        alt="Rangpur Polytechnic Institute Banner"
        className="absolute inset-0 object-cover w-full h-full brightness-75"
        loading="lazy"
      />

      {/* Overlay Gradient */}
      <div className="absolute  inset-0 bg-gradient-to-b from-[#0000009e] via-[#000000] to-[#0000009e]"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-6xl  mx-auto px-6 sm:px-12 md:px-16 lg:px-24 text-center text-white select-none">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          <span className="block text-cyan-400">Rangpur</span>
          <span className="block text-amber-400 italic">Polytechnic Institute</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl font-light text-gray-300 tracking-wide">
          Empowering future professionals with cutting-edge technical education
        </p>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg font-normal text-gray-200 leading-relaxed">
          Rangpur Polytechnic Institute is dedicated to fostering innovation, skill development, and excellence in engineering and technology.
          Join a vibrant community where practical learning meets academic rigor.
        </p>

      

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 text-black font-semibold px-8 py-3 rounded-full transition-shadow duration-300 shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
              />
            </svg>
            Watch Trailer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
