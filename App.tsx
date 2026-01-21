
import React, { useState, useEffect } from 'react';
import { PRODUCTS, REVIEWS, FAQS } from './constants';
import { Product, Review, FAQItem } from './types';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/5511980183198?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20mais%20peças.";
  const instagramLink = "https://www.instagram.com/ck.fashionstore_/";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 py-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://agenciafoxon.com.br/wp-content/uploads/2026/01/477162718_18060193580505433_2477155082232626958_n.jpg" 
            alt="CK Fashion Logo" 
            className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-pink-custom object-cover shadow-[0_0_20px_rgba(255,20,147,0.4)]"
          />
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
            Sua <span className="border-b-4 border-pink-custom">Poder</span>.
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

      {/* Gatilhos Mentais / Vantagens */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-truck-fast"></i></div>
              <h4 className="font-bold text-lg">Entrega Nacional</h4>
              <p className="text-sm text-gray-500 font-medium">Enviamos para todo Brasil</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-shield-halved"></i></div>
              <h4 className="font-bold text-lg">Compra Segura</h4>
              <p className="text-sm text-gray-500 font-medium">Dados 100% protegidos</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-rotate"></i></div>
              <h4 className="font-bold text-lg">Troca Facilitada</h4>
              <p className="text-sm text-gray-500 font-medium">7 dias para trocar</p>
            </div>
            <div className="text-center group">
              <div className="text-pink-custom text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><i className="fas fa-gem"></i></div>
              <h4 className="font-bold text-lg">Premium Quality</h4>
              <p className="text-sm text-gray-500 font-medium">Curadoria exclusiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="colecao" className="py-24 px-4 md:px-12 bg-black">
        <div className="text-center mb-16">
          <span className="text-pink-custom font-bold uppercase tracking-[0.4em] text-xs">Coleção 2026</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 brand-font">Desejos da <span className="text-pink-custom italic">Temporada</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">Elegância em cada costura. Selecionamos as peças mais desejadas para você brilhar.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt="Peça de Coleção" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-5 left-5 bg-pink-custom text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a 
                    href={whatsappLink}
                    className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-pink-custom hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 shadow-2xl"
                  >
                    Eu quero este look!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href={whatsappLink} className="inline-block bg-transparent border-2 border-pink-custom text-pink-custom hover:bg-pink-custom hover:text-white px-12 py-5 rounded-full font-black transition-all text-lg uppercase tracking-widest">
            Quero ver mais modelos
          </a>
        </div>
      </section>

      {/* Prova Social / Reviews */}
      <section id="depoimentos" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold brand-font mb-4">Experiência <span className="text-pink-custom">CK</span></h2>
            <div className="flex justify-center gap-1 text-pink-custom text-2xl mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-500 font-medium">O que nossas clientes estão postando sobre nós</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-zinc-900/50 p-8 rounded-[2rem] border border-white/5 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-pink-custom/10 border border-pink-custom/30 flex items-center justify-center text-pink-custom">
                    <i className="fas fa-user text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{review.name}</h4>
                    <p className="text-xs text-pink-custom font-bold uppercase tracking-wider">{review.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex gap-1 text-pink-custom text-[10px]">
                  {[...Array(review.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
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
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <i className={`fas fa-plus transition-transform duration-300 ${activeFaq === idx ? 'rotate-45 text-pink-custom' : ''}`}></i>
                </button>
                {activeFaq === idx && (
                  <div className="p-8 pt-0 text-gray-400 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização & Contato */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold brand-font mb-8">Nossa <span className="text-pink-custom">Maison</span></h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-pink-custom text-white p-4 rounded-2xl text-xl shadow-lg shadow-pink-200"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Visite nosso espaço</h4>
                  <p className="text-gray-600 font-medium">Av. Vila Matias 198 - Jardim Santa Rita<br/>Guarulhos - SP, 07172-440</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-pink-custom text-white p-4 rounded-2xl text-xl shadow-lg shadow-pink-200"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Whatsapp</h4>
                  <a href={whatsappLink} className="text-gray-600 font-medium hover:text-pink-custom transition-colors">(11) 98018-3198</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-pink-custom text-white p-4 rounded-2xl text-xl shadow-lg shadow-pink-200"><i className="fab fa-instagram"></i></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Nossa loja</h4>
                  <a href={instagramLink} target="_blank" rel="noopener" className="text-gray-600 font-medium hover:text-pink-custom transition-colors">@ck.fashionstore_</a>
                </div>
              </div>
            </div>
            <div className="mt-12">
               <a href={whatsappLink} className="bg-black text-white px-10 py-5 rounded-2xl font-black hover:bg-pink-custom transition-all inline-block uppercase tracking-widest shadow-xl">Falar com Consultora</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-pink-custom rounded-[3rem] z-0"></div>
            <img 
              src="https://agenciafoxon.com.br/wp-content/uploads/2026/01/Gemini_Generated_Image_v5oiqnv5oiqnv5oi.png" 
              alt="Fachada da Loja CK Fashion" 
              className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 md:px-12 border-t border-white/5">
        <div className="container mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold brand-font mb-6 tracking-tighter">CK <span className="text-pink-custom">FASHION</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Elevando a autoestima feminina através da moda. Luxo, atitude e elegância em cada detalhe.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em] text-pink-custom">Shopping</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Nova Coleção</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href={whatsappLink} className="hover:text-white transition-colors">Atendimento</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em] text-pink-custom">Suporte</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Medidas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prazos de Envio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em] text-pink-custom">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6 font-light">Seja a primeira a saber dos lançamentos e receba mimos exclusivos.</p>
            <div className="flex border-b border-white/20 pb-2 focus-within:border-pink-custom transition-colors">
              <input type="email" placeholder="Seu e-mail" className="bg-transparent px-2 py-1 w-full focus:outline-none text-white font-light" />
              <button className="text-pink-custom font-bold hover:text-white transition-colors px-2">JOIN</button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest font-medium">
          <p>© 2026 CK Fashion Store. Design for high conversion. Made with ❤️ in Guarulhos.</p>
          <div className="mt-6 flex justify-center gap-8 text-xl opacity-30 grayscale hover:grayscale-0 transition-all">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fas fa-barcode"></i>
            <i className="fas fa-pix"></i>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-50">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener" 
          className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all animate-float"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
