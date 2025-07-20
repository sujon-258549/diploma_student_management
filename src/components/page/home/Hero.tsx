import heroImage from '../../../assets/hero/banner.jpg';

const Hero = () => {
    return (
        <div className="relative pt-20 pb-16">
            {/* Gradient Overlay */}
            <div className="absolute z-30 left-0 top-0 h-full w-full bg-gradient-to-r from-[#000] to-[#000] opacity-50" />

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="object-cover z-10 w-full h-full"
                    src='https://rangpur.polytech.gov.bd/sites/default/files/files/rangpur.polytech.gov.bd/top_banner/b85f72c8_f9a0_45ab_90b5_5680af4dcaba/2024-08-30-13-22-815d9ba61fe0c97726331e8001b754d1.jpg'
                    alt="Rangpur Polytechnic Institute Banner"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-40">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                            Master the basics of baking
                        </h1>
                        <p className="mt-6 tracking-tighter text-white">
                            <span className="font-sans font-normal text-7xl">
                                The road to the
                            </span>
                            <br />
                            <span className="font-serif italic font-normal text-8xl">
                                perfect loaf
                            </span>
                        </p>
                        <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus
                            pellentesque dolor consequat ligula egestas massa gravida. Porttitor
                            venenatis enim praesent.
                        </p>
                        <p className="mt-8 font-sans text-xl font-normal text-white">
                            Starting at $9.99/month
                        </p>
                        <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary"
                            >
                                <svg
                                    className="w-6 h-6 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                                    />
                                </svg>
                                Watch trailer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
