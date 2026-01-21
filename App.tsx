
import React, { useState } from 'react';
import { PRODUCTS, REVIEWS, FAQS, SITE_ASSETS } from './constants';

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
          <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-pink-custom overflow-hidden shadow-[0_0_20px_rgba(255,20,147,0.4)] flex items-center justify-center bg-white">
            <img 
              src={SITE_ASSETS.LOGO} 
              alt="CK Fashion Logo" 
              className="w-full h-full object-contain p-1"
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
            src={SITE_ASSETS.HERO_BANNER} 
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
                src={SITE_ASSETS.EXCLUSIVITY_IMAGE} 
                alt="Mulher estilosa" 
                className="rounded-2xl shadow-2xl border border-white/10 relative z-10 hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-custom p-8 rounded-2xl shadow-2xl z-20 max-w-[200px] text-center hidden md:block">
                <span className="text-3xl font-bold block mb-1">ÚNICA</span>
                <span className="text-[10px] uppercase tracking-widest font-black leading-none">Fuja do comum com a CK</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-pink-custom font-black uppercase tracking-[0.3em] text-xs">Exclusividade Real</span>
              <h2 className="text-4xl md:text-6xl font-bold brand-font leading-[1.1]">
                Cansada de encontrar <span className="text-pink-custom italic">"cópias"</span> do seu look por aí?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Sabemos o quão frustrante é investir tempo e dinheiro em uma roupa e, ao chegar no evento, encontrar várias pessoas com o mesmo visual. Na <span className="text-white font-bold">CK Fashion Store</span>, nós acreditamos que você nasceu para se destacar, não para se misturar.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-pink-custom flex items-center justify-center text-pink-custom shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="font-medium text-gray-200">Curadoria de poucas unidades por modelo.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-pink-custom flex items-center justify-center text-pink-custom shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="font-medium text-gray-200">Peças selecionadas que não existem em lojas de rede.</p>
                </div>
              </div>
              <p className="text-pink-custom font-bold italic text-lg pt-4 border-t border-white/10">
                "Não vendemos apenas roupas. Vendemos a segurança de ser a única na sala."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4"><i className="fas fa-truck-fast"></i></div>
              <h4 className="font-bold text-lg">Entrega Nacional</h4>
              <p className="text-sm text-gray-500 font-medium">Enviamos para todo Brasil</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4"><i className="fas fa-shield-halved"></i></div>
              <h4 className="font-bold text-lg">Compra Segura</h4>
              <p className="text-sm text-gray-500 font-medium">Dados 100% protegidos</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4"><i className="fas fa-rotate"></i></div>
              <h4 className="font-bold text-lg">Troca Facilitada</h4>
              <p className="text-sm text-gray-500 font-medium">7 dias para trocar</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4"><i className="fas fa-gem"></i></div>
              <h4 className="font-bold text-lg">Premium Quality</h4>
              <p className="text-sm text-gray-500 font-medium">Curadoria exclusiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coleção */}
      <section id="colecao" className="py-24 px-4 md:px-12 bg-black">
        <div className="text-center mb-16">
          <span className="text-pink-custom font-bold uppercase tracking-[0.4em] text-xs">Coleção 2026</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 brand-font">Desejos da <span className="text-pink-custom italic">Temporada</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt="Look CK" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-5 left-5 bg-pink-custom text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                  <a 
                    href={whatsappLink}
                    className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-pink-custom hover:text-white transition-all"
                  >
                    Eu quero este look!
                  </a>
                  <button 
                    onClick={() => pokeAFriend()}
                    className="bg-pink-custom text-white px-6 py-2.5 rounded-full font-bold text-xs"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> Cutuque um amigo!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href={whatsappLink} className="inline-block border-2 border-pink-custom text-pink-custom hover:bg-pink-custom hover:text-white px-12 py-5 rounded-full font-black transition-all">
            Quero ver mais modelos
          </a>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-font mb-4">Experiência <span className="text-pink-custom">CK</span></h2>
            <div className="flex justify-center gap-1 text-pink-custom text-2xl mb-4">
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-zinc-900/50 p-8 rounded-[2rem] border border-white/5 hover:border-pink-500/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-pink-custom/10 flex items-center justify-center text-pink-custom">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-pink-custom uppercase">{review.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center brand-font mb-12">Dúvidas <span className="text-pink-custom">Frequentes</span></h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/30">
                <button 
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <i className={`fas fa-plus transition-transform ${activeFaq === idx ? 'rotate-45 text-pink-custom' : ''}`}></i>
                </button>
                {activeFaq === idx && (
                  <div className="p-6 pt-0 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold brand-font mb-8">Onde nos <span className="text-pink-custom">Encontrar</span></h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-custom text-white p-3 rounded-xl"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4 className="font-bold">Loja Física</h4>
                  <p className="text-gray-600">Av. Vila Matias 198 - Jardim Santa Rita, Guarulhos - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-custom text-white p-3 rounded-xl"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <a href={whatsappLink} className="text-gray-600">(11) 98018-3198</a>
                </div>
              </div>
            </div>
            <div className="mt-10">
               <a href={whatsappLink} className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-custom transition-all">Conversar pelo WhatsApp</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-custom rounded-[2.5rem]"></div>
            <img 
              src={SITE_ASSETS.STORE_FRONT} 
              alt="Loja CK" 
              className="relative z-10 w-full object-cover rounded-[2rem] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-white/5">
        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold brand-font mb-4">CK <span className="text-pink-custom">FASHION</span></h2>
            <p className="text-gray-500 text-sm">Moda feminina sofisticada com atitude.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-pink-custom">Shopping</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#home">Início</a></li>
              <li><a href="#colecao">Coleção</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-pink-custom">Suporte</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#">Trocas</a></li>
              <li><a href="#">Medidas</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
          <p>© 2026 CK Fashion Store. Guarulhos, SP.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl animate-float z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
