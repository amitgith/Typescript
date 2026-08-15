// category
// description
// id
// image
// price
// rating
// title

export interface Product {
  product: string;
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
