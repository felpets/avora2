'use client';

export default function Hero() {
  const contractRate = 3.4;
  const legalRate = 1.9;
  const installments = 48;
  const installmentValue = 1850;
  const rateDiff = contractRate - legalRate;
  const savingPercent = rateDiff / contractRate;
  const totalPaid = installmentValue * installments;
  const estimatedRecover = Math.round(totalPaid * savingPercent);
  const monthlySave = Math.round(installmentValue * savingPercent);

  return (
    <section
      id="inicio"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24 px-5% relative overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-400/10 border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-400 font-bold text-sm">⚡</span>
              <span className="text-orange-400 font-semibold text-sm">Especialistas em Juros Abusivos</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5 text-white">
              Seu financiamento tem <span className="text-orange-400">juros abusivos?</span> Nós revertemos isso.
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-md">
              A Ávora Assessoria atua na revisão judicial de contratos de financiamento. Identificamos juros ilegais, entramos com o processo e recuperamos o que é seu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://w.app/avoraassessoria" className="bg-orange-400 text-black px-8 py-4 rounded-lg font-black text-base hover:bg-orange-500 transition-colors text-center">
                📋 Analisar meu contrato
              </a>
              <a href="#como-funciona" className="border-2 border-orange-400/40 text-white px-8 py-4 rounded-lg font-bold text-base hover:border-orange-400 hover:bg-orange-400/10 transition-colors text-center">
                Como funciona →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-orange-400">94%</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Taxa de êxito</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-orange-400">+2mil</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Casos resolvidos</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="bg-gray-900/90 backdrop-blur border border-orange-400/20 rounded-3xl p-9 w-full max-w-sm">
              <div className="text-xs font-semibold  uppercase tracking-wider mb-5">Exemplo de Revisão</div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Taxa contratada</span>
                  <span className="font-semibold text-white">3,4% a.m.</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Taxa legal máxima</span>
                  <span className="font-semibold text-green-400">1,9% a.m.</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Parcelas restantes</span>
                  <span className="font-semibold text-white">48</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Valor da parcela</span>
                  <span className="font-semibold text-white">R$ 1.850</span>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Economia mensal aproximada</span>
                  <span className="font-semibold text-green-400">R$ 258</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Valor estimado a recuperar</span>
                  <span className="font-semibold text-red-500">R$ 12.400</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Percentual de economia</span>
                  <span className="font-semibold text-green-400">18,0%</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                  <span>Pagamento total</span>
                  <span className="font-semibold text-white">R$ 88.800</span>
                </div>
              </div>

              <a href="https://w.app/avoraassessoria" className="block w-full bg-orange-400 text-black text-center py-3.5 rounded-lg font-black text-sm hover:bg-orange-500 transition-colors">
                Quero revisar meu contrato →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
