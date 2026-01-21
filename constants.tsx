
import { Product, Review, FAQItem } from './types';

/**
 * COLOQUE SEUS LINKS DE IMAGENS AQUI
 * A pasta 'assets' deve estar na raiz do seu projeto (ao lado do index.html)
 */
export const SITE_ASSETS = {
  LOGO: "assets/logo/logo.jpg",
  HERO_BANNER: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
  EXCLUSIVITY_IMAGE: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/unica.png",
  STORE_FRONT: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/Gemini_Generated_Image_v5oiqnv5oiqnv5oi.png",
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Look 01", price: 0, originalPrice: 0, tag: "Mais Vendido", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/001.png" },
  { id: 2, name: "Look 02", price: 0, originalPrice: 0, tag: "Edição Limitada", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/002.png" },
  { id: 3, name: "Look 03", price: 0, originalPrice: 0, tag: "Exclusivo", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/003.png" },
  { id: 4, name: "Look 04", price: 0, originalPrice: 0, tag: "Novo", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/004.png" },
  { id: 5, name: "Look 05", price: 0, originalPrice: 0, tag: "Oferta", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/005.png" },
  { id: 6, name: "Look 06", price: 0, originalPrice: 0, tag: "Destaque", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/006.png" }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Mariana Silva", comment: "Simplesmente apaixonada! O tecido é de uma qualidade absurda. Chegou muito rápido aqui em BH.", rating: 5, location: "Belo Horizonte, MG", image: "" },
  { id: 2, name: "Beatriz Oliveira", comment: "Comprei o vestido para um casamento e nunca recebi tantos elogios. A CK Fashion arrasou!", rating: 5, location: "Guarulhos, SP", image: "" },
  { id: 3, name: "Carla Mendes", comment: "O atendimento pelo WhatsApp é maravilhoso. Me ajudaram com o tamanho e serviu perfeitamente.", rating: 5, location: "Rio de Janeiro, RJ", image: "" }
];

export const FAQS: FAQItem[] = [
  { question: "Qual o prazo de entrega?", answer: "Enviamos para todo o Brasil via Correios ou Transportadora. O prazo varia de 3 a 10 dias úteis dependendo da sua região." },
  { question: "Como funciona a troca?", answer: "Você tem até 7 dias após o recebimento para solicitar a troca através do nosso WhatsApp oficial. Nossa equipe dará todo o suporte necessário." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos Cartão de Crédito (até 12x), Boleto Bancário e PIX com 5% de desconto extra!" },
  { question: "Onde fica a loja física?", answer: "Estamos localizados na Av. Vila Matias 198 - Jardim Santa Rita, Guarulhos - SP. Venha nos visitar!" }
];
