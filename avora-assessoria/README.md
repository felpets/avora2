# Ávora Assessoria - Landing Page

Landing page moderna da Ávora Assessoria, desenvolvida com Next.js, React e Tailwind CSS. O site oferece uma experiência responsiva e otimizada para desktop e mobile.

## 🚀 Características

- ✅ **Responsivo**: Design mobile-first com suporte completo a tablets e desktops
- ⚡ **Performance**: Next.js 16 com Turbopack para desenvolvimento ultra-rápido
- 🎨 **Design Moderno**: Tailwind CSS com componentes reutilizáveis
- ♿ **Acessibilidade**: Semântica HTML correta e navegação intuitiva
- 📱 **Menu Mobile**: Hamburger menu adaptativo para telas pequenas
- 🔍 **SEO**: Metadados otimizados com Next.js Metadata API

## 📁 Estrutura do Projeto

```
avora-assessoria/
├── app/
│   ├── layout.tsx          # Layout raiz com configurações globais
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   ├── Navigation.tsx      # Navbar com menu responsivo
│   ├── Hero.tsx            # Seção hero com background image
│   ├── Problems.tsx        # Seção de problemas
│   ├── HowWorks.tsx        # Seção como funciona
│   ├── FAQ.tsx             # Accordion de perguntas frequentes
│   └── Footer.tsx          # Rodapé
├── public/                 # Arquivos estáticos (imagens, etc)
└── package.json            # Dependências e scripts
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clonar repositório (se aplicável) ou entrar no diretório
cd avora-assessoria

# Instalar dependências
npm install
```

### Executar Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm run start
```

## 📋 Componentes Principais

### Navigation
Menu responsivo com:
- Logo com ícone da marca
- Links de navegação (desktop e mobile)
- Botão CTA "Analisar meu caso"
- Hamburger menu em dispositivos móveis

### Hero
Seção principal com:
- Background image
- Titulo e descrição
- Dois botões de CTA
- Estatísticas (94%, +2mil, R$0)
- Card de simulação de revisão (desktop)

### Problems
Lista de problemas com:
- Grid responsivo
- Ícones emoji
- Destaque de informação
- Call-to-action

### HowWorks
Processo em 4 passos:
- Cards numeradas
- Timeline visual
- Descrição de cada etapa

### FAQ
Accordion interativo com:
- Perguntas e respostas comuns
- Animação de abertura
- Estados expandido/retraído

### Footer
Rodapé completo com:
- Informações da marca
- Links de navegação
- Contato e redes sociais
- Informações legais

## 🎨 Customização

### Cores
As cores podem ser ajustadas diretamente nos componentes usando Tailwind:
- Laranja: `bg-orange-400`, `text-orange-400`
- Escuro: `bg-gray-900`, `bg-black`
- Branco: `text-white`

### Imagens
- Adicione a imagem hero em `public/hero-bg.png`
- Atualize referencias de imagens nos componentes

### Textos
Todos os textos estão nos componentes e podem ser editados facilmente.

## 📱 Responsividade

O site é desenvolvido com mobile-first approach:
- **Mobile**: <768px (display stack, menu hamburger)
- **Tablet**: 768px-1024px
- **Desktop**: >1024px (layout lado-a-lado, menu horizontal)

Breakpoints do Tailwind utilizados:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras Plataformas
- Netlify: `npm run build` → Deploy da pasta `.next`
- Docker: Usar Node.js 18 como base

## 📚 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://react.dev)

## 📝 Notas

- O projeto usa TypeScript para type safety
- ESLint está configurado para manter a qualidade do código
- Tailwind CSS está configurado com plugins adicionais conforme necessário

## 🤝 Contribuições

Para sugestões ou melhorias, abra uma issue ou pull request.

## 📄 Licença

Este projeto é propriedade da Ávora Assessoria.
