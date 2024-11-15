export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sistema de Gestión de Productos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}