
import React, { useState } from 'react';
import { PRODUCTS, FAQS, SITE_ASSETS } from './constants';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/5511980183198?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20mais%20peças.";
  const instagramLink = "https://www.instagram.com/ck.fashionstore_/";

  const pokeAFriend = () => {
    const text = encodeURIComponent(`Olha os looks dessa loja aqui! Como eu gostaria de um presente da CK Fashion! 😂 https://www.instagram.com/ck.fashionstore_/`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-600 selection:text-white overflow-x-hidden">
      {/* Top Banner - Urgency */}
      <div className="bg-pink-custom text-white text-[10px] md:text-xs py-2 text-center font-bold tracking-[0.2em] uppercase px-4">
        📦 Enviamos para todo o Brasil • 5% OFF no PIX
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5 px-4 py-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-10 w-10 md:h-14 md:w-14 rounded-full border border-pink-custom/50 overflow-hidden bg-zinc-900">
            <img 
              src={SITE_ASSETS.LOGO} 
              alt="CK Fashion Logo" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/000000/FF1493?text=CK'; }}
            />
          </div>
          <h1 className="text-lg md:text-2xl font-bold brand-font text-white tracking-tighter">
            CK <span className="text-pink-custom">FASHION</span>
          </h1>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#home" className="hover:text-pink-custom transition-colors">Início</a>
          <a href="#colecao" className="hover:text-pink-custom transition-colors">Coleção</a>
          <a href="#sobre" className="hover:text-pink-custom transition-colors">A Loja</a>
          <a href="#faq" className="hover:text-pink-custom transition-colors">Suporte</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href={instagramLink} target="_blank" rel="noopener" className="text-xl hover:text-pink-custom transition-all hover:scale-110">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener" className="bg-pink-custom text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-pink-700 transition-all flex items-center gap-2">
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
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <span className="inline-block text-pink-custom font-bold tracking-[0.4em] text-xs mb-4 animate-fadeIn">NEW COLLECTION 2024</span>
          <h2 className="text-5xl md:text-9xl font-bold mb-8 brand-font leading-tight drop-shadow-2xl">
            Sua <span className="text-pink-custom italic">Essência</span>,<br className="hidden md:block"/>
            Seu <span className="underline decoration-pink-custom decoration-4 underline-offset-8">Poder</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#colecao" className="w-full sm:w-auto bg-white text-black hover:bg-pink-custom hover:text-white px-12 py-5 rounded-full font-black transition-all transform hover:scale-105 uppercase tracking-widest text-sm shadow-xl">
              Explorar Looks
            </a>
          </div>
        </div>
      </section>

      {/* Exclusividade Section */}
      <section id="sobre" className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-pink-custom/20 rounded-2xl blur-2xl group-hover:bg-pink-custom/30 transition-all"></div>
              <img 
                src={SITE_ASSETS.SECTION_EXCLUSIVITY} 
                alt="Mulher Única CK" 
                className="relative rounded-2xl border border-white/10 w-full object-cover aspect-[4/5] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070'; }}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <span className="text-pink-custom font-black uppercase tracking-[0.4em] text-[10px] border-l-2 border-pink-custom pl-4">Manifesto CK</span>
                <h2 className="text-4xl md:text-7xl font-bold brand-font leading-[1.1]">
                  Feito para quem <span className="text-pink-custom">não aceita</span> o comum.
                </h2>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed font-light italic">
                "Nossa missão é vestir a sua confiança. Na CK Fashion, cada detalhe é pensado para destacar a mulher poderosa que você já é."
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h3 className="text-pink-custom font-bold text-3xl mb-1">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Curadoria Premium</p>
                </div>
                <div>
                  <h3 className="text-pink-custom font-bold text-3xl mb-1">+5k</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Clientes Felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section id="colecao" className="py-24 px-6 md:px-12 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-pink-custom font-bold uppercase tracking-[0.4em] text-[10px]">Must Have</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 brand-font">Destaques <span className="text-pink-custom italic">CK</span></h2>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">Toque na imagem para ver detalhes ou solicitar via WhatsApp.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[3/4] border border-white/5 shadow-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/222222/FF1493?text=Ver+No+WhatsApp'; }}
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-pink-custom/30 text-pink-custom text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                    {product.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8 gap-4">
                    <a href={whatsappLink} className="w-full bg-pink-custom text-white py-4 rounded-xl font-bold hover:bg-pink-600 transition-all text-center shadow-lg">
                      EU QUERO ESSA PEÇA
                    </a>
                    <button onClick={pokeAFriend} className="text-white text-[10px] uppercase font-bold tracking-widest hover:text-pink-custom transition-colors">
                      <i className="fab fa-whatsapp mr-1"></i> Cutucar alguém (Presente)
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-xl mb-1 tracking-tight">{product.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-custom"></span>
                    <span className="text-gray-500 text-xs uppercase tracking-[0.2em]">Disponível sob consulta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Localização */}
      <section id="faq" className="py-24 bg-black px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-pink-custom font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Concierge</span>
            <h2 className="text-4xl md:text-5xl font-bold brand-font mb-12">Dúvidas <br/> <span className="text-pink-custom italic">Frequentes</span></h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10">
                  <button 
                    className="w-full text-left py-6 flex justify-between items-center group"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className={`font-medium transition-colors ${activeFaq === idx ? 'text-pink-custom' : 'group-hover:text-pink-custom'}`}>{faq.question}</span>
                    <i className={`fas fa-plus transition-transform ${activeFaq === idx ? 'rotate-45 text-pink-custom' : ''}`}></i>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-custom/10 blur-[80px]"></div>
            <h3 className="text-3xl font-bold brand-font mb-8">Nossa <span className="text-pink-custom italic">Loja Física</span></h3>
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl aspect-video border border-white/10 group">
               <img 
                src={SITE_ASSETS.STORE_FRONT} 
                alt="Fachada CK" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'; }}
              />
            </div>
            <div className="space-y-6">
              <p className="flex items-center gap-4 text-gray-300">
                <i className="fas fa-location-dot text-pink-custom"></i> 
                Av. Vila Matias 198 - Jd. Santa Rita, Guarulhos/SP
              </p>
              <p className="flex items-center gap-4 text-gray-300">
                <i className="fas fa-clock text-pink-custom"></i> 
                Segunda a Sábado: 09h às 19h
              </p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              className="mt-10 block w-full bg-white text-black py-4 rounded-xl font-black text-center text-xs tracking-[0.2em] hover:bg-pink-custom hover:text-white transition-all uppercase"
            >
              Traçar Rota no Waze / Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="h-20 w-20 rounded-full border border-pink-custom/30 p-1 mb-6">
              <img src={SITE_ASSETS.LOGO} alt="CK Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="brand-font text-3xl font-bold tracking-tighter mb-2">
              CK <span className="text-pink-custom">FASHION STORE</span>
            </h3>
            <div className="h-1 w-12 bg-pink-custom mb-6"></div>
            <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
              Elevando sua autoestima através da moda sofisticada em Guarulhos e para todo o Brasil.
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={instagramLink} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-pink-custom hover:border-pink-custom transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={whatsappLink} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-pink-custom hover:border-pink-custom transition-all">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
            <p>© 2024 CK FASHION STORE - TODOS OS DIREITOS RESERVADOS</p>
            <div className="flex gap-8">
              <span>CNPJ: EM BREVE</span>
              <span>DESIGN BY CK</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink} 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_40px_rgba(37,211,102,0.4)] z-50 animate-float hover:scale-110 transition-transform"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
