import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cancelamento | Ávora Assessoria",
  description: "Conheça nossa política de cancelamento e como solicitar o cancelamento de seu contrato.",
};

export default function CancelamentoPage() {
  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 px-5% relative overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl w-full mx-auto relative z-10 text-center py-16">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-white">
            Política de <span className="text-orange-400">Cancelamento</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Saiba como cancelar seu contrato conosco e conheça seus direitos.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-950 py-20 px-5%">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-orange-400/15 rounded-2xl p-10 hover:border-orange-400/30 transition-colors">
            <h2 className="text-3xl font-black text-white mb-6">Política de Cancelamento</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Esta política segue o Código de Defesa do Consumidor e garante ao cliente o direito de desistir da contratação nos termos da lei.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              O cliente pode solicitar o cancelamento e reembolso em até 7 dias contados da contratação ou do recebimento do serviço, conforme o caso.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As solicitações devem ser feitas pelos canais oficiais de atendimento da empresa e são analisadas internamente de acordo com os critérios legais.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Para pagamentos com cartão de crédito, o cancelamento também pode ser solicitado à administradora, sem deixar de seguir esta política.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Todas as solicitações estão sujeitas à verificação dos requisitos legais e às condições operacionais aplicáveis, que podem variar conforme o serviço contratado.
            </p>
          </div>

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
