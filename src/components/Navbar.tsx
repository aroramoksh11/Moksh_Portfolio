import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn, scrollTo } from "@/lib/utils";
import styles from "@/styles/Container.module.css";

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
  { href: "#education", text: "Education" },
  { href: "#experience", text: "Experience" },
  { href: "#por", text: "Positions" },
  { href: "#contact", text: "Contact" },
];

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
  hidden: { opacity: 0, y: -20 },
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

type IconProps = {
  ["data-hide"]: boolean;
};

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    scrollTo(section);
  }
}

function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(
          "relative px-4 py-2 rounded-lg font-medium text-white/90 transition-all duration-300 hover:text-white hover:bg-white/10 focus:bg-white/20 focus:outline-none group overflow-hidden",
          props.i === 0 && "nav-active"
        )}
      >
        <span className="relative z-10 capitalize">{props.text}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </a>
    </motion.li>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src="/assets/logo.png" 
                  alt="Logo" 
                  className="w-10 h-10 rounded-full border-2 border-white/20 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/25" 
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span className="text-xl font-bold clash-grotesk bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                Moksh Arora
              </span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <motion.ul 
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <NavItem
                key={link.href}
                href={link.href}
                text={link.text}
                i={i}
              />
            ))}
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <a
                href="https://drive.google.com/drive/folders/1unk6uAyAD_PsiXHJ84-tZia2XnW4GJW8"
                target="_blank"
                rel="noopener"
                className="ml-3 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 border border-primary/20 hover:border-primary/40"
              >
                Resume
              </a>
            </motion.li>
          </motion.ul>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 transition-all duration-300 focus:outline-none hover:bg-white/10 border border-white/10"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon data-hide={isOpen} />
              <CrossIcon data-hide={!isOpen} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence key="menu">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.15 }}
            >
              {/* Menu header */}
              <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 hover:bg-white/10 transition-colors"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <CrossIcon data-hide={false} />
                </button>
              </div>
              
              {/* Menu items */}
              <div className="p-6">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg py-3 px-4 rounded-lg font-medium text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/20 focus:outline-none transition-all duration-300"
                      >
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  >
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener"
                      className="block mt-4 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        html,
        body {
          overflow-y: ${isOpen ? "hidden" : "initial"};
          scrollbar-width: ${isOpen ? "none" : "unset"};
          -ms-overflow-style: ${isOpen ? "none" : "unset"};
          touch-action: ${isOpen ? "none" : "unset"};
          -ms-touch-action: ${isOpen ? "none" : "unset"};
        }
      `}</style>
    </motion.nav>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5 text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5 text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 