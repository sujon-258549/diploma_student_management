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
      >
        <rect x="3" y="11" width="18" height="7" rx="2" ry="2" />
        <path d="M7 18v2a2 2 0 104 0v-2M17 18v2a2 2 0 104 0v-2" />
      </svg>
    ),
  },
];

const DepartmentCards = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
          Departments of Rangpur Polytechnic Institute
        </h2>
        <Marquee  className="flex gap-10">
          {departments.map(({ id, name, description, icon }) => (
            <div
              key={id}
              className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl p-6 max-w-sm mx-auto hover:scale-105 transform transition duration-300 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg group-hover:from-cyan-600 group-hover:to-blue-700 transition duration-300">
                  {icon}
                </div>
                <h3 className="text-white text-xl font-semibold">{name}</h3>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
              <button className="mt-6 inline-block bg-cyan-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-cyan-600 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default DepartmentCards;
