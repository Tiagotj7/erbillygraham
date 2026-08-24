"use client";

import SiteHeader from "@/components/SiteHeader";
import useScrollReveal from "@/components/useScrollReveal";
import "./recursos.css";

const HINO_TEXT = `Sendo embaixador eu quero
Ser leal a Cristo o rei
Conhecer seus mandamentos pertencer a sua grei
A minha organização
Eu desejo ser leal
Minha igreja e seus programas
Honrarei até o final.

Meu propósito está firme
Sou embaixador do rei
O senhor em quem confio
Dá-me plena paz eu sei.

Sendo embaixador eu quero
Ter um corpo limpo e são
Ter a mente pura eu posso e também o coração
Minha alma será pura
Para adorar a Deus
Pois somente a ele devo
Dispensar louvores meus.

Sendo embaixador eu quero
Ser precioso ao meu Jesus,
Trabalhando na seara espalhando a sua luz,
Cristo a mim é mui precioso
Sendo eu Embaixador.
Como conselheiro O acei-to,
Guia, Rei e Salvador.`;

export default function RecursosPage() {
  useScrollReveal([
    "section",
    ".card",
    ".certificado-card",
    ".hino-container",
    ".section-header",
  ]);

  return (
    <>
      <SiteHeader current="recursos" />

      <main>
        <section>
          <div className="section-header">
            <h2>Manuais dos Embaixadores do Rei</h2>
          </div>
          <div className="container-grid">
            <div className="card">
              <img src="/assets/escudeiro.jpeg" alt="Manual do Escudeiro" />
              <h3>Escudeiro</h3>
            </div>
            <div className="card">
              <img src="/assets/arauto2.png" alt="Manual do Arauto" />
              <h3>Arauto</h3>
            </div>
            <div className="card">
              <img src="/assets/senior2.png" alt="Manual do Sênior" />
              <h3>Sênior</h3>
            </div>
            <div className="card">
              <img src="/assets/emerito.png" alt="Manual do Emérito" />
              <h3>Emérito</h3>
            </div>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Certificados dos Embaixadores do Rei</h2>
          </div>
          <div className="container-grid">
            <div className="certificado-card">
              <i className="fas fa-certificate"></i>
              <h3>Certificado Escudeiro</h3>
              <a
                href="/assets/certificado-escudeiro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certificado"
              >
                Download
              </a>
            </div>
            <div className="certificado-card">
              <i className="fas fa-medal"></i>
              <h3>Certificado Arauto</h3>
              <a
                href="/assets/certificado-arauto.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certificado"
              >
                Download
              </a>
            </div>
            <div className="certificado-card">
              <i className="fas fa-award"></i>
              <h3>Certificado Sênior</h3>
              <a
                href="/assets/certificado-senior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certificado"
              >
                Download
              </a>
            </div>
            <div className="certificado-card">
              <i className="fas fa-crown"></i>
              <h3>Certificado Emérito</h3>
              <a
                href="/assets/certificado-emerito.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certificado"
              >
                Download
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Hino dos Embaixadores do Rei</h2>
          </div>
          <div className="hino-container">
            <p className="hino">{HINO_TEXT}</p>
          </div>
          <div className="section-header">
            <h3>Cifras</h3>
          </div>
          <div className="botao-cifra">
            <a
              href="/assets/musicas-cifradas-embaixadores-do-rei.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download das Cifras
            </a>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Edições Especiais</h2>
          </div>
          <div className="container-grid">
            <div className="card">
              <img src="/assets/manual-100-anos.png" alt="Manual 100 Anos" />
              <h3>100 Anos</h3>
            </div>
            <div className="card">
              <img
                src="/assets/manual-o-embaixador-1.png"
                alt="O Embaixador Vol. 1"
              />
              <h3>O Embaixador Vol. 1</h3>
            </div>
            <div className="card">
              <img
                src="/assets/manual-o-embaixador-2.png"
                alt="O Embaixador Vol. 2"
              />
              <h3>O Embaixador Vol. 2</h3>
            </div>
            <div className="card">
              <img
                src="/assets/manual-o-embaixador-3.png"
                alt="O Embaixador Vol. 3"
              />
              <h3>O Embaixador Vol. 3</h3>
            </div>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Material do Conselheiro</h2>
          </div>
          <div className="container-grid">
            <div className="card">
              <img
                src="/assets/manual-do-aspirante.png"
                alt="Manual do Aspirante"
              />
              <h3>Manual do Aspirante</h3>
            </div>
            <div className="card">
              <img
                src="/assets/treinamento-de-conselheiro.png"
                alt="Treinamento de Conselheiro"
              />
              <h3>Treinamento</h3>
            </div>
            <div className="card">
              <img
                src="/assets/manual-conselheiro-2.png"
                alt="Manual do Conselheiro 2"
              />
              <h3>Manual Vol. 2</h3>
            </div>
            <div className="card">
              <img
                src="/assets/manual-conselheiro.png"
                alt="Manual do Conselheiro"
              />
              <h3>Manual Vol. 1</h3>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Embaixada Billy Graham. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
