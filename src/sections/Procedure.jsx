import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Milking",
        description: "Cows are bathed, cleaned and milking begins daily at 3 am.",
        icon: Clock,
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        title: "Quality Checking",
        description: "Rigorous quality tests to ensure purity and safety.",
        icon: CheckCircle,
        color: "bg-green-100 text-green-600"
    },
    {
        id: 3,
        title: "Packing",
        description: "Hygienic packing in eco-friendly glass bottles.",
        icon: Package,
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        id: 4,
        title: "Delivery",
        description: "Delivery at your doorstep (6.00 am - 8.00 am).",
        icon: Truck,
        color: "bg-purple-100 text-purple-600"
    }
];

const Procedure = () => {
    return (
        <section id="process" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className='flex flex-col md:flex-row justify-center md:justify-end items-center gap-10 md:gap-64'>
                        <h2 className="text-4xl font-bold text-primary mb-4">Farm to Bottle</h2>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}

                        >
                            <img className='w-52 h-52 object-cover' src="/ffftb.png" alt="" />
                        </motion.div>
                    </div>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our meticulous process ensures that you get the freshest milk possible, every single day.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${step.color} group-hover:scale-110 transition-transform`}>
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>

                                {/* Arrow for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-4 flex justify-center text-gray-300">
                                        <ArrowRight size={24} className="rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Procedure;
