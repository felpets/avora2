'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Invisible hover area at top for desktop */}
      <div
        className="fixed top-0 left-0 right-0 h-10 z-50 hidden md:block"
        onMouseEnter={handleMouseEnter}
      />

      <nav className={`fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-orange-500/15 px-5% h-[72px] flex items-center justify-between transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Link href="/" className="flex items-center gap-6">
          <Image
            src="/logo.png"
            alt="Ávora Assessoria"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <span className="font-black text-xl tracking-wider text-white">
            Ávora <span className="text-orange-400">Assessoria</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#problema" className="text-gray-300 text-sm font-medium hover:text-orange-400 transition-colors">O Problema</a></li>
          <li><a href="#como-funciona" className="text-gray-300 text-sm font-medium hover:text-orange-400 transition-colors">Como Funciona</a></li>
          <li><a href="#beneficios" className="text-gray-300 text-sm font-medium hover:text-orange-400 transition-colors">Benefícios</a></li>
          <li><a href="#faq" className="text-gray-300 text-sm font-medium hover:text-orange-400 transition-colors">Dúvidas</a></li>
        </ul>

       {/* Mobile Menu Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden fixed top-5 right-4 z-[9999] flex flex-col justify-center items-center gap-2 w-12 h-12"
>
  <span
    className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
      isOpen ? 'rotate-45 translate-y-3' : ''
    }`}
  />

  <span
    className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
      isOpen ? 'opacity-0' : ''
    }`}
  />

  <span
    className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
      isOpen ? '-rotate-45 -translate-y-3' : ''
    }`}
  />
</button>

{/* Mobile Menu Overlay */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-[998] md:hidden"
    onClick={() => setIsOpen(false)}
  />
)}

{/* Mobile Menu */}
{isOpen && (
  <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black border-t border-orange-500/20 px-8 py-8 md:hidden z-[999] overflow-y-auto">
    
    <ul className="flex flex-col gap-8 list-none">
      
      <li>
        <a
          href="#problema"
          onClick={() => setIsOpen(false)}
          className="text-gray-300 text-2xl font-semibold hover:text-orange-400 block py-4"
        >
          O Problema
        </a>
      </li>

      <li>
        <a
          href="#como-funciona"
          onClick={() => setIsOpen(false)}
          className="text-gray-300 text-2xl font-semibold hover:text-orange-400 block py-4"
        >
          Como Funciona
        </a>
      </li>

      <li>
        <a
          href="#beneficios"
          onClick={() => setIsOpen(false)}
          className="text-gray-300 text-2xl font-semibold hover:text-orange-400 block py-4"
        >
          Benefícios
        </a>
      </li>

      <li>
        <a
          href="#faq"
          onClick={() => setIsOpen(false)}
          className="text-gray-300 text-2xl font-semibold hover:text-orange-400 block py-4"
        >
          Dúvidas
        </a>
      </li>

      <li className="pt-8">
        <a
          href="https://w.app/avoraassessoria"
          onClick={() => setIsOpen(false)}
          className="bg-orange-400 text-black px-10 py-4 rounded-xl font-black text-lg inline-block"
        >
          Analisar meu caso
        </a>
      </li>

    </ul>
  </div>
)}

        {/* CTA Button - Desktop */}
        <a href="https://w.app/avoraassessoria" className="hidden md:block bg-orange-400 text-black px-6 py-2.5 rounded-lg font-black text-sm hover:bg-orange-500 transition-colors">
          Analisar meu caso
        </a>
      </nav>
    </>
  );
}
