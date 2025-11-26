import { Sparkles, Code, Palette, Lightbulb } from 'lucide-react';

export default function Colaboradores() {
  const colaboradores = [
    {
      name: 'Ana Silva',
      role: 'Diretora de Criatividade',
      icon: Sparkles,
      bio: 'Visionária com 15 anos de experiência em design estratégico.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Carlos Santos',
      role: 'Tech Lead',
      icon: Code,
      bio: 'Especialista em tecnologia e inovação com paixão por resultados.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marina Costa',
      role: 'Designer UX/UI',
      icon: Palette,
      bio: 'Criadora de experiências digitais que encantam usuários.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Roberto Oliveira',
      role: 'Estrategista de Negócios',
      icon: Lightbulb,
      bio: 'Especialista em transformação digital e crescimento escalável.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Juliana Ferreira',
      role: 'Gerente de Projetos',
      icon: Sparkles,
      bio: 'Professora em orquestrar equipes e entregar excelência.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lucas Alves',
      role: 'Desenvolvedor Full Stack',
      icon: Code,
      bio: 'Construtor de soluções robustas e escaláveis.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Nossos Colaboradores</h1>
          <p className="text-xl text-neutral-100">Conheça as pessoas incríveis que fazem IMAGINARE HUB acontecer</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto text-lg">
          Nossa equipe é formada por profissionais apaixonados, talentosos e dedicados a transformar ideias em realidade. Cada membro traz uma expertise única que contribui para nosso sucesso.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colaboradores.map((colab, index) => {
            const Icon = colab.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                  isEven
                    ? 'border-primary-200 hover:border-primary-400'
                    : 'border-accent-200 hover:border-accent-400'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={colab.image}
                    alt={colab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center ${
                    isEven ? 'text-primary-600' : 'text-accent-600'
                  }`}>
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{colab.name}</h3>
                  <p className={`text-sm font-semibold mb-4 ${isEven ? 'text-primary-600' : 'text-accent-600'}`}>
                    {colab.role}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{colab.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Cultua IMAGINARE</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Nossa cultura é baseada em respeito mútuo, crescimento contínuo e celebração de conquistas. Acreditamos que um ambiente inspirador gera trabalho extraordinário.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <p className="text-neutral-600 font-medium">Anos de Trajetória</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
              <p className="text-neutral-600 font-medium">Profissionais</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-neutral-600 font-medium">Países</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl font-bold text-accent-500 mb-2">∞</div>
              <p className="text-neutral-600 font-medium">Possibilidades</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Junte-se ao Nosso Time</h2>
        <div className="bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 rounded-2xl p-12 text-white text-center">
          <p className="text-xl mb-6">
            Estamos sempre em busca de talentos incríveis que compartilham nossa paixão por inovação.
          </p>
          <a
            href="mailto:carreiras@imaginare.com"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            Envie seu Currículo
          </a>
        </div>
      </section>
    </div>
  );
}
