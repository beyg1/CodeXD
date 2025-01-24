//import Button from './Button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 px-4 py-3">
      <div className="md:mx-52 bg-white/40 backdrop-blur-md shadow-lg rounded-3xl border border-white/20">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-xl font-bold text-blue-600">
            Dubai AC Services
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Why Us</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors shadow-md">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
