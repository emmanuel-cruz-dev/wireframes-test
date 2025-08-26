export interface Product {
  id: number;
  name: string;
  category: string;
  amount: number;
  sellPrice: number;
  weigth: number; // weight está mal escrito, viene así de la base de datos
  buyDate: string;
  expiration: string;
  supplierNames: string[];
}
