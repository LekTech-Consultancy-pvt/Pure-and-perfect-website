import React from 'react';
import { Phone, Mail, MapPin, QrCode } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Pure & Perfect</h2>
                        <p className="text-gray-400 mb-6">
                            Delivering the purest farm-fresh milk directly to your doorstep. Committed to health, quality, and sustainability.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                                <span>+91 8075 36 59 96</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                                <span>pureandperfect01@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                                <span>Parekkudiyil House, Amala Kara, Kothamangalam, Ernakulam, Kerala – 686692</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#vision" className="hover:text-blue-400 transition-colors">Vision & Mission</a></li>
                            <li><a href="#process" className="hover:text-blue-400 transition-colors">Process</a></li>
                            <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
                        </ul>
                    </div>

                    {/* Order / QR */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">For Orders</h3>
                        <div className="bg-white p-4 rounded-xl inline-block">
                            <QrCode size={120} className="text-gray-900" />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Scan to order via WhatsApp</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Pure and Perfect. All rights reserved.</p>
                        <div className="flex flex-col md:flex-row gap-4 text-center md:text-right">
                            <p>FSSAI: 21325192000364</p>
                            <p>UDYAM-KL-02-0116418</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
