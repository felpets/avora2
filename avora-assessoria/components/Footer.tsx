export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-orange-400/10 py-12 px-5%">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="Ávora Assessoria Logo" className="h-10" />
              <span className="font-black text-lg tracking-wider text-white">
                Ávora <span className="text-orange-400">Assessoria</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas em revisão judicial de contratos de financiamento e recuperação de juros abusivos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#problema" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">O Problema</a></li>
              <li><a href="#como-funciona" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contato</h4>
            <p className="text-gray-400 text-sm mb-2">
              <span className="block">📞 11 95843-1233</span>
              <span className="block">✉️ avoraassessoria@gmail.com.br</span>
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/avoraassessoria?igsh=MnJvaWIyd21kMzkz" className="text-orange-400 hover:text-orange-300 transition-colors">Instagram</a>
              <a href="https://w.app/avoraassessoria" className="text-orange-400 hover:text-orange-300 transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Ávora Assessoria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/privacidade.html" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">Política de Privacidade</a>
              <a href="/termos.html" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">Termos de Uso</a>
              <a href="/cancelamento.html" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">Cancelamento</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
