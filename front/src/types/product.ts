export interface Product {
  id?: number;
  nombre: string;
  codigo: string;
  inventario: number;
  marca: string;
  valor: number;
  estado: number;
  created_at?: string;
  updated_at?: string;
}