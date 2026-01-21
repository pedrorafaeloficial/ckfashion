
import { Product, Review, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: "Vestido Glamour Noir", price: 189.90, originalPrice: 259.90, tag: "Mais Vendido", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/001.png" },
  { id: 2, name: "Conjunto Pink Velvet", price: 229.90, originalPrice: 299.90, tag: "Edição Limitada", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/002.png" },
  { id: 3, name: "Blazer Executive White", price: 349.90, originalPrice: 450.00, tag: "Exclusivo", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/003.png" },
  { id: 4, name: "Saia Midi Rosé", price: 159.90, originalPrice: 199.90, tag: "Novo", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/004.png" },
  { id: 5, name: "Look Chic Day", price: 129.90, originalPrice: 179.90, tag: "Oferta", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/005.png" },
  { id: 6, name: "Calça Pantalona Lux", price: 210.00, originalPrice: 280.00, tag: "Destaque", image: "https://agenciafoxon.com.br/wp-content/uploads/2026/01/006.png" }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Mariana Silva", comment: "Simplesmente apaixonada! O tecido é de uma qualidade absurda. Chegou muito rápido aqui em BH.", rating: 5, location: "Belo Horizonte, MG", image: "" },
  { id: 2, name: "Beatriz Oliveira", comment: "Comprei o vestido para um casamento e nunca recebi tantos elogios. A CK Fashion arrasou!", rating: 5, location: "Guarulhos, SP", image: "" },
  { id: 3, name: "Carla Mendes", comment: "O atendimento pelo WhatsApp é maravilhoso. Me ajudaram com o tamanho e serviu perfeitamente.", rating: 5, location: "Rio de Janeiro, RJ", image: "" },
  { id: 4, name: "Fernanda Costa", comment: "Estava com medo de comprar online, mas a experiência foi nota 10. Vou comprar sempre!", rating: 5, location: "Curitiba, PR", image: "" },
  { id: 5, name: "Juliana Santos", comment: "A embalagem veio cheirosa, os detalhes mostram o carinho da loja com a cliente.", rating: 5, location: "São Paulo, SP", image: "" },
  { id: 6, name: "Patrícia Lima", comment: "O conjunto rosa é mais lindo ainda pessoalmente. A cor é vibrante e o corte perfeito.", rating: 5, location: "Salvador, BA", image: "" },
  { id: 7, name: "Amanda Rocha", comment: "Amei o caimento das roupas. Valoriza muito o corpo! Entrega super rápida.", rating: 5, location: "Fortaleza, CE", image: "" },
  { id: 8, name: "Gisele Nunes", comment: "Tudo impecável. Desde o site até a chegada do produto. Parabéns equipe CK!", rating: 5, location: "Porto Alegre, RS", image: "" },
  { id: 9, name: "Larissa Fernandes", comment: "Melhor loja de moda feminina de Guarulhos e agora do Brasil todo! Recomendo muito.", rating: 5, location: "Brasília, DF", image: "" }
];

export const FAQS: FAQItem[] = [
  { question: "Qual o prazo de entrega?", answer: "Enviamos para todo o Brasil via Correios ou Transportadora. O prazo varia de 3 a 10 dias úteis dependendo da sua região." },
  { question: "Como funciona a troca?", answer: "Sua primeira troca é grátis! Você tem até 7 dias após o recebimento para solicitar através do nosso WhatsApp." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos Cartão de Crédito (até 12x), Boleto Bancário e PIX com 5% de desconto extra!" },
  { question: "O site é seguro?", answer: "Sim! Utilizamos tecnologia SSL e intermediadores de pagamento seguros para garantir total proteção dos seus dados." },
  { question: "Onde fica a loja física?", answer: "Estamos localizados na Av. Vila Matias 198 - Jardim Santa Rita, Guarulhos - SP. Venha nos visitar!" }
];
