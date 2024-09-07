// Footer.js
// components/Footer.js
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-4 md:space-y-0">

          {/* Contact Information */}
          <div className="mb-4 md:mb-0 flex gap-y-10 flex-col">
            <div className=''>
              <img src="/Assests/logo.png" alt="assests/logo.png" className='w-24 h-12' />
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start mb-1">
              <FaPhoneAlt className="mr-2" /> +1 800 123 456
            </p>
            <p className="flex items-center justify-center md:justify-start mb-1">
              <FaEnvelope className="mr-2" /> support@maicourt.com
            </p>
            </div>
            
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <a href="/about" className="hover:text-yellow-300 transition">About Us</a>
              </li>
              <li className="mb-1">
                <a href="/services" className="hover:text-yellow-300 transition">Services</a>
              </li>
              <li className="mb-1">
                <a href="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="hover:text-yellow-300 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="hover:text-yellow-300 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-yellow-300 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-yellow-300 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; 2024 mAICourt. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
