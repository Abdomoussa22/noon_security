import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "../../assets/noon-logo.jpeg";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  // refs
  const menuRef = useRef(null); // ref for mobile menu element
  const toggleRef = useRef(null); // ref for hamburger button

  // keep header height stable by using a fixed class h-16 (4rem).
  // scroll listener (one place)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section detection
  useEffect(() => {
    const sections = ["hero", "services", "gallery", "contact","sucsses"];
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const sec = document.getElementById(id);
        if (
          sec &&
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // click outside: close mobile menu only when clicking outside toggle button AND outside menu
  useEffect(() => {
    function handleDocClick(e) {
      const target = e.target;
      if (!open) return;
      if (menuRef.current && menuRef.current.contains(target)) return; // clicked inside menu
      if (toggleRef.current && toggleRef.current.contains(target)) return; // clicked toggle
      // else clicked outside both -> close
      setOpen(false);
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [open]);

  // helper to open and lock body scroll if needed (optional)
  useEffect(() => {
    if (open) {
      // prevent page jump when menu opens on mobile
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { id: "hero", label: "الرئسية" },
    { id: "services", label: "الخدمات" },
    { id: "gallery", label: "معرض الأعمال" },
    { id: "sucsses", label: "شركاءالنجاح" },
    { id: "contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 
        backdrop-blur-xl transition-all duration-300 border-b
        ${
          scrolled
            ? "bg-white/90 shadow-lg border-gray-200"
            : "bg-white/40 border-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 object-cover rounded-full shadow"
          />
          <div className="text-right leading-tight">
            <h1 className="text-lg font-bold text-navy">مؤسسة شبكة نون</h1>
            <p className="text-sm font-semibold text-navy">
              للأنظمة الامنية
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-navy font-medium h-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className="relative text-lg font-bold hover:text-gray-700 transition-colors flex items-center h-full"
            >
              <span className="block py-2">{item.label}</span>

              {/* Underline */}
              {active === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-2 right-0 h-[3px] w-full bg-gold rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="tel:+966552265155"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-navy text-white hover:bg-navy/90 transition shadow flex items-center gap-2"
          >
            <Phone size={18} /> اتصل الآن
          </a>
          <a
            href="https://wa.me/966552265155"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-gold text-white font-semibold hover:bg-gold/90 transition shadow flex items-center gap-2"
          >
            <MessageCircle size={18} /> واتساب
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu: fixed below header so it can't push header up */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed left-0 right-0 top-16 bg-white shadow-lg px-4 py-4 text-gray-700 flex flex-col gap-4 font-medium border-t z-40"
          >
            <a
              href="#hero"
              onClick={() => {
                setActive("hero");
                setOpen(false);
              }}
              className="py-2 hover:text-navy"
            >
              الرئسية
            </a>
            <a
              href="#services"
              onClick={() => {
                setActive("services");
                setOpen(false);
              }}
              className="py-2 hover:text-navy"
            >
              الخدمات
            </a>
            <a
              href="#gallery"
              onClick={() => {
                setActive("gallery");
                setOpen(false);
              }}
              className="py-2 hover:text-navy"
            >
              معرض الأعمال
            </a>
            <a
              href="#contact"
              onClick={() => {
                setActive("contact");
                setOpen(false);
              }}
              className="py-2 hover:text-navy"
            >
              تواصل معنا
            </a>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="tel:+966552265155"
                target="_blank"
                className="bg-navy text-white text-center py-2 rounded-lg shadow flex justify-center gap-2"
              >
                <Phone size={16} /> اتصل الآن
              </a>
              <a
                href="https://wa.me/966552265155"
                target="_blank"
                className="bg-gold text-white text-center py-2 rounded-lg shadow flex justify-center gap-2"
              >
                <MessageCircle size={16} /> واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
