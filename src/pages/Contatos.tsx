import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contatos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-neutral-100">Estamos aqui para ajudar e transformar suas ideias</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Informações de Contato</h2>
              <p className="text-neutral-600 mb-8">
                Fale conosco através dos seguintes canais. Queremos ouvir você e ajudar a transformar sua visão em realidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                    <Mail size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                  <p className="text-neutral-600">contato@imaginare.com</p>
                  <p className="text-neutral-600">suporte@imaginare.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent-500 to-primary-600 text-white">
                    <Phone size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Telefone</h3>
                  <p className="text-neutral-600">(11) 3000-0000</p>
                  <p className="text-neutral-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                    <MapPin size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Endereço</h3>
                  <p className="text-neutral-600">Av. Paulista, 1000</p>
                  <p className="text-neutral-600">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent-500 to-primary-600 text-white">
                    <Clock size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Horário de Funcionamento</h3>
                  <p className="text-neutral-600">Segunda a Sexta: 09:00 - 18:00</p>
                  <p className="text-neutral-600">Sábado: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-primary-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Assunto</label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consulta">Consulta</option>
                  <option value="projeto">Novo Projeto</option>
                  <option value="parceria">Parceria</option>
                  <option value="suporte">Suporte</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-2 rounded-lg font-bold hover:shadow-lg transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-accent-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Nos Siga nas Redes Sociais</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition">f</a>
            <a href="#" className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition">𝕏</a>
            <a href="#" className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center hover:bg-accent-600 transition">in</a>
            <a href="#" className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition">📷</a>
          </div>
        </div>
      </section>
    </div>
  );
}
