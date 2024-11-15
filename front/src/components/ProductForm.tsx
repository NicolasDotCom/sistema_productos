import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Product } from '../types/product';
import toast from 'react-hot-toast';

interface ProductFormProps {
  onSubmit: (product: Product) => Promise<void>;
}

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>({
    nombre: '',
    codigo: '',
    inventario: 0,
    marca: '',
    valor: 0,
    estado: 1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      setFormData({
        nombre: '',
        codigo: '',
        inventario: 0,
        marca: '',
        valor: 0,
        estado: 1
      });
      toast.success('Producto agregado exitosamente');
    } catch (error) {
      toast.error('Error al agregar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Agregar Nuevo Producto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Código</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.codigo}
            onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Inventario</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.inventario}
            onChange={(e) => setFormData({ ...formData, inventario: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marca</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.marca}
            onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Valor</label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.valor}
            onChange={(e) => setFormData({ ...formData, valor: parseFloat(e.target.value) })}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar Producto
        </button>
      </div>
    </form>
  );
}