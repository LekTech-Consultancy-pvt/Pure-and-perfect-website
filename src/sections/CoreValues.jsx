import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, HeartHandshake } from 'lucide-react';

const values = [
    {
        title: "Purity",
        description: "No compromise on freshness or quality. Daily purity check ensures you get the best.",
        icon: ShieldCheck,
        color: "bg-blue-500"
    },
    {
        title: "Transparency",
        description: "From our farm to your doorstep. Complete visibility in our process.",
        icon: Eye,
        color: "bg-cyan-500"
    },
    {
        title: "Care",
        description: "For health, for cows, for the planet. Sustainable practices at every step.",
        icon: HeartHandshake,
        color: "bg-teal-500"
    }
];

const CoreValues = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Core Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The principles that guide us in delivering perfection.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative overflow-hidden group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${value.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150`}></div>

                            <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
                                <value.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
