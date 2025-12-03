import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';

const VisionMission = () => {
    return (
        <section id="vision" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Target className="text-primary" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision Statement</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To become the gold standard in pure, farm-fresh milk delivery, redefining health and sustainability.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mb-6">
                            <Heart className="text-green-600" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission Statement</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To deliver naturally pure, chilled milk from our own farms directly to our customers' doors in eco-friendly glass bottles - fast, fresh, and with a commitment to quality, care, and community.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
