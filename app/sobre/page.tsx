"use client";

import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import useScrollReveal from "@/components/useScrollReveal";
import "./sobre.css";

export default function SobrePage() {
  useScrollReveal([
    ".info-section:not(:first-child)",
    ".info-card",
    ".valor-card",
  ]);

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll<HTMLElement>(
        ".organizar-logo img"
      );
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <>
      <SiteHeader current="sobre" />

      <div className="container">
        <h1 className="page-title">Sobre os Embaixadores do Rei</h1>

        <div className="organizar-logo">
          <img src="/assets/sobre-er.png" alt="Embaixadores do Rei" />
        </div>

        <section className="info-section">
          <h3>O Que é a Organização Embaixadores do Rei?</h3>
          <p>
            Embaixadores do Rei é uma organização batista cujas atividades
            visam os desenvolvimentos físicos, morais e espirituais dos
            meninos de 9 a 17 anos. É uma organização missionária que
            procura conduzir os seus membros na participação ativa de
            Missões. Seu programa abrange: Missões, Mordomia, Evangelização,
            Recreação e Acampamentos.
          </p>
        </section>

        <div className="card-container">
          <div className="info-card">
            <div className="info-card-icon">📜</div>
            <h3>Como surgiu a Organização ER?</h3>
            <p>
              Em 1908, os batistas do Sul dos Estados Unidos se despertaram
              para a necessidade de criar nas igrejas um ambiente mais
              apropriado para meninos de 9 a 16 anos. Sentia-se uma carência
              de melhor atendimento aos interesses e necessidades específicos
              dessa faixa etária. Da ideia, originou-se a organização
              Embaixadores do Rei.
            </p>
          </div>

          <div className="info-card">
            <div className="info-card-icon">👑</div>
            <h3>Por que o Nome Embaixadores do Rei?</h3>
            <p>
              Um Embaixador é aquele que representa o seu governo em outro
              país. A tarefa do Embaixador é interpretar a atitude do seu
              povo para com o povo de outras nações. Esta ideia é fundamental
              na organização Embaixadores do Rei. Um verdadeiro Embaixador do
              Rei zelará pelos interesses do seu Rei Jesus, aqui na terra, e
              procurará, por todos os meios, mostrar aos outros o que
              significa ser cristão.
            </p>
            <p>
              O nome Embaixadores do Rei (Royal Ambassador), foi inspirado no
              hino Mensagem Real (The King&apos;s Business). Foi recomendado
              e aceito como nome oficial para essa organização em maio de
              1908. O nome Embaixadores do Rei é usado em vários países do
              mundo.
            </p>
          </div>

          <div className="info-card">
            <div className="info-card-icon">🌎</div>
            <h3>Como a Organização ER chegou ao Brasil?</h3>
            <p>
              Embaixadores do Rei teve o seu início no Brasil em 1948, graças
              ao pioneirismo do incansável missionário William Alvin Hatton.
              A organização contou, inicialmente, com o auxílio da União
              Feminina Missionária Batista do Brasil, passando desde
              fevereiro de 1950 a ser promovida pela JUERP (Junta de
              Educação Religiosa e Publicações) da Convenção Batista
              Brasileira e a partir de 1978 pela UHBB. Deus tem abençoado
              sobremaneira a organização Embaixadores do Rei, que cresce ano
              após ano. O progresso deve-se principalmente aos conselheiros
              de todos esses anos.
            </p>
          </div>
        </div>

        <section className="info-section">
          <h3>O Objetivo da Organização</h3>
          <p>
            O objetivo da organização Embaixadores do Rei é desenvolver o
            caráter cristão dos meninos de tal maneira que se tornem crentes
            ativos e consagrados, possuídos de um espírito intensamente
            evangelístico e missionário.
          </p>

          <p>Para alcançar o seu objetivo, a organização oferece o seguinte:</p>
          <ul className="objetivos-list">
            <li>
              Um sistema de postos atraente e prático, que ajuda os meninos a
              conhecerem mais a Bíblia e a obra missionária;
            </li>
            <li>
              Um programa de atividades próprias para os Embaixadores do Rei
              como Serviço Real, acampamentos e excursões;
            </li>
            <li>Vários tipos de reuniões, numa programação agradável e variada.</li>
          </ul>
        </section>

        <section className="valores-section">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--primary-color)",
            }}
          >
            Nossos Pilares
          </h2>

          <div className="valores-container">
            <div className="valor-card">
              <div className="icon">🙏</div>
              <h3>Missões</h3>
              <p>
                Participação ativa na obra missionária, tanto local quanto
                global, sensibilizando os meninos para a importância de
                levar a mensagem do evangelho a todos os povos.
              </p>
            </div>

            <div className="valor-card">
              <div className="icon">💰</div>
              <h3>Mordomia</h3>
              <p>
                Ensinamentos sobre o uso responsável dos recursos, talentos e
                tempo que Deus nos confiou, incentivando uma vida de
                generosidade e serviço.
              </p>
            </div>

            <div className="valor-card">
              <div className="icon">📣</div>
              <h3>Evangelização</h3>
              <p>
                Preparação dos meninos para compartilhar sua fé e testemunhar
                de Cristo através de palavras e ações em seu dia a dia.
              </p>
            </div>

            <div className="valor-card">
              <div className="icon">⛺</div>
              <h3>Acampamentos</h3>
              <p>
                Experiências ao ar livre que promovem comunhão, aprendizado
                bíblico e desenvolvimento de habilidades em um ambiente
                natural e divertido.
              </p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2>Faça Parte Desta História</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto 2rem auto" }}>
            A organização Embaixadores do Rei continua transformando vidas
            de meninos por todo o Brasil, formando líderes cristãos
            comprometidos com os valores do Reino de Deus.
          </p>
          <a
            href="https://wa.link/gujtci"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba Como Participar
          </a>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Embaixadores do Rei - Embaixada Billy Graham</p>
          <p>Formando Embaixadores para o Rei Jesus</p>
        </div>
      </footer>
    </>
  );
}
