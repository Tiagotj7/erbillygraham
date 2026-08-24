"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type PageKey = "recursos" | "historia" | "sobre";

const ALL_LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: "recursos", href: "/recursos", label: "Recursos" },
  { key: "historia", href: "/historia", label: "História" },
  { key: "sobre", href: "/sobre", label: "Sobre" },
];

export default function SiteHeader({ current }: { current: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      body.classList.add("menu-open");
    } else {
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.classList.remove("menu-open");
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const links = ALL_LINKS.filter((link) => link.key !== current);

  return (
    <>
      <div
        className={`overlay${menuOpen ? " active" : ""}`}
        onClick={closeMenu}
      ></div>
      <header>
        <div className="faixa-top">
          <div className="logo-container">
            <img src="/assets/erlogoapp.png" alt="Logo Embaixadores do Rei" />
            <h2>Embaixada Billy Graham</h2>
          </div>
          <div
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`main-nav${menuOpen ? " active" : ""}`}>
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Início
                </Link>
              </li>
              {links.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
