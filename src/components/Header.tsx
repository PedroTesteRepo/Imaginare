import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Made with insMind-Logo_ImaginareHub_Oficial.png"
              alt="IMAGINARE HUB"
              className="h-12 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-neutral-700 hover:text-primary-600 font-medium transition">Home</Link>
            <Link to="/sobre" className="text-neutral-700 hover:text-primary-600 font-medium transition">Sobre</Link>
            <Link to="/colaboradores" className="text-neutral-700 hover:text-primary-600 font-medium transition">Colaboradores</Link>
            <Link to="/contatos" className="text-neutral-700 hover:text-primary-600 font-medium transition">Contatos</Link>
            <Link to="/formulario" className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition">
              Novo Projeto
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 border-t border-neutral-200 pt-4 space-y-3">
            <Link to="/" className="block text-neutral-700 hover:text-primary-600 font-medium transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/sobre" className="block text-neutral-700 hover:text-primary-600 font-medium transition" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link to="/colaboradores" className="block text-neutral-700 hover:text-primary-600 font-medium transition" onClick={() => setIsOpen(false)}>Colaboradores</Link>
            <Link to="/contatos" className="block text-neutral-700 hover:text-primary-600 font-medium transition" onClick={() => setIsOpen(false)}>Contatos</Link>
            <Link to="/formulario" className="block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-lg font-medium text-center" onClick={() => setIsOpen(false)}>
              Novo Projeto
            </Link>
            <Link to="/termos" className="block text-neutral-600 text-sm hover:text-primary-600 transition" onClick={() => setIsOpen(false)}>Termos de Uso</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
