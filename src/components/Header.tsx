import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">SeguroTOP</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('seguros')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Seguros
            </button>
            <button
              onClick={() => scrollToSection('simulador')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection('vantagens')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection('simulador')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Simular Agora
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('seguros')}
                className="text-gray-700 hover:text-blue-600 transition text-left"
              >
                Seguros
              </button>
              <button
                onClick={() => scrollToSection('simulador')}
                className="text-gray-700 hover:text-blue-600 transition text-left"
              >
                Simulador
              </button>
              <button
                onClick={() => scrollToSection('vantagens')}
                className="text-gray-700 hover:text-blue-600 transition text-left"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-blue-600 transition text-left"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection('simulador')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Simular Agora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
