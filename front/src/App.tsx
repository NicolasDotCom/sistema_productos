import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import EditModal from './components/EditModal';
import type { Product } from './types/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = async (product: Product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    toast.success('Producto actualizado exitosamente');
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, estado: 0 } : p
    ).filter(p => p.estado === 1));
    toast.success('Producto eliminado exitosamente');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toaster position="top-right" />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductForm onSubmit={handleAddProduct} />
        <ProductTable 
          products={products.filter(p => p.estado === 1)}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
        <EditModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSaveEdit}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;