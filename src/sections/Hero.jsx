import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-200 to-white">
            <Hero3D />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="w-full md:w-1/2 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">Fresh Cow Milk From Our Own Farm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                            PURE AND <br />
                            <span className="text-blue-400">PERFECT</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Experience the taste of nature with our farm-fresh, preservative-free milk delivered directly to your doorstep.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                                Order Now
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-full font-medium transition-all border border-primary/20">
                                Learn More
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="bg-white/80 backdrop-blur p-3 rounded-xl shadow-sm">
                                <p className="text-sm font-bold text-primary">No Preservatives</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur p-3 rounded-xl shadow-sm">
                                <p className="text-sm font-bold text-primary">Farm Fresh</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
