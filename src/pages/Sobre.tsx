import { CheckCircle } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Sobre IMAGINARE HUB</h1>
          <p className="text-xl text-neutral-100">Conheça a história da inovação e criatividade</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Nossa História</h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              A IMAGINARE HUB nasceu de uma visão: criar um espaço onde criatividade e tecnologia se encontram. Fundada em 2020, nossa empresa começou como um pequeno grupo de visionários apaixonados por inovação.
            </p>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              Durante os últimos anos, crescemos significativamente, desenvolvendo uma metodologia única que combina design thinking, estratégia de negócios e tecnologia de ponta.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Hoje, somos reconhecidos como líderes em criatividade e inovação, transformando ideias em projetos que deixam legados.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Missão</h3>
            <p className="mb-8 leading-relaxed">
              Transformar ideias criativas em soluções inovadoras que geram impacto real nos negócios e na sociedade.
            </p>
            <h3 className="text-2xl font-bold mb-4">Visão</h3>
            <p className="leading-relaxed">
              Ser a agência de criatividade mais confiável e influente, reconhecida por projetos que reinventam categorias e inspiram mudanças.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle className="text-primary-600 mb-4" size={32} />
              <h3 className="font-bold text-neutral-900 mb-2">Criatividade</h3>
              <p className="text-neutral-600 text-sm">Sempre buscamos formas inovadoras de resolver problemas.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle className="text-accent-500 mb-4" size={32} />
              <h3 className="font-bold text-neutral-900 mb-2">Excelência</h3>
              <p className="text-neutral-600 text-sm">Não aceitamos menos que o melhor em cada projeto.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle className="text-primary-600 mb-4" size={32} />
              <h3 className="font-bold text-neutral-900 mb-2">Colaboração</h3>
              <p className="text-neutral-600 text-sm">Acreditamos na força do trabalho em equipe.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle className="text-accent-500 mb-4" size={32} />
              <h3 className="font-bold text-neutral-900 mb-2">Integridade</h3>
              <p className="text-neutral-600 text-sm">Transparência e ética guiam todas nossas ações.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Nosso Diferencial</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Metodologia Própria</h3>
              <p className="text-neutral-600">Desenvolvemos nosso próprio processo de criação que garante resultados excepcionais.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Equipe Multidisciplinar</h3>
              <p className="text-neutral-600">Designers, estrategistas e tecnólogos trabalhando juntos em harmonia.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Casos de Sucesso Comprovados</h3>
              <p className="text-neutral-600">Centenas de projetos que geraram resultados mensuráveis e impactantes.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-600 to-accent-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Dedicação ao Cliente</h3>
              <p className="text-neutral-600">Sua visão é nossa inspiração. Trabalhamos como uma extensão do seu time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
