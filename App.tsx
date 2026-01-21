
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
          <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-pink-custom overflow-hidden shadow-[0_0_20px_rgba(255,20,147,0.4)] flex items-center justify-center bg-black">
            <img 
              src={SITE_ASSETS.LOGO} 
              alt="CK Fashion Logo" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/000000/FF1493?text=CK'; }}
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
            className="w-full h-full object-cover opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070'; }}
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
            <a href="#colecao" className="bg-pink-custom hover:bg-pink-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(255,20,147,0.5)] uppercase tracking-wider text-center">
              Ver Coleção Completa
            </a>
            <a href={whatsappLink} className="bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider">
              <i className="fab fa-whatsapp text-xl"></i> Chamar no Whats
            </a>
          </div>
        </div>
      </section>

      {/* Seção Exclusividade */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <img 
                src={SITE_ASSETS.SECTION_EXCLUSIVITY} 
                alt="Exclusividade CK" 
                className="rounded-2xl shadow-2xl border border-white/10 relative z-10 w-full object-cover aspect-[4/5]"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070'; }}
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-custom p-8 rounded-2xl shadow-2xl z-20 max-w-[200px] text-center hidden md:block">
                <span className="text-3xl font-bold block mb-1">ÚNICA</span>
                <span className="text-[10px] uppercase tracking-widest font-black leading-none text-white">Exclusividade CK</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-pink-custom font-black uppercase tracking-[0.3em] text-xs">A Melhor Curadoria</span>
              <h2 className="text-4xl md:text-6xl font-bold brand-font leading-[1.1]">
                Onde a <span className="text-pink-custom italic">Elegância</span> encontra a <span className="text-pink-custom">Atitude</span>.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Não somos apenas uma loja, somos o seu próximo destino de confiança. Cada peça em nossa coleção é escolhida a dedo para garantir que você se sinta poderosa e exclusiva em qualquer ocasião.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-custom/20 flex items-center justify-center text-pink-custom"><i className="fas fa-check"></i></div>
                  <p className="font-medium">Looks Exclusivos</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-custom/20 flex items-center justify-center text-pink-custom"><i className="fas fa-check"></i></div>
                  <p className="font-medium">Qualidade Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vitrine de Produtos */}
      <section id="colecao" className="py-24 px-4 md:px-12">
        <div className="text-center mb-16">
          <span className="text-pink-custom font-bold uppercase tracking-[0.4em] text-xs">Drop Atual</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 brand-font">Desejos da <span className="text-pink-custom italic">Temporada</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/222222/FF1493?text=Ver+No+WhatsApp'; }}
                />
                <div className="absolute top-5 left-5 bg-pink-custom text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                  <a href={whatsappLink} className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-pink-custom hover:text-white transition-all">
                    Eu quero!
                  </a>
                  <button onClick={pokeAFriend} className="bg-pink-custom text-white px-6 py-2.5 rounded-full font-bold text-xs">
                    <i className="fab fa-whatsapp mr-2"></i> Cutuque um amigo!
                  </button>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-lg mb-1">{product.name}</h4>
                <p className="text-pink-custom text-sm font-semibold">Consulte Tamanhos</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-zinc-950 px-4">
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
                  <i className={`fas fa-chevron-down transition-transform ${activeFaq === idx ? 'rotate-180 text-pink-custom' : ''}`}></i>
                </button>
                {activeFaq === idx && (
                  <div className="p-6 pt-0 text-gray-400 animate-fadeIn">
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
            <h2 className="text-4xl font-bold brand-font mb-8">Nossa <span className="text-pink-custom">Loja</span></h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-custom text-white p-3 rounded-xl"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p className="text-gray-600">Av. Vila Matias 198 - Jardim Santa Rita, Guarulhos - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-custom text-white p-3 rounded-xl"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <h4 className="font-bold">WhatsApp de Vendas</h4>
                  <a href={whatsappLink} className="text-gray-600">(11) 98018-3198</a>
                </div>
              </div>
            </div>
            <a href={whatsappLink} className="mt-10 inline-block bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-custom transition-all">Ver no Google Maps</a>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-custom rounded-[2.5rem]"></div>
            <img 
              src={SITE_ASSETS.STORE_FRONT} 
              alt="Fachada CK Fashion" 
              className="relative z-10 w-full object-cover rounded-[2rem] shadow-xl aspect-video"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'; }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-white/5 text-center">
        <div className="h-16 w-16 mx-auto rounded-full border border-pink-custom mb-6 overflow-hidden bg-black">
           <img src={SITE_ASSETS.LOGO} alt="CK" className="w-full h-full object-cover" />
        </div>
        <h3 className="brand-font text-2xl mb-2">CK <span className="text-pink-custom">FASHION STORE</span></h3>
        <p className="text-gray-500 text-sm mb-8 italic">Onde o preto encontra o rosa e o estilo encontra você.</p>
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          <a href={instagramLink} target="_blank" className="hover:text-pink-custom"><i className="fab fa-instagram"></i></a>
          <a href={whatsappLink} target="_blank" className="hover:text-pink-custom"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="text-[10px] text-gray-700 uppercase tracking-widest">© 2026 CK FASHION STORE - CNPJ EM BREVE - GUARULHOS/SP</p>
      </footer>

      {/* WhatsApp Flutuante */}
      <a 
        href={whatsappLink} 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50 animate-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
