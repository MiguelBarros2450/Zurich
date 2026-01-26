import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seguramos o presente, asseguramos o futuro.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Seguros simples, transparentes e acessíveis.
              Desde €2,30/mês. Sem complicações, sem letras pequenas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToSimulator}
                className="bg-[#215ba4] text-white px-8 py-4 rounded-lg hover:bg-[#1c4d8a] transition flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg"
              >
                <span>Simular Seguro</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('seguros')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#215ba4] text-[#215ba4] px-8 py-4 rounded-lg hover:text-[#1c4d8a] hover:border-[#1c4d8a] hover:bg-transparent transition-colors text-lg font-semibold"
              >
                Ver Seguros
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Mais de 50.000 clientes satisfeitos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Atendimento 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Processos rápidos e simples</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Família feliz protegida"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
