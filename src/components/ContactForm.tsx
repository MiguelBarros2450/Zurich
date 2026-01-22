import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase.from('contacts').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        insurance_type: formData.insuranceType || null,
        message: formData.message || null,
      });

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
      console.error('Error submitting contact form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fale Connosco
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas? A nossa equipa está pronta para ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Entre em contacto</h3>
            <p className="text-gray-600 mb-8">
              Preencha o formulário e entraremos em contacto o mais breve possível.
              Estamos disponíveis de segunda a sexta, das 9h às 19h.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Telefone</div>
                  <a href="tel:+351 262 562 999" className="text-gray-600 hover:text-blue-600">
                    +351 262 562 999
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:geral@jorgemarquesseguros.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    geral@jorgemarquesseguros.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Morada</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=R.+Heróis+do+Ultramar,+41,+2450-027+Famalicão,+Portugal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 hover:underline block mb-2"
                  >
              R. Heróis do Ultramar, 41<br />
              2450-027 Famalicão, Portugal
    </a>

    <a
      href="https://www.google.com/maps/search/?api=1&query=R.+Alves+Redol,+Loja+25,+2450-168+Nazaré,+Portugal"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 hover:underline"
    >
      R. Alves Redol, Loja 25<br />
      2450-168 Nazaré, Portugal
    </a>
  </div>
</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">
                  Obrigado pelo seu contacto. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="+351 912 345 678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de Seguro
                  </label>
                  <select
                    id="insuranceType"
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="auto">Seguro Auto</option>
                    <option value="moto">Seguro Moto</option>
                    <option value="casa">Seguro Casa</option>
                    <option value="saude">Seguro Saúde</option>
                    <option value="vida">Seguro Vida</option>
                    <option value="bicicleta">Bicicleta & Trotinete</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    'A enviar...'
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
