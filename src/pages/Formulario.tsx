import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Formulario() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    tipoServico: '',
    orcamento: '',
    hobbies: [] as string[],
    mensagem: '',
  });

  const hobbiesOptions = [
    'Tecnologia',
    'Design',
    'Marketing',
    'Empreendedorismo',
    'Inovação',
    'Arte',
    'Educação',
    'Sustentabilidade',
    'Cultura',
    'Negócios',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleHobby = (hobby: string) => {
    setFormData(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            empresa: formData.empresa,
            cargo: formData.cargo,
            tipo_servico: formData.tipoServico,
            orcamento: formData.orcamento,
            hobbies: formData.hobbies,
            mensagem: formData.mensagem,
            criado_em: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      setSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          cargo: '',
          tipoServico: '',
          orcamento: '',
          hobbies: [],
          mensagem: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 inline-block">
            <CheckCircle className="text-green-500" size={64} />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Formulário Enviado!</h2>
          <p className="text-neutral-600 mb-6">
            Obrigado! Recebemos sua solicitação e entraremos em contato em breve para discutir seu projeto.
          </p>
          <div className="animate-pulse text-accent-600 font-semibold">Redirecionando...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map(s => (
                <div
                  key={s}
                  className={`flex-1 mx-1 h-2 rounded-full transition ${
                    s <= step ? 'bg-gradient-to-r from-primary-600 to-accent-500' : 'bg-neutral-200'
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Etapa {step} de 4</span>
              <span className="font-semibold text-primary-600">
                {step === 1 && 'Informações Pessoais'}
                {step === 2 && 'Profissional'}
                {step === 3 && 'Interesses'}
                {step === 4 && 'Resumo'}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Informações Pessoais</h2>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Informações Profissionais</h2>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Cargo *</label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="Seu cargo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Tipo de Serviço *</label>
                  <select
                    name="tipoServico"
                    value={formData.tipoServico}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="design">Design e Branding</option>
                    <option value="desenvolvimento">Desenvolvimento Web</option>
                    <option value="consultoria">Consultoria de Negócios</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Orçamento Estimado *</label>
                  <select
                    name="orcamento"
                    value={formData.orcamento}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="">Selecione um intervalo</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                    <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                    <option value="50k+">Acima de R$ 50.000</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Seus Interesses e Hobbies</h2>
                <p className="text-neutral-600 mb-4">Selecione os tópicos que mais te interessam:</p>

                <div className="grid grid-cols-2 gap-3">
                  {hobbiesOptions.map(hobby => (
                    <button
                      key={hobby}
                      type="button"
                      onClick={() => toggleHobby(hobby)}
                      className={`p-4 rounded-lg border-2 transition font-medium ${
                        formData.hobbies.includes(hobby)
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-neutral-300 bg-white text-neutral-700 hover:border-primary-300'
                      }`}
                    >
                      {hobby}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Mensagem Adicional</h2>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Conte-nos sobre seu projeto</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="Descreva sua ideia, projeto ou dúvidas..."
                  ></textarea>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 space-y-3">
                  <h3 className="font-semibold text-neutral-900">Resumo da sua solicitação:</h3>
                  <div className="text-sm text-neutral-700 space-y-2">
                    <p><span className="font-medium">Nome:</span> {formData.nome}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Empresa:</span> {formData.empresa}</p>
                    <p><span className="font-medium">Serviço:</span> {formData.tipoServico}</p>
                    <p><span className="font-medium">Interesses:</span> {formData.hobbies.join(', ') || 'Nenhum selecionado'}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-8">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-lg font-medium text-neutral-700 hover:bg-neutral-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={18} /> Voltar
              </button>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition"
                >
                  Próximo <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
