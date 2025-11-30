import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, Clock } from 'lucide-react';

const packages = [
    {
        title: "Daily Delight",
        size: "1 Litre",
        frequency: "Daily",
        description: "Perfect for families. Fresh milk delivered every morning.",
        color: "bg-blue-600",
        popular: true
    },
    {
        title: "Mini Daily",
        size: "500 ml",
        frequency: "Daily",
        description: "Ideal for small families or individuals.",
        color: "bg-cyan-600",
        popular: false
    },
    {
        title: "Alternate 1L",
        size: "1 Litre",
        frequency: "Alternative Days",
        description: "Fresh milk delivered every other day.",
        color: "bg-teal-600",
        popular: false
    },
    {
        title: "Alternate Mini",
        size: "500 ml",
        frequency: "Alternative Days",
        description: "500ml delivered every other day.",
        color: "bg-indigo-600",
        popular: false
    }
];

const Packages = () => {
    return (
        <section id="products" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Packages</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your lifestyle. Flexible and convenient.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                    POPULAR
                                </div>
                            )}

                            <div className={`${pkg.color} h-24 flex items-center justify-center`}>
                                <ShoppingBag className="text-white opacity-80" size={40} />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm">
                                    <Calendar size={16} />
                                    <span>{pkg.frequency}</span>
                                </div>

                                <div className="flex items-baseline mb-4">
                                    <span className="text-3xl font-bold text-gray-900">{pkg.size}</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-6">
                                    {pkg.description}
                                </p>

                                <button className={`w-full py-2 rounded-lg font-medium transition-colors ${pkg.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                                    Subscribe
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
