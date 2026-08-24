# Embaixada Billy Graham — Next.js

Projeto migrado do site estático original (HTML/CSS/JS puro) para **Next.js 16 (App Router) + TypeScript**.

Site original: https://erbillygraham.vercel.app/

> "Uma Vez Embaixador, Sempre Embaixador do Rei!!!"

## O que mudou na migração

- **Framework**: de páginas HTML soltas (`index.html`, `recursos.html`, `historia.html`, `sobre.html`) para rotas do App Router:
  - `/` → Home (antigo `index.html`)
  - `/recursos` → antigo `recursos.html`
  - `/historia` → antigo `historia.html`
  - `/sobre` → antigo `sobre.html`
- **Componentização**: o cabeçalho com menu mobile (hambúrguer + overlay) das páginas internas virou o componente `components/SiteHeader.tsx`; a lógica de "revelar ao rolar a página" virou o hook `components/useScrollReveal.ts`.
- **Interatividade**: os scripts `animar.js`, `recursos.js`, `sob.js` e `history.js` foram reescritos em React (hooks `useEffect`/`useState`) mantendo o mesmo comportamento (menu mobile, scroll suave, parallax, animações ao rolar).
- **Metadados**: favicons, `site.webmanifest` e `<title>` agora são gerenciados pela API de `Metadata` do Next.js (`app/layout.tsx`).
- **Assets**: todas as imagens e PDFs foram movidos para `public/assets` e `public/icones`. Alguns arquivos do projeto original tinham nomes corrompidos (ex.: `Certificado S#U00eanior.pdf`) por causa de um problema de codificação no zip anterior — eles foram renomeados para nomes seguros em kebab-case (ex.: `certificado-senior.pdf`) e os links foram corrigidos.
- **CSS**: cada página mantém sua própria folha de estilos (`app/home.css`, `app/recursos/recursos.css`, `app/historia/historia.css`, `app/sobre/sobre.css`), importada apenas na rota correspondente — assim o Next.js carrega só o CSS necessário por página, sem conflito de classes entre rotas.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com) (mesma plataforma do projeto original) — basta importar o repositório ou rodar `vercel` na raiz do projeto.

## Estrutura

```
app/
  layout.tsx          # layout raiz, metadata, favicons, Font Awesome
  globals.css          # reset mínimo compartilhado
  page.tsx             # Home
  home.css
  recursos/
    page.tsx
    recursos.css
  historia/
    page.tsx
    historia.css
  sobre/
    page.tsx
    sobre.css
components/
  SiteHeader.tsx        # cabeçalho + menu mobile das páginas internas
  useScrollReveal.ts     # hook de animação ao rolar
public/
  assets/                # imagens e PDFs (nomes sanitizados)
  icones/                 # favicons e site.webmanifest
```
