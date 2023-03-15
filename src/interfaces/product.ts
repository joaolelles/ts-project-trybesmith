export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface OrderP extends Product{
  orderId?: number;
}