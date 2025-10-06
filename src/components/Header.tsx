import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-gray-800">ShopLocal</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-400 transition-colors">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
