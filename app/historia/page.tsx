"use client";

import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import useScrollReveal from "@/components/useScrollReveal";
import "./historia.css";

export default function HistoriaPage() {
  useScrollReveal([
    ".history-section",
    ".history-content",
    ".timeline",
    ".timeline-item",
    ".image-container",
  ]);

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const heroElements = document.querySelectorAll<HTMLElement>(".hero");
      heroElements.forEach((element) => {
        const speed = 0.3;
        element.style.backgroundPositionY = `calc(50% + ${
          scrolled * speed
        }px)`;
      });
    };
    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <>
      <SiteHeader current="historia" />

      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__badge">Nossa trajetória</span>
          <h1>História dos Embaixadores do Rei</h1>
          <p>
            Uma jornada através do tempo: conhecendo as raízes e o legado de
            uma organização centenária
          </p>
        </div>
      </section>

      <div className="container">
        {/* Início nos EUA */}
        <section className="history-section">
          <h2 className="section-title">O Início nos Estados Unidos</h2>
          <div className="history-content">
            <p>
              <strong>As Origens da Organização (1883-1908)</strong>
            </p>
            <p>
              Tudo começou em 1883. Um grupo de rapazes de 12 a 14 anos, da
              cidade de Owesboro, Kentucky, nos EUA, se reunia para estudar
              missões e orar pelos missionários. Em outubro de 1907, a União
              Feminina Missionária criou um Comitê de Trabalho Missionário
              para meninos e, inspiradas pela canção &quot;The King&apos;s
              Business&quot;, sugeriram o nome <em>Royal Ambassadors</em>. Em
              maio de 1908, foi formalizado o patrocínio à organização
              missionária para meninos de 9 a 16 anos.
            </p>
          </div>
        </section>

        {/* Timeline EUA */}
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">1908</div>
            <p>Fundação da Royal Ambassadors nos EUA</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">1909</div>
            <p>45 embaixadas em funcionamento</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">1915</div>
            <p>500 embaixadas e 4.500 embaixadores</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">1917</div>
            <p>Primeiro acampamento na Praia da Virgínia</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">1933</div>
            <p>25º aniversário: 41.864 embaixadores</p>
          </div>
        </div>

        {/* William Alvin Hatton */}
        <section className="history-section">
          <h2 className="section-title">O Pioneiro - William Alvin Hatton</h2>
          <div className="image-container">
            <img src="/assets/alvinhatton.png" alt="William Alvin Hatton" />
          </div>
          <div className="history-content">
            <p>
              <strong>Nascimento e Vocação</strong> – Alvin nasceu em
              14/02/1920, em Abilene, Texas. Ainda criança se envolveu com a
              Embaixada local e foi eleito Embaixador-Chefe aos 10 anos.
            </p>
            <p>
              <strong>Chamado Missionário</strong> – Inspirado por estudos
              como o de David Livingstone, Alvin desejava ser missionário
              desde a adolescência.
            </p>
          </div>
        </section>

        {/* Vinda ao Brasil */}
        <section className="history-section">
          <h2 className="section-title">A Vinda para o Brasil</h2>
          <div className="image-container">
            <img
              src="/assets/william-alvin-hatton-br.png"
              alt="Hatton no Brasil"
            />
          </div>
          <div className="history-content">
            <p>
              <strong>Convite Brasileiro</strong> – Em 1947, após reunião em
              St. Louis, Alvin recebeu incentivo de J. Ivyloy Bishop para
              atuar no Brasil.
            </p>
            <p>
              <strong>Viagem</strong> – Casou-se em 20/05/1947 e embarcou
              para o Brasil em 04/03/1948 no cargueiro{" "}
              <em>Javanese Prince</em>.
            </p>
          </div>
        </section>

        {/* Início no Brasil */}
        <section className="history-section">
          <h2 className="section-title">O Início no Brasil</h2>
          <div className="history-content">
            <p>
              Em 1948, com apoio da UFMB e da JUERP, Alvin fundou a primeira
              embaixada na Igreja Batista da Tijuca, liderada por David
              Gomes, com ajuda de Paulo Spurgeon de Paula.
            </p>
          </div>
        </section>

        {/* Timeline Brasil */}
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">07/08/1948</div>
            <p>Primeira reunião na Tijuca</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">25/08/1948</div>
            <p>Fundação oficial no Brasil</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">25/02/1950</div>
            <p>Criação do Departamento de ER</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">01/1951</div>
            <p>
              Lançamento da revista <em>O Embaixador</em>
            </p>
          </div>
        </div>

        {/* Sítio do Sossego */}
        <section className="history-section">
          <h2 className="section-title">O Sítio do Sossego</h2>
          <div className="image-container">
            <img src="/assets/sitio-do-sossego.png" alt="Sítio do Sossego" />
          </div>
          <div className="history-content">
            <p>
              Adquirido em agosto de 1950, sediou acampamentos nacionais,
              destacando o 1º nacional em julho de 1957.
            </p>
          </div>
        </section>

        {/* Biografia Download */}
        <section className="history-section">
          <h2 className="section-title">
            Biografia de William Alvin Hatton
          </h2>
          <div className="history-content">
            <p>Para saber mais, baixe a biografia completa em PDF:</p>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <a
                href="/assets/biografia-william-alvin-hatton.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                Download da Biografia
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Embaixadores do Rei - Embaixada Billy Graham</p>
          <p>Preservando o legado, inspirando o futuro</p>
        </div>
      </footer>
    </>
  );
}
