import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AgriTech Solutions</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming agriculture through innovative technology solutions that help farmers 
              achieve sustainable growth and profitability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Smart Farming</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Precision Agriculture</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Data Analytics</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Water Management</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Crop Protection</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">News & Media</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Partnerships</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@agritechsolutions.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Innovation Drive<br />Tech Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2025 AgriTech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;