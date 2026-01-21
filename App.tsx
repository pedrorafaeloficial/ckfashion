
import React, { useState } from 'react';
import { PRODUCTS, FAQS, SITE_ASSETS } from './constants.tsx';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const whatsappLink = "https://wa.me/5511980183198?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20mais%20peças.";
  const instagramLink = "https://www.instagram.com/ck.fashionstore_/";

  const pokeAFriend = () => {
    const text = encodeURIComponent(`Olha os looks dessa loja aqui! Como eu gostaria de um presente da CK Fashion! 😂 https://www.instagram.com/ck.fashionstore_/`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-600 selection:text-white overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-[#FF1493] text-white text-[10px] md:text-xs py-2 text-center font-bold tracking-[0.2em] uppercase px-4">
        📦 Enviamos para todo o Brasil • 5% OFF no PIX
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-10 w-10 md:h-14 md:w-14 rounded-full border border-[#FF1493]/50 overflow-hidden bg-zinc-900">
            <img 
              src={SITE_ASSETS.LOGO} 
              alt="CK Fashion Logo" 
              className="w-full h-full object-cover"
              // Fix: Cast EventTarget to HTMLImageElement to access .src
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/000000/FF1493?text=CK'; }}
            />
          </div>
          <h1 className="text-lg md:text-2xl font-bold brand-font text-white tracking-tighter">
            CK <span className="text-[#FF1493]">FASHION</span>
          </h1>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#home" className="hover:text-[#FF1493] transition-colors">Início</a>
          <a href="#colecao" className="hover:text-[#FF1493] transition-colors">Coleção</a>
          <a href="#sobre" className="hover:text-[#FF1493] transition-colors">A Loja</a>
          <a href="#faq" className="hover:text-[#FF1493] transition-colors">Suporte</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href={instagramLink} target="_blank" rel="noopener" className="text-xl hover:text-[#FF1493] transition-all hover:scale-110">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener" className="bg-[#FF1493] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-pink-700 transition-all flex items-center gap-2">
            <i className="fab fa-whatsapp"></i> <span className="hidden sm:inline">CONTATO</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] md:h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={SITE_ASSETS.HERO_BANNER} 
            alt="Hero CK Fashion" 
            className="w-full h-full object-cover opacity-50"
            // Fix: Cast EventTarget to HTMLImageElement to access .src
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <span className="inline-block text-[#FF1493] font-bold tracking-[0.4em] text-xs mb-4">NEW COLLECTION 2024</span>
          <h2 className="text-5xl md:text-9xl font-bold mb-8 brand-font leading-tight drop-shadow-2xl">
            Sua <span className="text-[#FF1493] italic">Essência</span>,<br className="hidden md:block"/>
            Seu <span className="underline decoration-[#FF1493] decoration-4 underline-offset-8">Poder</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#colecao" className="w-full sm:w-auto bg-white text-black hover:bg-[#FF1493] hover:text-white px-12 py-5 rounded-full font-black transition-all transform hover:scale-105 uppercase tracking-widest text-sm shadow-xl">
              Explorar Looks
            </a>
          </div>
        </div>
      </section>

      {/* Coleção Section */}
      <section id="colecao" className="py-24 px-6 md:px-12 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold brand-font">Nossa <span className="text-[#FF1493]">Coleção</span></h2>
          <p className="text-gray-400 mt-4">Peças exclusivas selecionadas para você.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-[#FF1493]/50">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  // Fix: Cast EventTarget to HTMLImageElement to access .src
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/222222/FF1493?text=Ver+Peça'; }}
                />
                <div className="absolute top-4 left-4 bg-black/80 text-[#FF1493] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {product.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <a href={whatsappLink} className="block w-full text-center bg-[#FF1493] py-3 rounded-xl font-bold text-sm hover:bg-pink-600 transition-colors">
                  CONSULTAR PREÇO
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-xs">
        <p>© 2024 CK FASHION STORE. TODOS OS DIREITOS RESERVADOS.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink} 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg z-50 animate-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
