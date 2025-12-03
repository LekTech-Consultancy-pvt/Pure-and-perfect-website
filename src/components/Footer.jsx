import React from 'react';
import { Phone, Mail, MapPin, QrCode } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="bg-blue-50 text-dairyDark pt-16 pb-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/footer.png')" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Pure & Perfect</h2>
                        <p className="text-
                         mb-6">
                            Delivering the purest farm-fresh milk directly to your doorstep. Committed to health, quality, and sustainability.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dairyDark">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-
                            ">
                                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span>+91 8075 36 59 96</span>
                            </li>
                            <li className="flex items-start gap-3 text-
                            ">
                                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span>pureandperfect01@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-
                            ">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span>Parekkudiyil House, Amala Kara, Kothamangalam, Ernakulam, Kerala – 686692</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dairyDark">Quick Links</h3>
                        <ul className="space-y-2 text-
                        ">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#vision" className="hover:text-primary transition-colors">Vision & Mission</a></li>
                            <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                            <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
                        </ul>
                    </div>

                    {/* Order / QR */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-dairyDark">For Orders</h3>
                        <div className="bg-white p-4 rounded-xl inline-block shadow-md">
                            <img src="/pnp_qr.png" alt="" />
                        </div>
                        <p className="text-sm mt-2">Scan to order via WhatsApp</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
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
