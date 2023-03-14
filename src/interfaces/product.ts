export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface Order extends Product{
  orderId?: number;
}