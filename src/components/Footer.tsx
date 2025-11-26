import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">IMAGINARE HUB</h3>
            <p className="text-neutral-400 text-sm">Transformando ideias em realidade através da criatividade e inovação.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Páginas</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/" className="hover:text-accent-400 transition">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-accent-400 transition">Sobre Nós</Link></li>
              <li><Link to="/colaboradores" className="hover:text-accent-400 transition">Colaboradores</Link></li>
              <li><Link to="/contatos" className="hover:text-accent-400 transition">Contatos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Suporte</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/formulario" className="hover:text-accent-400 transition">Novo Projeto</Link></li>
              <li><Link to="/termos" className="hover:text-accent-400 transition">Termos de Uso</Link></li>
              <li><a href="#" className="hover:text-accent-400 transition">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-300">Contato</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex gap-2"><Mail size={16} className="text-accent-400" /> contato@imaginare.com</li>
              <li className="flex gap-2"><Phone size={16} className="text-accent-400" /> (11) 99999-9999</li>
              <li className="flex gap-2"><MapPin size={16} className="text-accent-400" /> São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-sm text-neutral-500">
            &copy; 2024 IMAGINARE HUB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
