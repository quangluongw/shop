export type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: string;
  reviews: number;
  rating: number;
  category: string;
  description?: string;
  stock?: number;
};
