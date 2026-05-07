import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Ávora Assessoria",
  description: "Leia nossos termos de uso e conheça as condições para usar nossos serviços.",
};

export default function TermosPage() {
  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 px-5% relative overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl w-full mx-auto relative z-10 text-center py-16">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
            Termos de <span className="text-orange-400">Uso</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça os termos e condições para utilizar os serviços da Ávora Assessoria.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-950 py-20 px-5%">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">📜</span>
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e usar este Site, você aceita estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não tem permissão para usar este Site.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">⚖️</span>
                2. Disponibilidade do Serviço
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A Ávora Assessoria oferece serviços de avaliação de contratos de financiamento e revisão judicial. O serviço está disponível nas seguintes condições:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Avaliação inicial dos seus documentos</li>
                  <li>Análise de viabilidade jurídica do seu caso</li>
                  <li>Representação legal em processos judiciais</li>
                  <li>Suporte durante todo o processo</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">🚫</span>
                3. Proibições de Uso
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Você concorda que não irá:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Usar o Site para qualquer atividade ilegal ou em violação de qualquer lei</li>
                  <li>Tentar acessar não autorizado ao Site ou seus sistemas</li>
                  <li>Enviar vírus, malware ou qualquer outro código malicioso</li>
                  <li>Fornecer informações falsas ou enganosas</li>
                  <li>Reproduzir, duplicar ou copiar o conteúdo sem permissão</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">📋</span>
                4. Responsabilidades do Cliente
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Como cliente, você é responsável por:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Fornecer informações precisas e completas</li>
                  <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  <li>Notificar-nos imediatamente sobre qualquer acesso não autorizado</li>
                  <li>Respeitar todos os direitos de propriedade intelectual</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">⚠️</span>
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A Ávora Assessoria não será responsável por quaisquer danos indiretos, incidentais, especiais, consequentes ou punitivos resultantes do uso ou incapacidade de usar o Site ou seus serviços, mesmo que tenhamos sido informados da possibilidade de tais danos.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">🔄</span>
                6. Modificações dos Termos
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamos o direito de modificar estes Termos a qualquer momento. Sua continuação no uso do Site após tais modificações constitui aceitação dos novos Termos. Recomendamos que você revise regularmente esta página.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">⚔️</span>
                7. Lei Aplicável
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Estes Termos são regidos pelas leis do Brasil. Qualquer disputa será submetida aos tribunais competentes da República Federativa do Brasil.
              </p>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <a href="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              ← Voltar para home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
