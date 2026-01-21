
import { Product, Review, FAQItem } from './types';

/**
 * BANCO DE DADOS DE IMAGENS (ASSETS)
 * ---------------------------------
 * Caminhos atualizados para os novos formatos fornecidos pelo usuário (.webp e .jpg).
 */
export const SITE_ASSETS = {
  LOGO: "assets/logo/logo.jpg",
  HERO_BANNER: "assets/banners/hero.jpg",
  SECTION_EXCLUSIVITY: "assets/institucional/unica.webp",
  STORE_FRONT: "assets/institucional/fachada.webp",
};

/**
 * BANCO DE DADOS DE PRODUTOS
 * --------------------------
 * As imagens estão mapeadas de 001.webp até 006.webp na pasta assets/produtos/
 */
export const PRODUCTS: Product[] = [
  { id: 1, name: "Vestido Noite Luxury", price: 0, originalPrice: 0, tag: "Mais Vendido", image: "assets/produtos/001.webp" },
  { id: 2, name: "Conjunto Pink Power", price: 0, originalPrice: 0, tag: "Edição Limitada", image: "assets/produtos/002.webp" },
  { id: 3, name: "Blazer Alfaiataria Black", price: 0, originalPrice: 0, tag: "Exclusivo", image: "assets/produtos/003.webp" },
  { id: 4, name: "Body Glamour", price: 0, originalPrice: 0, tag: "Novo", image: "assets/produtos/004.webp" },
  { id: 5, name: "Saia Couro Eco", price: 0, originalPrice: 0, tag: "Destaque", image: "assets/produtos/005.webp" },
  { id: 6, name: "Macacão Noite", price: 0, originalPrice: 0, tag: "Últimas Peças", image: "assets/produtos/006.webp" }
];

/**
 * DEPOIMENTOS DE CLIENTES
 */
export const REVIEWS: Review[] = [
  { id: 1, name: "Mariana Silva", comment: "Simplesmente apaixonada! O tecido é de uma qualidade absurda. Chegou muito rápido aqui em BH.", rating: 5, location: "Belo Horizonte, MG", image: "" },
  { id: 2, name: "Beatriz Oliveira", comment: "Comprei o vestido para um casamento e nunca recebi tantos elogios. A CK Fashion arrasou!", rating: 5, location: "Guarulhos, SP", image: "" },
  { id: 3, name: "Carla Mendes", comment: "O atendimento pelo WhatsApp é maravilhoso. Me ajudaram com o tamanho e serviu perfeitamente.", rating: 5, location: "Rio de Janeiro, RJ", image: "" }
];

/**
 * FAQ - PERGUNTAS FREQUENTES
 */
export const FAQS: FAQItem[] = [
  { question: "Qual o prazo de entrega?", answer: "Enviamos para todo o Brasil via Correios ou Transportadora. O prazo varia de 3 a 10 dias úteis dependendo da sua região." },
  { question: "Como funciona a troca?", answer: "Você tem até 7 dias após o recebimento para solicitar a troca através do nosso WhatsApp oficial." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos Cartão de Crédito (até 12x), Boleto Bancário e PIX com 5% de desconto extra!" },
  { question: "Onde fica a loja física?", answer: "Estamos localizados na Av. Vila Matias 198 - Jardim Santa Rita, Guarulhos - SP. Venha nos visitar!" }
];
