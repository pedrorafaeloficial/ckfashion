
import { Product, Review, FAQItem } from './types.ts';

export const SITE_ASSETS = {
  LOGO: "assets/logo/logo.jpg",
  HERO_BANNER: "assets/banners/hero.jpg",
  SECTION_EXCLUSIVITY: "assets/institucional/unica.webp",
  STORE_FRONT: "assets/institucional/fachada.webp",
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Vestido Noite Luxury", price: 0, originalPrice: 0, tag: "Mais Vendido", image: "assets/produtos/001.webp" },
  { id: 2, name: "Conjunto Pink Power", price: 0, originalPrice: 0, tag: "Edição Limitada", image: "assets/produtos/002.webp" },
  { id: 3, name: "Blazer Alfaiataria Black", price: 0, originalPrice: 0, tag: "Exclusivo", image: "assets/produtos/003.webp" },
  { id: 4, name: "Body Glamour", price: 0, originalPrice: 0, tag: "Novo", image: "assets/produtos/004.webp" },
  { id: 5, name: "Saia Couro Eco", price: 0, originalPrice: 0, tag: "Destaque", image: "assets/produtos/005.webp" },
  { id: 6, name: "Macacão Noite", price: 0, originalPrice: 0, tag: "Últimas Peças", image: "assets/produtos/006.webp" }
];

export const FAQS: FAQItem[] = [
  { question: "Qual o prazo de entrega?", answer: "Enviamos para todo o Brasil. O prazo varia de 3 a 10 dias úteis." },
  { question: "Como funciona a troca?", answer: "Você tem até 7 dias para solicitar a troca via WhatsApp." }
];
