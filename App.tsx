
import React, { useState } from 'react';
import { PRODUCTS, REVIEWS, FAQS } from './constants.tsx';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/5511980183198?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20mais%20peças.";
  const instagramLink = "https://www.instagram.com/ck.fashionstore_/";

  const pokeAFriend = () => {
    const text = encodeURIComponent(`Olha os looks dessa loja aqui! Como eu gostaria de um presente dessa loja! 😂 https://www.instagram.com/ck.fashionstore_/`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 py-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-pink-custom overflow-hidden shadow-[0_0_20px_rgba(255,20,147,0.4)] flex items-center justify-center bg-black">
            <img 
              src="https://agenciafoxon.com.br/wp-content/uploads/2026/01/477162718_18060193580505433_2477155082232626958_n.jpg" 
              alt="CK Fashion Logo" 
              className="w-full h-full object-cover scale-150 transition-transform duration-500"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold brand-font text-white tracking-tighter">CK <span className="text-pink-custom">FASHION</span></h1>
        </div>
        
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-pink-custom transition-colors">Início</a>
          <a href="#colecao" className="hover:text-pink-custom transition-colors">Coleção</a>
          <a href="#depoimentos" className="hover:text-pink-custom transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-pink-custom transition-colors">Dúvidas</a>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <a href={instagramLink} target="_blank" rel="noopener" className="text-2xl hover:text-pink-custom transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener" className="text-2xl hover:text-pink-custom transition-colors">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Moda Feminina Luxo" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-bold mb-6 brand-font leading-tight">
            Seu <span className="text-pink-custom">Estilo</span>, <br/>
            Seu <span className="border-b-4 border-pink-custom">Poder</span>.
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200 font-light tracking-widest uppercase">
            Peças exclusivas para mulheres que dominam o mundo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#colecao" 
              className="bg-pink-custom hover:bg-pink-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(255,20,147,0.5)] uppercase tracking-wider"
            >
              Ver Coleção Completa
            </a>
            <a 
              href={whatsappLink} 
              className="bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <i className="fab fa-whatsapp text-xl"></i> Chamar no Whats
            </a>
          </div>
        </div>
      </section>

      {/* Seção Exclusividade */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-custom/10 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="https://agenciafoxon.com.br/wp-content/uploads/2026/01/unica.png" 
                alt="Mulher estilosa" 
                className="rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:scale-[1.02] transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-pink-custom font-black uppercase tracking-[0.3em] text-xs">Exclusividade Real</span>
              <h2 className="text-4xl md:text-6xl font-bold brand-font leading-[1.1]">
                Fuja do <span className="text-pink-custom italic">comum</span>.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Na <span className="text-white font-bold">CK Fashion Store</span>, acreditamos que você nasceu para se destacar. Curadoria de poucas unidades por modelo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-pink-custom flex items-center justify-center text-pink-custom shrink-0"><i className="fas fa-check"></i></div>
                  <p className="font-medium text-gray-200">Curadoria exclusiva.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-pink-custom flex items-center justify-center text-pink-custom shrink-0"><i className="fas fa-check"></i></div>
                  <p className="font-medium text-gray-200">Modelagens que valorizam seu corpo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="colecao" className="py-24 px-4 md:px-12 bg-black">
        <div className="text-center mb-16">
          <span className="text-pink-custom font-bold uppercase tracking-[0.4em] text-xs">Coleção Atual</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 brand-font">Desejos da <span className="text-pink-custom italic">Temporada</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-5 left-5 bg-pink-custom text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                  <a href={whatsappLink} className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-pink-custom hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 shadow-2xl">
                    Eu quero!
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-pink-custom font-bold">R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center brand-font mb-12">Dúvidas <span className="text-pink-custom">Frequentes</span></h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/30">
                <button 
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <i className={`fas fa-plus transition-transform ${activeFaq === idx ? 'rotate-45 text-pink-custom' : ''}`}></i>
                </button>
                {activeFaq === idx && <div className="p-6 pt-0 text-gray-400 animate-fadeIn">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-white/5 text-center">
        <h2 className="text-2xl font-bold brand-font mb-4 tracking-tighter">CK <span className="text-pink-custom">FASHION</span></h2>
        <p className="text-gray-500 text-xs uppercase tracking-widest">© 2026 CK Fashion Store. Todos os direitos reservados.</p>
        <div className="mt-8 flex justify-center gap-6 text-xl text-gray-600">
           <a href={instagramLink} target="_blank"><i className="fab fa-instagram"></i></a>
           <a href={whatsappLink} target="_blank"><i className="fab fa-whatsapp"></i></a>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href={whatsappLink} target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 animate-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
