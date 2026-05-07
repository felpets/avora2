export default function Problems() {
  const problems = [
    {
      icon: '💸',
      title: 'Spread bancário excessivo',
      description: 'A diferença entre a taxa captada e a cobrada ao consumidor frequentemente ultrapassa os limites legais.',
    },
    {
      icon: '📄',
      title: 'Cláusulas contratuais abusivas',
      description: 'Contratos carregados de taxas escondidas: TAC, TEC, seguros compulsórios e outros encargos não informados.',
    },
    {
      icon: '⚠️',
      title: 'Falta de transparência',
      description: 'Muitas instituições financeiras não informam claramente a taxa efetiva cobrada, ocultando a verdadeira despesa.',
    },
    {
      icon: '📉',
      title: 'Juros sobre juros',
      description: 'A capitalização de juros em operações de crédito pessoa física viola a legislação vigente.',
    },
  ];

  return (
    <section id="problema" className="bg-amber-50 py-20 md:py-24 px-5%">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">O Problema</span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-4">
              Você sabia que milhões de brasileiros pagam juros ilegais?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Financeiras cobram taxas acima do limite permitido por lei e, na maioria das vezes, os consumidores nem percebem.
            </p>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-black mb-5">
                Por que revisar seu <span className="text-orange-400">contrato?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-gray-300">Recupere valores pagos em juros indevidos</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-gray-300">Reduza o valor das parcelas futuras</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-gray-300">Ganhe segurança jurídica com um parecer técnico</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-gray-300">Avaliamos o potencial de recuperação com base na análise do contrato.</p>
                </div>
              </div>
              <a href="https://w.app/avoraassessoria" className="block w-full bg-orange-400 text-black text-center py-3.5 rounded-lg font-black text-sm hover:bg-orange-500 transition-colors mt-8">
                Quero revisar meu contrato →
              </a>
            </div>
          </div>

          {/* Right Column - Problems List */}
          <div className="space-y-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 bg-white/50 rounded-xl p-5 border-l-4 border-orange-600">
                <div className="text-3xl flex-shrink-0">{problem.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{problem.title}</h4>
                  <p className="text-sm text-gray-700">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
