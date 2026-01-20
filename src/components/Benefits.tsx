import { Clock, Shield, Headphones, FileText, Star } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Contratação em 5 minutos',
    description: 'Processo 100% digital, simples e rápido. Sem papelada complicada.',
  },
  {
    icon: Shield,
    title: 'Coberturas transparentes',
    description: 'Sem letras pequenas. Saiba exatamente o que está a contratar.',
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Equipa sempre disponível para ajudar quando precisar.',
  },
  {
    icon: FileText,
    title: 'Sem complicações',
    description: 'Sinistros tratados rapidamente. Processos simplificados.',
  },
];

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Cliente desde 2022',
    content: 'O melhor seguro que já tive. Preço justo e atendimento excelente. Recomendo!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'João Santos',
    role: 'Cliente desde 2021',
    content: 'Mudei para a SeguroTOP e nunca mais olhei para trás. Poupei dinheiro e ganhei qualidade.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ana Costa',
    role: 'Cliente desde 2023',
    content: 'Processo super simples e preços honestos. Finalmente um seguro que faz sentido!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Benefits() {
  return (
    <>
      <section id="vantagens" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porquê escolher-nos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos diferentes. Focamos na simplicidade, transparência e no melhor serviço.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que dizem os nossos clientes
            </h2>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold text-gray-900 ml-2">4.9/5</span>
              <span className="text-gray-600">(2.450 avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
