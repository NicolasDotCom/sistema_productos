import { Package } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="font-semibold text-xl">Sistema de Productos</span>
          </div>
        </div>
      </div>
    </nav>
  );
}