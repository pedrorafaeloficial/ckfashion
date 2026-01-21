
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  tag: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  image: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
