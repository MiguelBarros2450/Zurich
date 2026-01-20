import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Car } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SimulationData {
  vehicleAge: string;
  coverageLevel: string;
  theftProtection: boolean;
  glassCoverage: boolean;
  vandalismProtection: boolean;
  email: string;
}

const coverageLevels = [
  {
    id: 'light',
    name: 'Light',
    price: 6.67,
    features: ['Responsabilidade Civil', 'Assistência em Viagem 24h', 'Proteção Jurídica'],
  },
  {
    id: 'topping',
    name: 'Topping',
    price: 8.26,
    features: [
      'Tudo do Light',
      'Danos Próprios',
      'Condutor',
      'Vidros e Retrovisores',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    price: 17.50,
    features: [
      'Tudo do Topping',
      'Roubo e Incêndio',
      'Fenómenos Naturais',
      'Proteção Total',
    ],
  },
];

export default function InsuranceSimulator() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [data, setData] = useState<SimulationData>({
    vehicleAge: '',
    coverageLevel: '',
    theftProtection: false,
    glassCoverage: false,
    vandalismProtection: false,
    email: '',
  });

  const calculatePrice = () => {
    let basePrice = 0;
    const selectedCoverage = coverageLevels.find((c) => c.id === data.coverageLevel);
    if (selectedCoverage) {
      basePrice = selectedCoverage.price;
    }

    if (data.vehicleAge === 'new') {
      basePrice *= 1.2;
    } else if (data.vehicleAge === 'medium') {
      basePrice *= 1.1;
    }

    if (data.theftProtection) basePrice += 3.5;
    if (data.glassCoverage) basePrice += 2.0;
    if (data.vandalismProtection) basePrice += 2.5;

    return basePrice.toFixed(2);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const monthlyPrice = parseFloat(calculatePrice());

      await supabase.from('simulations').insert({
        insurance_type: 'auto',
        vehicle_age: data.vehicleAge,
        coverage_level: data.coverageLevel,
        theft_protection: data.theftProtection,
        glass_coverage: data.glassCoverage,
        vandalism_protection: data.vandalismProtection,
        monthly_price: monthlyPrice,
        email: data.email || null,
      });

      setShowResult(true);
    } catch (error) {
      console.error('Error saving simulation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSimulator = () => {
    setData({
      vehicleAge: '',
      coverageLevel: '',
      theftProtection: false,
      glassCoverage: false,
      vandalismProtection: false,
      email: '',
    });
    setStep(1);
    setShowResult(false);
  };

  if (showResult) {
    const selectedCoverage = coverageLevels.find((c) => c.id === data.coverageLevel);
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Simulação Concluída!</h3>
          <p className="text-gray-600">Aqui está o seu plano recomendado</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Plano {selectedCoverage?.name}
            </h4>
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold text-blue-600">€{calculatePrice()}</span>
              <span className="text-gray-600 ml-2">/mês</span>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-gray-900 mb-3">Coberturas incluídas:</h5>
            {selectedCoverage?.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
            {data.theftProtection && (
              <div className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Proteção contra Roubo</span>
              </div>
            )}
            {data.glassCoverage && (
              <div className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Cobertura de Vidros</span>
              </div>
            )}
            {data.vandalismProtection && (
              <div className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Proteção contra Vandalismo</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Contratar Agora
          </button>
          <button
            onClick={resetSimulator}
            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Nova Simulação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Simulador de Seguro Auto</h3>
          <span className="text-sm text-gray-500">Passo {step} de 5</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            Qual a idade do seu veículo?
          </h4>
          <div className="space-y-4">
            {[
              { value: 'new', label: 'Novo (0-2 anos)' },
              { value: 'medium', label: 'Semi-novo (3-7 anos)' },
              { value: 'old', label: 'Usado (mais de 7 anos)' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setData({ ...data, vehicleAge: option.value })}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  data.vehicleAge === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      data.vehicleAge === option.value
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {data.vehicleAge === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium text-gray-900">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            Escolha o nível de cobertura
          </h4>
          <div className="space-y-4">
            {coverageLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setData({ ...data, coverageLevel: level.id })}
                className={`w-full p-6 rounded-lg border-2 transition text-left ${
                  data.coverageLevel === level.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="text-lg font-bold text-gray-900">{level.name}</h5>
                    <p className="text-sm text-gray-600">Desde €{level.price}/mês</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      data.coverageLevel === level.id
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {data.coverageLevel === level.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            Deseja proteção contra roubo?
          </h4>
          <p className="text-gray-600 mb-6">+€3,50/mês</p>
          <div className="space-y-4">
            <button
              onClick={() => setData({ ...data, theftProtection: true })}
              className={`w-full p-4 rounded-lg border-2 transition ${
                data.theftProtection
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    data.theftProtection ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}
                >
                  {data.theftProtection && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className="font-medium text-gray-900">Sim, quero proteção contra roubo</span>
              </div>
            </button>
            <button
              onClick={() => setData({ ...data, theftProtection: false })}
              className={`w-full p-4 rounded-lg border-2 transition ${
                !data.theftProtection
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    !data.theftProtection ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}
                >
                  {!data.theftProtection && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className="font-medium text-gray-900">Não, obrigado</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            Coberturas adicionais
          </h4>
          <div className="space-y-4">
            <label className="flex items-start p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition cursor-pointer">
              <input
                type="checkbox"
                checked={data.glassCoverage}
                onChange={(e) => setData({ ...data, glassCoverage: e.target.checked })}
                className="mt-1 mr-4 w-5 h-5 text-blue-600 rounded"
              />
              <div>
                <div className="font-medium text-gray-900">Quebra de Vidros</div>
                <div className="text-sm text-gray-600">
                  Cobre reparação ou substituição de vidros +€2,00/mês
                </div>
              </div>
            </label>
            <label className="flex items-start p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition cursor-pointer">
              <input
                type="checkbox"
                checked={data.vandalismProtection}
                onChange={(e) => setData({ ...data, vandalismProtection: e.target.checked })}
                className="mt-1 mr-4 w-5 h-5 text-blue-600 rounded"
              />
              <div>
                <div className="font-medium text-gray-900">Proteção contra Vandalismo</div>
                <div className="text-sm text-gray-600">
                  Cobre danos causados por atos de vandalismo +€2,50/mês
                </div>
              </div>
            </label>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            Email para receber a sua simulação (opcional)
          </h4>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="seu@email.com"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
          />
          <p className="text-sm text-gray-500 mt-3">
            Deixe o seu email para guardar esta simulação ou continue sem preencher.
          </p>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </button>
        )}
        {step < 5 && (
          <button
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 1 && !data.vehicleAge) || (step === 2 && !data.coverageLevel)
            }
            className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Continuar
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        )}
        {step === 5 && (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-400"
          >
            {isSubmitting ? 'A processar...' : 'Ver Resultado'}
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
