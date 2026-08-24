"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./home.css";

export default function HomePage() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const mainNav = document.getElementById("mainNav");
    const body = document.body;

    if (!hamburger || !mainNav) return;

    const toggleMenu = () => {
      mainNav.classList.toggle("active");
      hamburger.classList.toggle("active");
      body.style.overflow = mainNav.classList.contains("active")
        ? "hidden"
        : "auto";
    };
    hamburger.addEventListener("click", toggleMenu);

    const navLinks = mainNav.querySelectorAll("a");
    const closeOnLinkClick = () => {
      mainNav.classList.remove("active");
      hamburger.classList.remove("active");
      body.style.overflow = "auto";
    };
    navLinks.forEach((link) =>
      link.addEventListener("click", closeOnLinkClick)
    );

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideNav = mainNav.contains(target);
      const isClickInsideHamburger = hamburger.contains(target);

      if (
        !isClickInsideNav &&
        !isClickInsideHamburger &&
        mainNav.classList.contains("active")
      ) {
        mainNav.classList.remove("active");
        hamburger.classList.remove("active");
        body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleOutsideClick);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const header = document.querySelector("header");
        const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
        const targetPosition =
          (targetElement as HTMLElement).offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };
    anchorLinks.forEach((anchor) =>
      anchor.addEventListener("click", smoothScroll as EventListener)
    );

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(
      ".card, .feature-item, .billy-card, .compromisso-content"
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero") as HTMLElement | null;
      const heroContent = document.querySelector(
        ".hero-content"
      ) as HTMLElement | null;
      const heroImage = document.querySelector(
        ".hero-image"
      ) as HTMLElement | null;

      if (hero && heroContent && heroImage) {
        const heroHeight = hero.offsetHeight;
        const scrollPercentage = scrolled / heroHeight;

        if (scrollPercentage < 1) {
          heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
          heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleParallaxScroll);

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) =>
        link.removeEventListener("click", closeOnLinkClick)
      );
      document.removeEventListener("click", handleOutsideClick);
      anchorLinks.forEach((anchor) =>
        anchor.removeEventListener("click", smoothScroll as EventListener)
      );
      window.removeEventListener("scroll", handleParallaxScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img src="/assets/erlogoapp.png" alt="Logo Embaixadores do Rei" />
              <span className="site-title">Embaixada Billy Graham</span>
            </div>

            <div className="nav-container">
              <div className="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <nav className="main-nav" id="mainNav">
                <Link href="/">Início</Link>
                <Link href="/recursos">Recursos</Link>
                <Link href="/historia">História</Link>
                <Link href="/sobre">Sobre</Link>

                <div className="dropdown">
                  <button className="dropdown-btn">
                    Portal+ <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a
                      href="http://www.denaer.org.br/site/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DENAER
                    </a>
                    <a
                      href="https://somossiba.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Igreja Local
                    </a>
                    <a
                      href="https://www.embaixadas.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Embaixadas
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <img
          src="/assets/banner.jpeg"
          alt="Banner Embaixadores"
          className="hero-image"
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Embaixada Billy Graham</h1>
          <p className="hero-subtitle">
            Formando jovens discípulos e líderes para transformar o mundo
            através do amor de Cristo
          </p>
          <a href="#cards" className="hero-btn">
            Conheça Nossa Missão
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section" id="cards">
        <div className="container">
          <h2 className="section-title">Nossa Visão</h2>

          <div className="cards-container">
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-scroll"></i>
                </div>
                <h3>Tema</h3>
              </div>
              <div className="card-body">
                <p>&quot;Somos Embaixadores por Cristo.&quot;</p>
                <p>
                  Este é o fundamento da nossa identidade como organização,
                  representando o Reino de Deus na terra através de nossas
                  vidas e testemunho.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-bible"></i>
                </div>
                <h3>Divisa</h3>
              </div>
              <div className="card-body">
                <p>
                  &quot;De sorte que somos Embaixadores por Cristo, como se
                  Deus por nós vos exortasse. Rogamos-vos, pois, por Cristo
                  que vos reconcilieis com Deus.&quot;{" "}
                  <strong>II Coríntios 5:20</strong>
                </p>
                <p>
                  Nossa base bíblica que nos orienta em cada ação e decisão
                  como embaixadores do Reino.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-target"></i>
                </div>
                <h3>Missão</h3>
              </div>
              <div className="card-body">
                <p>
                  Construir o caráter de meninos e jovens, formando líderes e
                  discípulos que representam o Reino de Deus na terra através
                  de suas vidas, palavras e ações.
                </p>
                <p>
                  Desenvolvemos programas que promovem crescimento espiritual,
                  físico e moral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <blockquote
              style={{
                fontSize: "2.5rem",
                fontStyle: "italic",
                marginBottom: "1rem",
                position: "relative",
              }}
            >
              &quot;Construindo Meninos Para Não Remendar Homens&quot;
            </blockquote>
            <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
              Frederick Douglass
            </p>
          </div>

          <h2 className="section-title" style={{ color: "white" }}>
            Nossos Pilares
          </h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3>Missões</h3>
              <p>
                Participação ativa na obra missionária, sensibilizando os
                jovens para levar a mensagem do evangelho a todos os povos.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Mordomia</h3>
              <p>
                Ensinamentos sobre o uso responsável dos recursos, talentos e
                tempo que Deus nos confiou.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3>Evangelização</h3>
              <p>
                Preparação dos jovens para compartilhar sua fé e testemunhar
                de Cristo em seu dia a dia.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-campground"></i>
              </div>
              <h3>Acampamentos</h3>
              <p>
                Experiências ao ar livre que promovem comunhão, aprendizado
                bíblico e desenvolvimento de habilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Billy Graham Section */}
      <section className="billy-section">
        <div className="container">
          <h2 className="section-title">Nosso Inspirador</h2>

          <div className="billy-card">
            <div className="billy-image">
              <img src="/assets/billygraham2.jpg" alt="Billy Graham" />
            </div>
            <div className="billy-content">
              <h3 className="billy-title">Billy Graham</h3>
              <h4 className="billy-subtitle">
                Um grande embaixador do século XX
              </h4>
              <p className="billy-text">
                Billy Graham foi um dos mais influentes evangelistas do
                século XX, alcançando milhões de pessoas em todo o mundo com
                sua mensagem de fé, esperança e amor. Sua dedicação a Cristo
                e seu compromisso com a integridade o tornaram um exemplo
                para todos os Embaixadores do Rei. Sua vida e ministério
                continuam a inspirar novas gerações a servir a Deus com
                excelência e paixão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso Section */}
      <section className="compromisso-section">
        <div className="container">
          <h2 className="section-title">Nosso Compromisso</h2>

          <div className="compromisso-content">
            <div className="compromisso-grid">
              <div className="compromisso-column">
                <h3>Prometo:</h3>
                <div className="compromisso-text">
                  <p>
                    <strong>Esforçar-me</strong> por uma vida digna de um
                    EMBAIXADOR DO REI;
                  </p>
                  <p>
                    <strong>Guardar</strong> meus lábios da mentira, da
                    impureza e de tomar o nome de Deus em vão;
                  </p>
                  <p>
                    <strong>Conservar</strong> meu corpo limpo e pronto para
                    o serviço;
                  </p>
                  <p>
                    <strong>Estudar</strong> a vida de grandes EMBAIXADORES
                    DO REI na palavra de Deus e nos livros missionários;
                  </p>
                  <p>
                    <strong>Dar</strong> tudo o que puder para o sustento de
                    Missões e, pelo meu trabalho;
                  </p>
                  <p>
                    <strong>Ajudar</strong> a estabelecer o Reino de Deus na
                    terra.
                  </p>
                </div>
              </div>

              <div className="compromisso-column">
                <h3>Prometo (Batizados):</h3>
                <div className="compromisso-text">
                  <p>
                    <strong>Ser</strong> leal a Jesus Cristo,
                  </p>
                  <p>
                    <strong>Viver</strong> para Ele e
                  </p>
                  <p>
                    <strong>Servi-lo</strong> sempre.
                  </p>
                  <p>
                    <strong>Terei</strong> uma vida pura;
                  </p>
                  <p>
                    <strong>Direi</strong> sempre a verdade;
                  </p>
                  <p>
                    <strong>Corrigirei</strong> os meus erros,
                  </p>
                  <p>
                    <strong>Seguirei</strong> a Cristo, o Rei,
                  </p>
                  <p
                    style={{
                      fontStyle: "italic",
                      color: "var(--accent-color)",
                    }}
                  >
                    Se assim não for, Para que nasci?
                  </p>
                </div>
              </div>
            </div>

            <div className="compromisso-final">
              Uma Vez Embaixador, Sempre Embaixador do Rei!!!
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Faça Parte Desta História</h2>
          <p>
            A organização Embaixadores do Rei continua transformando vidas
            de jovens por todo o Brasil, formando líderes cristãos
            comprometidos com os valores do Reino de Deus.
          </p>
          <a
            href="https://wa.link/gujtci"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" style={{ marginRight: "0.5rem" }}></i>
            Saiba Como Participar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Embaixada Billy Graham</h3>
              <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Formando jovens discípulos e líderes para transformar o mundo
                através do amor de Cristo.
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/somossiba"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/er.billygraham/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@EmbaixadaBillyGraham"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://wa.link/gujtci"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Links Úteis</h3>
              <ul className="footer-links">
                <li>
                  <Link href="/recursos">
                    <i className="fas fa-book"></i> Recursos
                  </Link>
                </li>
                <li>
                  <Link href="/historia">
                    <i className="fas fa-history"></i> História
                  </Link>
                </li>
                <li>
                  <Link href="/sobre">
                    <i className="fas fa-info-circle"></i> Sobre
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.embaixadas.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Embaixadas
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contato</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <i className="fas fa-map-marker-alt"></i> Tv.Tupi Caldas
                    - Santa Terezinha
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/gujtci">
                    <i className="fas fa-phone"></i> (75) 99945-0485
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@embaixadabillygraham.org">
                    <i className="fas fa-envelope"></i>{" "}
                    contato@embaixadabillygraham.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>
              &copy; 2025 Embaixada Billy Graham. Todos os direitos
              reservados. | Formando Embaixadores para o Rei Jesus
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

