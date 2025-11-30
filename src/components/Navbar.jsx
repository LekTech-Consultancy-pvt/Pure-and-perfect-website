import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-primary">Pure & Perfect</h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
                        <a href="#vision" className="text-gray-700 hover:text-primary transition-colors">Vision</a>
                        <a href="#process" className="text-gray-700 hover:text-primary transition-colors">Process</a>
                        <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Products</a>
                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2">
                            Order Now <ShoppingCart size={18} />
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#vision" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Vision</a>
                        <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Process</a>
                        <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Products</a>
                        <button className="w-full text-left px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>
                            Order Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
