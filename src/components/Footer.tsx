import { Shield, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Jorge Marques SegurosP</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Seguramos o presente... Asseguramos o futuro.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#215ba4] transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#215ba4] transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Seguros</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Seguro Auto
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Seguro Moto
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Seguro Casa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Seguro Saúde
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Seguro Vida
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('vantagens')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Sobre Nós
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Apoio</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-sm hover:text-[#215ba4] transition"
                >
                  Contactos
                </button>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#215ba4] transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SeguroTOP. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#215ba4] transition">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#215ba4] transition">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-[#215ba4] transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
