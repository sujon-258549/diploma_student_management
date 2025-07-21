import Marquee from "react-fast-marquee";

const departments = [
  {
    id: 1,
    name: "Computer Technology",
    description: "Learn software development, networking, and IT essentials.",
    icon: (
      <svg
        className="w-10 h-10 text-cyan-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Mechanical Technology",
    description: "Focus on machines, mechanics, and manufacturing processes.",
    icon: (
      <svg
        className="w-10 h-10 text-amber-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Electrical Technology",
    description: "Study circuits, electrical systems, and automation.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Civil Technology",
    description: "Learn construction, surveying, and civil engineering basics.",
    icon: (
      <svg
        className="w-10 h-10 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3L2 12h3v7h6v-7h3l7-9z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Electronics Technology",
    description: "Explore electronics design, microcontrollers, and circuits.",
    icon: (
      <svg
        className="w-10 h-10 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M14 8l-4 8" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Power Technology",
    description: "Focus on power generation, transmission, and electrical machines.",
    icon: (
      <svg
        className="w-10 h-10 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Automobile Technology",
    description: "Study vehicle mechanics, engines, and automotive systems.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="11" width="18" height="7" rx="2" ry="2" />
        <path d="M7 18v2a2 2 0 104 0v-2M17 18v2a2 2 0 104 0v-2" />
      </svg>
    ),
  },
];

const DepartmentCards = () => {
  return (
    <section className="py-16 ">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-cyan-400 mb-4">
            Departments of Rangpur Polytechnic
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse range of technical departments offering cutting-edge education
          </p>
        </div>
        
        <div className=" pt-10 border-y-4 px-11 border-y-cyan-500 ">
          <Marquee 
            speed={40}
            gradient={true}
            // @ts-expect-error
            gradientColor={[17, 24, 39]}
            gradientWidth={80}
            pauseOnHover={true}
          >
            {departments.map(({ id, name, description, icon }) => (
              <div
                key={id} style={{boxShadow:'1px 1px 10px'}}
                className="bg-gray-700 mb-10  rounded-xl  p-6 w-72 sm:w-80 mx-3 hover:scale-105 transform transition duration-300 cursor-pointer group border border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg group-hover:from-cyan-600 group-hover:to-blue-700 transition duration-300">
                    {icon}
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-bold truncate">{name}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                  {description}
                </p>
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-300 transform group-hover:scale-95 text-sm sm:text-base">
                  Learn More
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default DepartmentCards;