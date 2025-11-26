import { Sparkles, Lightbulb, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transforme Suas Ideias em <span className="text-accent-200">Realidade</span>
              </h1>
              <p className="text-xl text-neutral-100 mb-8 leading-relaxed">
                Na IMAGINARE HUB, criamos projetos inovadores que conectam criatividade com tecnologia de ponta.
              </p>
              <Link
                to="/formulario"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition transform hover:scale-105"
              >
                Começar Agora
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-6xl">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Nossos Serviços</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl border border-primary-200 hover:shadow-lg hover:border-primary-400 transition">
            <Sparkles className="text-primary-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Design Criativo</h3>
            <p className="text-neutral-600">Projetos visuais que capturam a essência da sua marca.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent-200 hover:shadow-lg hover:border-accent-400 transition">
            <Lightbulb className="text-accent-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Consultoria</h3>
            <p className="text-neutral-600">Ideias inovadoras para levar seu negócio ao próximo nível.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-primary-200 hover:shadow-lg hover:border-primary-400 transition">
            <Users className="text-primary-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Colaboração</h3>
            <p className="text-neutral-600">Trabalho em equipe para resultados extraordinários.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent-200 hover:shadow-lg hover:border-accent-400 transition">
            <Zap className="text-accent-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Tecnologia</h3>
            <p className="text-neutral-600">Soluções de ponta para seus desafios mais complexos.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">Por que escolher IMAGINARE HUB?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-accent-500 mb-2">100+</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Projetos</h4>
              <p className="text-neutral-600">Mais de 100 projetos bem-sucedidos em nossa história.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Colaboradores</h4>
              <p className="text-neutral-600">Uma equipe apaixonada e dedicada à excelência.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-accent-500 mb-2">99%</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Satisfação</h4>
              <p className="text-neutral-600">Clientes satisfeitos que confiam em nosso trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Pronto para começar?</h2>
        <p className="text-xl text-neutral-600 mb-8">Transforme sua visão em um projeto extraordinário com a gente.</p>
        <Link
          to="/formulario"
          className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
        >
          Solicitar Consultoria
        </Link>
      </section>
    </div>
  );
}
