'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Como saber se meu contrato tem juros abusivos?',
      answer: 'Existem vários indicadores: taxa média de mercado superior à sua, presença de TAC/TEC, capitalização de juros em pessoa física ou taxa efetiva muito superior à divulgada. A análise técnica identifica os principais pontos de risco.',
    },
    {
      question: 'Quanto custa uma revisão de contrato?',
      answer: 'O valor varia conforme o contrato, a estratégia escolhida e o estágio da ação. Nossa equipe apresenta opções e esclarece cada etapa antes de seguir.',
    },
    {
      question: 'Quanto tempo leva para recuperar o dinheiro?',
      answer: 'A análise leva 3-5 dias úteis. O processo judicial leva em média 12-18 meses, mas você começa a recuperar valores assim que há decisão favorável em primeira instância.',
    },
    {
      question: 'Meu financiamento já terminou. Ainda posso revisar?',
      answer: 'Sim! Você tem até 3 anos após o pagamento final para entrar com ação revisional. Mesmo financiamentos quitados podem gerar direito a indenização.',
    },
    {
      question: 'Preciso comparecimento em audiência?',
      answer: 'Geralmente não. Podemos proceder com a ação por meio de você, dependendo do tribunal. Em alguns casos, uma videoconferência resolve.',
    },
  ];

  return (
    <section id="faq" className="bg-gray-950 py-20 md:py-24 px-5%">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-4">
            Perguntas e respostas
          </h2>
          <p className="text-gray-300">
            Tire suas dúvidas sobre o processo de revisão de contratos
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-900 border border-orange-400/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-bold text-white text-left">{faq.question}</span>
                <span className={`text-orange-400 font-bold text-lg transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-gray-800/30 border-t border-orange-400/10 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-orange-400/10 to-orange-400/5 border border-orange-400/20 rounded-xl p-8">
          <h3 className="text-xl font-black text-white mb-2">Ainda tem dúvidas?</h3>
          <p className="text-gray-300 mb-6">Converse com nosso time de especialistas</p>
          <a href="https://w.app/avoraassessoria" className="inline-block bg-orange-400 text-black px-8 py-3.5 rounded-lg font-black hover:bg-orange-500 transition-colors">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
