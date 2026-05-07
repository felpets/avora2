export default function HowWorks() {
  const steps = [
    {
      number: '1',
      title: 'Análise do Contrato',
      description: 'Nossos especialistas analisam detalhadamente seu contrato de financiamento identificando ilegalidades e abusividades.',
    },
    {
      number: '2',
      title: 'Parecer Técnico',
      description: 'Você recebe um parecer técnico completo com a viabilidade de revisão e estimativa de valores a recuperar.',
    },
    {
      number: '3',
      title: 'Processo Judicial',
      description: 'Se houver ilegalidades, entramos com ação judicial na defesa de seus direitos perante o Judiciário.',
    },
    {
      number: '4',
      title: 'Recuperação',
      description: 'Após a sentença favorável, você recupera os valores indevidamente cobrados com atualizações.',
    },
  ];

  return (
    <section id="como-funciona" className="bg-gray-900 py-20 md:py-24 px-5%">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-4">
            4 passos simples para recuperar seu dinheiro
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Somos transparentes e objetivos. Seguimos um processo estruturado e comprovado que já recuperou milhões para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connecting line (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-1 bg-orange-400/30"></div>
              )}

              <div className="bg-gray-800 border border-orange-400/20 rounded-xl p-6 h-full">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-black font-black text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Pronto para começar?</p>
          <a href="https://w.app/avoraassessoria" className="inline-block bg-orange-400 text-black px-8 py-4 rounded-lg font-black text-base hover:bg-orange-500 transition-colors">
            Solicitar análise
          </a>
        </div>
      </div>
    </section>
  );
}
