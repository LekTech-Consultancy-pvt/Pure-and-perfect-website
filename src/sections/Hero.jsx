import { FaDroplet } from 'react-icons/fa6';

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-32 pb-0 md:pb-20 bg-gradient-to-b from-blue-400 via-offwhite to-offwhite relative overflow-hidden h-screen min-h-[95vh] flex items-end md:items-center"
        >
            <div className="milk-wave-container z-0" />

            <div className="bubble-container hidden md:block z-0">
                <div className="bubble w-8 h-8 left-[10%] animate-rise-up" />
                <div className="bubble w-12 h-12 left-[25%] animate-rise-up-7" style={{ animationDelay: '1s' }} />
                <div className="bubble w-6 h-6 left-[40%] animate-rise-up-5" style={{ animationDelay: '2.5s' }} />
                <div className="bubble w-10 h-10 left-[65%] animate-rise-up-6" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10 min-h-screen">
                <div className="md:w-1/2 mb-12 md:mb-0 z-20 md:pt-0 relative">
                    <span className="bg-white/90 text-dairyBlue px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm border border-blue-50 inline-block mb-4">
                        <FaDroplet className="inline animate-bounce mr-1" /> 100% ORGANIC & FRESH
                    </span>
                    <h1 className="slide-in-text text-5xl md:text-7xl font-extrabold text-dairyDark mt-2 leading-tight">
                        Pure Milk. <br />
                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-dairyBlue to-blue-400 inline-block animate-shimmer">
                            No Compromise.
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 mt-6 mb-8 max-w-lg leading-relaxed">
                        Experience the taste of unadulterated freshness. Sourced from happy grass-fed cows and delivered within hours of milking.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-dairyBlue text-white px-8 py-4 rounded-full font-bold hover:bg-dairyDark transition-all shadow-lg hover:shadow-dairyBlue/50 hover:-translate-y-1">
                            Start Daily Delivery
                        </button>
                    </div>
                </div>

                <div className="md:w-full relative z-20 flex justify-center items-center order-first md:order-last pt-20  mb-8 md:mb-0">
                    <img
                        src="/Packet-Milk-bottle.png"
                        alt="Milk Packet"
                        className="splash-image w-48 md:w-72 lg:w-96 h-auto object-contain drop-shadow-2xl transform translate-x-0 md:-translate-x-80"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;