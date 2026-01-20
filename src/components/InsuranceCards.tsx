import { Car, Bike, Home, Heart, Users, Shield } from 'lucide-react';

const insuranceTypes = [
  {
    icon: Car,
    title: 'Seguro Auto',
    description: 'Proteção completa para o seu veículo',
    startingPrice: '6,67',
    features: ['Responsabilidade Civil', 'Assistência em Viagem', 'Proteção Jurídica'],
    color: 'bg-blue-600',
  },
  {
    icon: Bike,
    title: 'Seguro Moto',
    description: 'Segurança para a sua moto',
    startingPrice: '6,28',
    features: ['Danos Próprios', 'Roubo e Incêndio', 'Equipamento'],
    color: 'bg-blue-600',
  },
  {
    icon: Home,
    title: 'Seguro Casa',
    description: 'Proteja o seu lar',
    startingPrice: '3,00',
    features: ['Incêndio', 'Roubo', 'Danos por Água'],
    color: 'bg-blue-600',
  },
  {
    icon: Heart,
    title: 'Seguro Saúde',
    description: 'Cuide da sua saúde',
    startingPrice: '4,10',
    features: ['Consultas', 'Exames', 'Internamentos'],
    color: 'bg-blue-600',
  },
  {
    icon: Users,
    title: 'Seguro Vida',
    description: 'Proteja quem mais ama',
    startingPrice: '4,40',
    features: ['Morte', 'Invalidez', 'Doenças Graves'],
    color: 'bg-blue-600',
  },
  {
    icon: Shield,
    title: 'Bicicleta & Trotinete',
    description: 'Para a sua mobilidade',
    startingPrice: '2,30',
    features: ['Roubo', 'Danos', 'Responsabilidade Civil'],
    color: 'bg-blue-600',
  },
];

export default function InsuranceCards() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="seguros" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Os Nossos Seguros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o seguro ideal para si. Preços transparentes e coberturas flexíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => {
            const Icon = insurance.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className={`${insurance.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {insurance.title}
                </h3>
                <p className="text-gray-600 mb-4">{insurance.description}</p>
                <div className="mb-6">
                  <span className="text-sm text-gray-500">Desde</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-blue-600">
                      €{insurance.startingPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/mês</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {insurance.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToSimulator}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Simular
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
