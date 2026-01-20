import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceCards from './components/InsuranceCards';
import InsuranceSimulator from './components/InsuranceSimulator';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <InsuranceCards />
        <section id="simulador" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simule o Seu Seguro Auto
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Responda a algumas perguntas e descubra o plano ideal para si em menos de 2 minutos.
              </p>
            </div>
            <InsuranceSimulator />
          </div>
        </section>
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
