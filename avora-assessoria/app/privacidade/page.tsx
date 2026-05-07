import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Ávora Assessoria",
  description: "Conheça nossa política de privacidade e como protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 px-5% relative overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl w-full mx-auto relative z-10 text-center py-16">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
            Política de <span className="text-orange-400">Privacidade</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Sua privacidade é importante para nós. Conheça como coletamos, usamos e protegemos seus dados.
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
                <span className="text-orange-400">📋</span>
                1. Introdução
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A Ávora Assessoria ("Empresa", "nós", "nosso" ou "nos" de outra forma) opera a página https://avoraassessoria.com.br ("Site"). Esta página informa nossas políticas sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso Site e as opções que você tem associadas a esses dados.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">🔍</span>
                2. Coleta de Dados
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Coletamos seus dados pessoais de várias maneiras, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Informações que você nos fornece voluntariamente através de formulários</li>
                  <li>Dados de uso e navegação do Site através de cookies e tecnologias similares</li>
                  <li>Informações de contato quando você nos envia mensagens</li>
                  <li>Dados de sua conta se você criar uma</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">🛡️</span>
                3. Proteção de Dados
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de segurança apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, firewalls e controle de acesso baseado em papéis.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">✋</span>
                4. Seus Direitos
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados imprecisos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Optar por não receber comunicações de marketing</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-8 hover:border-orange-400/30 transition-colors">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span className="text-orange-400">📞</span>
                5. Contato
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como coletamos e usamos seus dados pessoais, entre em contato conosco:
              </p>
              <div className="bg-black/50 border border-orange-400/20 rounded-lg p-4">
                <p className="text-gray-300">
                  <span className="block text-sm text-orange-400 font-semibold mb-2">Email:</span>
                  contato@avoraassessoria.com.br
                </p>
                <p className="text-gray-300 mt-3">
                  <span className="block text-sm text-orange-400 font-semibold mb-2">Telefone:</span>
                  (11) 1234-5678
                </p>
              </div>
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
