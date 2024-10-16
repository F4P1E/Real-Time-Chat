// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold">Syntax Canvas</h3>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="text-gray-400 hover:text-gray-300 transition">About Us</a>
              <a href="/contact" className="text-gray-400 hover:text-gray-300 transition">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-gray-300 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  