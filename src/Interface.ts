export interface Product {
  title: string;
  price: string;
  id: number;
  description: string;
  category: string;
  image: string;
}

export interface Cart extends Product {
  count: number;
}
