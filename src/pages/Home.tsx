import { Sparkles, Lightbulb, Users, Zap, TrendingUp, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
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
        <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">Nossos Serviços</h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">Oferecemos soluções completas e personalizadas para transformar sua visão em realidade</p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="group bg-white p-8 rounded-xl border border-primary-200 hover:shadow-2xl hover:border-primary-400 hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Design Criativo</h3>
            <p className="text-neutral-600">Projetos visuais que capturam a essência da sua marca.</p>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-accent-200 hover:shadow-2xl hover:border-accent-400 hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-accent-100 to-accent-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="text-accent-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Consultoria</h3>
            <p className="text-neutral-600">Ideias inovadoras para levar seu negócio ao próximo nível.</p>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-primary-200 hover:shadow-2xl hover:border-primary-400 hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Colaboração</h3>
            <p className="text-neutral-600">Trabalho em equipe para resultados extraordinários.</p>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-accent-200 hover:shadow-2xl hover:border-accent-400 hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-br from-accent-100 to-accent-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-accent-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Tecnologia</h3>
            <p className="text-neutral-600">Soluções de ponta para seus desafios mais complexos.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Por que escolher IMAGINARE HUB?</h2>
          <p className="text-center text-neutral-100 mb-12 max-w-2xl mx-auto">Números que demonstram nosso compromisso com a excelência</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp className="text-white" size={32} />
                </div>
              </div>
              <div className="text-5xl font-bold text-white mb-2 text-center">100+</div>
              <h4 className="text-xl font-bold text-white mb-2 text-center">Projetos</h4>
              <p className="text-neutral-100 text-center">Mais de 100 projetos bem-sucedidos em nossa história.</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Users className="text-primary-600" size={32} />
                </div>
              </div>
              <div className="text-5xl font-bold text-white mb-2 text-center">50+</div>
              <h4 className="text-xl font-bold text-white mb-2 text-center">Colaboradores</h4>
              <p className="text-neutral-100 text-center">Uma equipe apaixonada e dedicada à excelência.</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Award className="text-white" size={32} />
                </div>
              </div>
              <div className="text-5xl font-bold text-white mb-2 text-center">99%</div>
              <h4 className="text-xl font-bold text-white mb-2 text-center">Satisfação</h4>
              <p className="text-neutral-100 text-center">Clientes satisfeitos que confiam em nosso trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">Projetos que Inspiram</h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">Confira alguns dos nossos trabalhos mais recentes</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Estúdio de TV Moderno"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Estúdio de TV</h3>
                <p className="text-sm text-neutral-200">Produção audiovisual de alta qualidade</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Projeto de Branding"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Branding Criativo</h3>
                <p className="text-sm text-neutral-200">Identidade visual marcante</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Desenvolvimento Digital"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Soluções Digitais</h3>
                <p className="text-sm text-neutral-200">Tecnologia de ponta</p>
              </div>
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
