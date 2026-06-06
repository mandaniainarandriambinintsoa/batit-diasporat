const fs = require("fs/promises");
const path = require("path");
const { pathToFileURL } = require("url");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (_error) {
  ({ chromium } = require("d:/webApp/madavoyage_design_system/node_modules/playwright"));
}

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "assets", "design-directions");
const imageDir = path.join(outputDir, "source-images");

const images = {
  hero: pathToFileURL(path.join(imageDir, "renovation-hero-team.png")).href,
  beforeAfter: pathToFileURL(path.join(imageDir, "renovation-before-after.png")).href,
  supervision: pathToFileURL(path.join(imageDir, "renovation-supervision.png")).href,
};

const directions = [
  {
    id: "v2-01-diaspora-assurance",
    label: "Direction V2 A",
    name: "Diaspora Assurance",
    brand: "Bati Diaspora",
    eyebrow: "Construction encadrée pour la diaspora",
    title: "Construisez au pays sans avancer à l'aveugle.",
    subtitle:
      "Devis détaillé, planning visible, reporting photo/vidéo et paiements par étapes validées pour suivre votre maison même depuis l'étranger.",
    primary: "Faire étudier mon projet",
    secondary: "Voir le suivi chantier",
    theme: "light",
    bg: "#f5efe5",
    text: "#141820",
    muted: "#756b5f",
    surface: "#fffaf2",
    surface2: "#111827",
    accent: "#f26a21",
    accent2: "#1e3a5f",
    heroImage: images.hero,
    proofImage: images.beforeAfter,
    supervisionImage: images.supervision,
    bestFor: "La plus commerciale : directe, lumineuse, facile a comprendre pour un prospect diaspora.",
  },
  {
    id: "v2-02-command-center",
    label: "Direction V2 B",
    name: "Command Center",
    brand: "Bati Control",
    eyebrow: "Pilotage chantier à distance",
    title: "Un chantier au pays piloté comme un vrai projet.",
    subtitle:
      "Chaque étape importante est documentée avant la suite : photos, vidéos, achats, planning et validation des jalons.",
    primary: "Planifier un appel",
    secondary: "Voir les preuves",
    theme: "dark",
    bg: "#070b12",
    text: "#f8fafc",
    muted: "#a5adba",
    surface: "#101827",
    surface2: "#f8fafc",
    accent: "#f59e0b",
    accent2: "#38bdf8",
    heroImage: images.supervision,
    proofImage: images.beforeAfter,
    supervisionImage: images.hero,
    bestFor: "La plus premium : elle vend le contrôle, la méthode et le suivi comme un service haut de gamme.",
  },
  {
    id: "v2-03-maison-preuves",
    label: "Direction V2 C",
    name: "Maison + Preuves",
    brand: "Maison Suivie",
    eyebrow: "Maison familiale, preuves d'avancement",
    title: "Votre maison au pays ne devrait pas dépendre de promesses floues.",
    subtitle:
      "Pour construire loin de chez vous, vous avez besoin d'un cadre clair : devis, jalons, responsable unique et preuves régulières.",
    primary: "Décrire ma maison",
    secondary: "Comprendre les jalons",
    theme: "editorial",
    bg: "#fbf7ef",
    text: "#1f2c28",
    muted: "#776e63",
    surface: "#ffffff",
    surface2: "#20483e",
    accent: "#2f7d60",
    accent2: "#c46b3b",
    heroImage: images.beforeAfter,
    proofImage: images.supervision,
    supervisionImage: images.hero,
    bestFor: "La plus émotionnelle : elle parle à ceux qui ont déjà entendu trop d'histoires de chantiers bloqués.",
  },
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chip(label, value) {
  return `<div class="chip"><strong>${esc(label)}</strong><span>${esc(value)}</span></div>`;
}

function pain(title, text) {
  return `<article class="pain-card"><span></span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`;
}

function service(title, text, icon) {
  return `<article class="service-card"><div class="service-icon">${icon}</div><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`;
}

function step(number, title, text, status) {
  return `
    <li>
      <div class="step-number">${number}</div>
      <div>
        <strong>${esc(title)}</strong>
        <p>${esc(text)}</p>
        <em>${esc(status)}</em>
      </div>
    </li>`;
}

function render(direction) {
  const isDark = direction.theme === "dark";
  const isEditorial = direction.theme === "editorial";

  const heroMediaClass = isEditorial ? "hero-media editorial-media" : "hero-media";

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(direction.name)}</title>
  <style>
    :root {
      --bg: ${direction.bg};
      --text: ${direction.text};
      --muted: ${direction.muted};
      --surface: ${direction.surface};
      --surface-2: ${direction.surface2};
      --accent: ${direction.accent};
      --accent-2: ${direction.accent2};
      --line: color-mix(in srgb, var(--muted) 18%, transparent);
      --shadow: 0 34px 90px color-mix(in srgb, #000 18%, transparent);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: #111827;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
    }

    .page {
      width: 1440px;
      min-height: 5060px;
      margin: 0 auto;
      background:
        radial-gradient(circle at 12% 8%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 30%),
        radial-gradient(circle at 88% 9%, color-mix(in srgb, var(--accent-2) 15%, transparent), transparent 32%),
        var(--bg);
      overflow: hidden;
    }

    .wrap { width: 1200px; margin: 0 auto; }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 34px 0;
      position: relative;
      z-index: 4;
      color: var(--text);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 950;
      font-size: 26px;
      letter-spacing: -0.05em;
    }

    .mark {
      width: 48px;
      height: 48px;
      border-radius: 15px;
      display: grid;
      place-items: center;
      background: var(--accent);
      color: #fff;
      font-weight: 950;
      box-shadow: 0 18px 42px color-mix(in srgb, var(--accent) 38%, transparent);
    }

    .links {
      display: flex;
      align-items: center;
      gap: 34px;
      color: var(--muted);
      font-weight: 700;
      font-size: 14px;
    }

    .nav-cta {
      padding: 14px 22px;
      border-radius: 999px;
      background: var(--accent);
      color: #fff;
      font-weight: 900;
    }

    .hero {
      display: grid;
      grid-template-columns: 0.93fr 1.07fr;
      gap: 56px;
      align-items: center;
      padding: 44px 0 96px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: .15em;
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 22px;
    }

    .eyebrow:before {
      content: "";
      width: 42px;
      height: 2px;
      border-radius: 99px;
      background: var(--accent);
    }

    h1 {
      margin: 0;
      font-size: 78px;
      line-height: .92;
      letter-spacing: -0.075em;
      max-width: 680px;
    }

    .lead {
      margin: 28px 0 0;
      max-width: 650px;
      color: var(--muted);
      font-size: 22px;
      line-height: 1.52;
      letter-spacing: -0.025em;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 34px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 17px 24px;
      border-radius: 999px;
      font-size: 15px;
      font-weight: 950;
      letter-spacing: -0.02em;
    }

    .btn.primary { background: var(--accent); color: #fff; box-shadow: 0 22px 46px color-mix(in srgb, var(--accent) 30%, transparent); }
    .btn.secondary { border: 1px solid var(--line); color: var(--text); background: color-mix(in srgb, var(--surface) 55%, transparent); }

    .hero-chips {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin-top: 42px;
      max-width: 640px;
    }

    .chip {
      padding: 18px 20px;
      border-radius: 22px;
      background: color-mix(in srgb, var(--surface) 88%, transparent);
      border: 1px solid var(--line);
      box-shadow: 0 16px 42px color-mix(in srgb, #000 7%, transparent);
    }

    .chip strong {
      display: block;
      font-size: 16px;
      letter-spacing: -0.035em;
    }

    .chip span {
      display: block;
      color: var(--muted);
      font-size: 12px;
      margin-top: 5px;
    }

    .hero-media {
      position: relative;
      min-height: 720px;
      border-radius: 46px;
      overflow: hidden;
      box-shadow: var(--shadow);
      background: #111827;
      border: 1px solid color-mix(in srgb, #fff 12%, transparent);
    }

    .hero-media img {
      width: 100%;
      height: 720px;
      object-fit: cover;
      display: block;
      filter: saturate(1.02) contrast(1.02);
    }

    .hero-media:after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, transparent 35%, rgba(0,0,0,.65)),
        linear-gradient(90deg, rgba(0,0,0,.25), transparent 46%);
      pointer-events: none;
    }

    .remote-panel {
      position: absolute;
      left: 34px;
      right: 34px;
      bottom: 34px;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      padding: 16px;
      border-radius: 30px;
      background: rgba(10, 15, 25, .72);
      border: 1px solid rgba(255,255,255,.18);
      backdrop-filter: blur(22px);
      color: #fff;
    }

    .remote-panel .status {
      padding: 16px;
      border-radius: 21px;
      background: rgba(255,255,255,.10);
    }

    .remote-panel small {
      display: block;
      color: rgba(255,255,255,.62);
      text-transform: uppercase;
      letter-spacing: .12em;
      font-size: 10px;
      font-weight: 900;
    }

    .remote-panel strong {
      display: block;
      margin-top: 9px;
      font-size: 20px;
      letter-spacing: -0.045em;
    }

    .floating-proof {
      position: absolute;
      z-index: 3;
      top: 34px;
      left: 34px;
      width: 280px;
      padding: 22px;
      border-radius: 28px;
      color: #fff;
      background: rgba(9, 12, 18, .70);
      border: 1px solid rgba(255,255,255,.18);
      backdrop-filter: blur(20px);
    }

    .floating-proof b {
      display: block;
      font-size: 46px;
      letter-spacing: -0.08em;
    }

    .floating-proof p {
      margin: 8px 0 0;
      color: rgba(255,255,255,.72);
      line-height: 1.45;
    }

    section { padding: 80px 0; }

    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 70px;
      margin-bottom: 38px;
    }

    .section-head h2 {
      margin: 0;
      max-width: 760px;
      font-size: 56px;
      line-height: .98;
      letter-spacing: -0.065em;
    }

    .section-head p {
      margin: 0;
      max-width: 420px;
      color: var(--muted);
      line-height: 1.56;
      font-size: 18px;
    }

    .pain-grid, .service-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .pain-card, .service-card {
      position: relative;
      min-height: 255px;
      padding: 32px;
      border-radius: 32px;
      background: color-mix(in srgb, var(--surface) 88%, transparent);
      border: 1px solid var(--line);
      box-shadow: 0 20px 52px color-mix(in srgb, #000 7%, transparent);
      overflow: hidden;
    }

    .pain-card span {
      display: block;
      width: 52px;
      height: 6px;
      border-radius: 99px;
      background: var(--accent);
      margin-bottom: 44px;
    }

    .pain-card h3, .service-card h3 {
      margin: 0;
      font-size: 27px;
      line-height: 1.05;
      letter-spacing: -0.05em;
    }

    .pain-card p, .service-card p {
      margin: 18px 0 0;
      color: var(--muted);
      line-height: 1.56;
      font-size: 15px;
    }

    .service-icon {
      width: 50px;
      height: 50px;
      display: grid;
      place-items: center;
      margin-bottom: 46px;
      border-radius: 18px;
      color: #fff;
      background: var(--accent);
      font-weight: 950;
    }

    .proof-system {
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 24px;
      align-items: stretch;
    }

    .image-card {
      position: relative;
      overflow: hidden;
      min-height: 650px;
      border-radius: 42px;
      background: #111827;
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .image-card img {
      width: 100%;
      height: 650px;
      object-fit: cover;
      display: block;
    }

    .image-card:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,.72));
    }

    .image-caption {
      position: absolute;
      z-index: 2;
      left: 30px;
      right: 30px;
      bottom: 30px;
      color: #fff;
    }

    .image-caption h3 {
      margin: 0;
      font-size: 42px;
      line-height: 1;
      letter-spacing: -0.06em;
    }

    .image-caption p {
      margin: 14px 0 0;
      max-width: 560px;
      color: rgba(255,255,255,.75);
      line-height: 1.5;
    }

    .proof-stack {
      display: grid;
      gap: 18px;
    }

    .proof-card {
      padding: 30px;
      border-radius: 32px;
      background: color-mix(in srgb, var(--surface) 90%, transparent);
      border: 1px solid var(--line);
      min-height: 147px;
    }

    .proof-card small {
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: .12em;
      font-size: 11px;
      font-weight: 950;
    }

    .proof-card strong {
      display: block;
      margin-top: 14px;
      font-size: 28px;
      line-height: 1;
      letter-spacing: -0.055em;
    }

    .proof-card p {
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.48;
    }

    .milestone {
      border-radius: 46px;
      padding: 42px;
      background: color-mix(in srgb, var(--surface) 88%, transparent);
      border: 1px solid var(--line);
      box-shadow: 0 22px 70px color-mix(in srgb, #000 8%, transparent);
    }

    .milestone ol {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
      padding: 0;
      margin: 0;
    }

    .milestone li {
      min-height: 230px;
      padding: 22px;
      border-radius: 28px;
      background: color-mix(in srgb, var(--accent) 10%, var(--surface));
      border: 1px solid color-mix(in srgb, var(--accent) 24%, transparent);
    }

    .step-number {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      margin-bottom: 42px;
      border-radius: 50%;
      color: #fff;
      background: var(--accent);
      font-weight: 950;
      font-size: 13px;
    }

    .milestone strong {
      display: block;
      font-size: 20px;
      line-height: 1.05;
      letter-spacing: -0.04em;
    }

    .milestone p {
      margin: 12px 0;
      color: var(--muted);
      line-height: 1.42;
      font-size: 13px;
    }

    .milestone em {
      display: inline-flex;
      font-style: normal;
      font-size: 11px;
      color: var(--accent);
      font-weight: 950;
      text-transform: uppercase;
      letter-spacing: .08em;
    }

    .reporting {
      display: grid;
      grid-template-columns: .85fr 1.15fr;
      gap: 24px;
      align-items: stretch;
    }

    .report-panel {
      padding: 36px;
      border-radius: 42px;
      background: var(--surface-2);
      color: ${isDark ? "#0f172a" : "#fff"};
      min-height: 650px;
      overflow: hidden;
      position: relative;
    }

    .report-panel h2 {
      margin: 0;
      font-size: 54px;
      line-height: .98;
      letter-spacing: -0.065em;
      max-width: 480px;
    }

    .report-panel p {
      max-width: 470px;
      line-height: 1.55;
      color: ${isDark ? "rgba(15, 23, 42, .72)" : "rgba(255,255,255,.74)"};
    }

    .dashboard {
      display: grid;
      gap: 14px;
      margin-top: 42px;
    }

    .dash-row {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 20px;
      padding: 18px 18px;
      border-radius: 20px;
      background: ${isDark ? "rgba(15, 23, 42, .08)" : "rgba(255,255,255,.10)"};
      border: 1px solid ${isDark ? "rgba(15, 23, 42, .12)" : "rgba(255,255,255,.16)"};
    }

    .dash-row strong {
      display: block;
      font-size: 18px;
      letter-spacing: -0.035em;
    }

    .dash-row span {
      color: ${isDark ? "rgba(15, 23, 42, .60)" : "rgba(255,255,255,.62)"};
      font-size: 12px;
    }

    .dash-row b {
      font-size: 12px;
      color: #fff;
      background: var(--accent);
      border-radius: 999px;
      padding: 9px 12px;
    }

    .supervision-card {
      border-radius: 42px;
      overflow: hidden;
      min-height: 650px;
      position: relative;
      background: #111827;
      box-shadow: var(--shadow);
    }

    .supervision-card img {
      width: 100%;
      height: 650px;
      object-fit: cover;
      display: block;
    }

    .supervision-card:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 48%, rgba(0,0,0,.66));
    }

    .photo-strip {
      position: absolute;
      z-index: 2;
      left: 26px;
      right: 26px;
      bottom: 26px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .photo-strip div {
      min-height: 112px;
      border-radius: 20px;
      background: rgba(255,255,255,.14);
      border: 1px solid rgba(255,255,255,.18);
      color: #fff;
      padding: 16px;
      backdrop-filter: blur(18px);
    }

    .photo-strip strong {
      display: block;
      font-size: 15px;
      letter-spacing: -0.03em;
    }

    .photo-strip span {
      display: block;
      margin-top: 20px;
      font-size: 12px;
      color: rgba(255,255,255,.66);
    }

    .diaspora {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 24px;
      align-items: stretch;
    }

    .world-card, .form-card {
      border-radius: 42px;
      padding: 42px;
      background: color-mix(in srgb, var(--surface) 90%, transparent);
      border: 1px solid var(--line);
      min-height: 620px;
    }

    .world-card {
      background:
        radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 34%),
        color-mix(in srgb, var(--surface-2) 92%, transparent);
      color: ${isDark ? "#0f172a" : "#fff"};
      position: relative;
      overflow: hidden;
    }

    .world-card h2, .form-card h2 {
      margin: 0;
      font-size: 50px;
      line-height: .98;
      letter-spacing: -0.065em;
    }

    .world-card p {
      max-width: 460px;
      color: ${isDark ? "rgba(15, 23, 42, .68)" : "rgba(255,255,255,.72)"};
      line-height: 1.55;
    }

    .rings {
      position: absolute;
      right: 54px;
      bottom: 62px;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      border: 1px solid color-mix(in srgb, var(--accent) 48%, transparent);
    }

    .rings:before, .rings:after {
      content: "";
      position: absolute;
      inset: 70px;
      border-radius: 50%;
      border: 1px solid color-mix(in srgb, var(--accent) 42%, transparent);
    }

    .rings:after { inset: 142px; }

    .continent-tags {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 230px;
      max-width: 540px;
    }

    .continent-tags span {
      padding: 12px 16px;
      border-radius: 999px;
      color: ${isDark ? "#0f172a" : "#fff"};
      background: ${isDark ? "rgba(15, 23, 42, .08)" : "rgba(255,255,255,.13)"};
      border: 1px solid ${isDark ? "rgba(15, 23, 42, .12)" : "rgba(255,255,255,.18)"};
      font-weight: 800;
      font-size: 13px;
    }

    .form-card p {
      margin: 14px 0 0;
      color: var(--muted);
      line-height: 1.5;
      max-width: 540px;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 28px;
    }

    .field {
      padding: 17px 18px;
      border-radius: 17px;
      border: 1px solid var(--line);
      color: var(--muted);
      background: color-mix(in srgb, var(--surface) 92%, transparent);
      font-size: 13px;
    }

    .field.big { grid-column: 1 / -1; min-height: 104px; }

    .form-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      margin-top: 24px;
    }

    .form-foot small {
      color: var(--muted);
      line-height: 1.42;
      max-width: 330px;
    }

    .final {
      margin: 70px 0 46px;
      padding: 52px;
      border-radius: 46px;
      background: var(--surface-2);
      color: ${isDark ? "#0f172a" : "#fff"};
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 60px;
    }

    .final h2 {
      margin: 0;
      max-width: 760px;
      font-size: 54px;
      line-height: .98;
      letter-spacing: -0.065em;
    }

    .final p {
      color: ${isDark ? "rgba(15, 23, 42, .66)" : "rgba(255,255,255,.68)"};
      max-width: 360px;
      line-height: 1.55;
    }

    .direction-note {
      margin: 0 0 42px;
      padding: 22px 26px;
      border: 1px dashed color-mix(in srgb, var(--accent) 42%, transparent);
      border-radius: 24px;
      color: var(--muted);
      background: color-mix(in srgb, var(--surface) 72%, transparent);
    }

    .footer {
      border-top: 1px solid var(--line);
      padding: 38px 0 54px;
      display: flex;
      justify-content: space-between;
      color: var(--muted);
      font-size: 14px;
    }

    ${isDark ? `
      .btn.secondary { color: #f8fafc; background: rgba(255,255,255,.04); }
      .hero-media, .image-card, .supervision-card { border-color: rgba(255,255,255,.10); }
      .chip, .pain-card, .service-card, .proof-card, .milestone, .form-card { background: rgba(16,24,39,.90); }
      .field { background: rgba(255,255,255,.03); }
    ` : ""}
  </style>
</head>
<body>
  <main class="page">
    <div class="wrap">
      <nav class="nav">
        <div class="brand"><span class="mark">BD</span>${esc(direction.brand)}</div>
        <div class="links">
          <span>Suivi</span>
          <span>Jalons</span>
          <span>Preuves</span>
          <span>Projet</span>
        </div>
        <div class="nav-cta">Evaluation gratuite</div>
      </nav>

      <header class="hero">
        <div>
          <div class="eyebrow">${esc(direction.eyebrow)}</div>
          <h1>${esc(direction.title)}</h1>
          <p class="lead">${esc(direction.subtitle)}</p>
          <div class="actions">
            <span class="btn primary">${esc(direction.primary)}</span>
            <span class="btn secondary">${esc(direction.secondary)}</span>
          </div>
          <div class="hero-chips">
            ${chip("Devis détaillé", "Avant tout engagement")}
            ${chip("Jalons validés", "Paiement par étapes")}
            ${chip("Photos / vidéos", "Preuves régulières")}
            ${chip("Responsable unique", "Un suivi centralisé")}
          </div>
        </div>
        <div class="${heroMediaClass}">
          <img src="${direction.heroImage}" alt="" />
          <div class="floating-proof">
            <b>5</b>
            <p>points de contrôle avant la prochaine étape du chantier.</p>
          </div>
          <div class="remote-panel">
            <div class="status"><small>Jalon</small><strong>Fondations validées</strong></div>
            <div class="status"><small>Preuves</small><strong>18 photos reçues</strong></div>
            <div class="status"><small>Paiement</small><strong>Étape 2 en attente</strong></div>
          </div>
        </div>
      </header>

      <section>
        <div class="section-head">
          <h2>Le problème n'est pas seulement de construire. C'est de construire à distance.</h2>
          <p>Quand vous êtes loin, le chantier doit remplacer les promesses par des preuves visibles, datées et compréhensibles.</p>
        </div>
        <div class="pain-grid">
          ${pain("Argent envoyé, preuves insuffisantes", "Des photos rares, des explications floues et un budget qui part sans vision claire.")}
          ${pain("Chantier bloqué sans alerte", "Un retard peut rester invisible pendant des semaines quand personne ne rend compte.")}
          ${pain("Décisions prises trop loin de vous", "Matériaux, finitions, priorités : tout peut changer si le projet n'est pas cadré.")}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Une construction clé en main encadrée pour la diaspora.</h2>
          <p>Le site doit vendre un système : contrat, suivi, preuves, validation et contact clair. Pas une simple promesse de BTP.</p>
        </div>
        <div class="service-grid">
          ${service("Contrat et devis avant travaux", "Chaque poste est listé : gros oeuvre, toiture, plomberie, électricité, finitions et délais.", "01")}
          ${service("Paiements par jalons", "Le budget avance selon les étapes validées, pas en un seul versement sans contrôle.", "02")}
          ${service("Reporting photo et vidéo", "Vous recevez des preuves régulières de l'avancement réel du chantier.", "03")}
          ${service("Responsable unique", "Une personne suit votre dossier et centralise les décisions importantes.", "04")}
          ${service("Validation avant décaissement", "Les jalons importants sont documentés avant de passer au paiement suivant.", "05")}
          ${service("Documents du chantier", "Factures, achats, planning et comptes rendus restent attachés au projet.", "06")}
        </div>
      </section>

      <section class="proof-system">
        <div class="image-card">
          <img src="${direction.proofImage}" alt="" />
          <div class="image-caption">
            <h3>La confiance ne doit pas reposer sur des messages vagues.</h3>
            <p>Elle doit reposer sur des photos, des vidéos, un planning et des jalons que le client peut comprendre depuis l'étranger.</p>
          </div>
        </div>
        <div class="proof-stack">
          <div class="proof-card"><small>Preuve 01</small><strong>Photos datées du chantier</strong><p>Chaque étape importante doit être visible, pas seulement annoncée.</p></div>
          <div class="proof-card"><small>Preuve 02</small><strong>Vidéos d'avancement</strong><p>Le client voit le volume réel, les finitions et les zones encore ouvertes.</p></div>
          <div class="proof-card"><small>Preuve 03</small><strong>Factures et achats documentés</strong><p>Les matériaux importants sont suivis avec des pièces justificatives.</p></div>
          <div class="proof-card"><small>Preuve 04</small><strong>Compte rendu clair</strong><p>Ce qui est fait, ce qui bloque, ce qui doit être validé ensuite.</p></div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Comment votre maison avance, même si vous êtes loin.</h2>
          <p>La page doit montrer un parcours rassurant : rien d'automatique, rien de magique, mais un cadre professionnel.</p>
        </div>
        <div class="milestone">
          <ol>
            ${step("01", "Vous décrivez le projet", "Terrain, pays, surface, budget cible et délai souhaité.", "Demande")}
            ${step("02", "Faisabilité terrain", "Visite, contraintes, accès, premières estimations.", "Contrôle")}
            ${step("03", "Devis détaillé", "Budget par poste, planning prévisionnel, conditions.", "Validation")}
            ${step("04", "Chantier par étapes", "Fondations, murs, toiture, réseaux, finitions.", "Jalons")}
            ${step("05", "Suivi à distance", "Photos, vidéos, compte rendu et prochaines décisions.", "Reporting")}
          </ol>
        </div>
      </section>

      <section class="reporting">
        <div class="report-panel">
          <div class="eyebrow">Suivi visible</div>
          <h2>Le client ne demande pas seulement une maison. Il demande du contrôle.</h2>
          <p>Le tableau de suivi doit être simple : jalon, statut, preuve reçue, prochaine décision. Suffisant pour rassurer sans noyer le client.</p>
          <div class="dashboard">
            <div class="dash-row"><div><strong>Fondations</strong><span>Photos et vidéo reçues</span></div><b>Validé</b></div>
            <div class="dash-row"><div><strong>Élévation murs</strong><span>Contrôle qualité en cours</span></div><b>En cours</b></div>
            <div class="dash-row"><div><strong>Achat toiture</strong><span>Facture à valider</span></div><b>À valider</b></div>
            <div class="dash-row"><div><strong>Paiement étape 3</strong><span>Bloqué jusqu'à validation</span></div><b>Attente</b></div>
          </div>
        </div>
        <div class="supervision-card">
          <img src="${direction.supervisionImage}" alt="" />
          <div class="photo-strip">
            <div><strong>Photo chantier</strong><span>preuve terrain</span></div>
            <div><strong>Vidéo courte</strong><span>contrôle distance</span></div>
            <div><strong>Compte rendu</strong><span>décision suivante</span></div>
          </div>
        </div>
      </section>

      <section class="diaspora">
        <div class="world-card">
          <div class="eyebrow">Diaspora ouverte</div>
          <h2>Un message qui parle à toute personne loin de son chantier.</h2>
          <p>Madagascar peut être le premier cas, mais la douleur est universelle : construire au pays exige des preuves, pas seulement de la confiance orale.</p>
          <div class="rings"></div>
          <div class="continent-tags">
            <span>Europe</span>
            <span>Amérique du Nord</span>
            <span>Afrique</span>
            <span>Océan Indien</span>
            <span>Moyen-Orient</span>
            <span>Projet au pays</span>
          </div>
        </div>
        <div class="form-card">
          <h2>Faites évaluer votre projet de construction à distance.</h2>
          <p>Expliquez le terrain, le pays, le budget cible et le niveau d'accompagnement souhaité. L'équipe revient vers vous avant tout devis final.</p>
          <div class="fields">
            <div class="field">Nom complet</div>
            <div class="field">Pays de résidence</div>
            <div class="field">Telephone / WhatsApp</div>
            <div class="field">Email</div>
            <div class="field">Pays / ville du terrain</div>
            <div class="field">Terrain disponible ?</div>
            <div class="field">Type de projet</div>
            <div class="field">Budget indicatif</div>
            <div class="field">Délai souhaité</div>
            <div class="field">Niveau d'accompagnement</div>
            <div class="field big">Message, contexte, documents ou photos disponibles</div>
          </div>
          <div class="form-foot">
            <span class="btn primary">Demander une première évaluation</span>
            <small>Pas de prix final sans vérification du terrain, des plans et des contraintes du projet.</small>
          </div>
        </div>
      </section>

      <div class="final">
        <h2>Pas seulement construire. Construire avec preuves, jalons et suivi.</h2>
        <p>Une promesse plus forte pour la diaspora : votre projet avance quand les preuves avancent.</p>
      </div>

      <div class="direction-note"><strong>${esc(direction.label)} - ${esc(direction.name)}.</strong> ${esc(direction.bestFor)}</div>

      <footer class="footer">
        <strong>${esc(direction.brand)}</strong>
        <span>Construction encadrée pour la diaspora</span>
        <span>WhatsApp +261 34 00 000 00</span>
      </footer>
    </div>
  </main>
</body>
</html>`;
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  for (const direction of directions) {
    const htmlPath = path.join(outputDir, `${direction.id}.html`);
    const pngPath = path.join(outputDir, `${direction.id}.png`);
    await fs.writeFile(htmlPath, render(direction), "utf8");

    const page = await browser.newPage({
      viewport: { width: 1440, height: 1800 },
      deviceScaleFactor: 1,
    });

    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
    await page.screenshot({ path: pngPath, fullPage: true });
    await page.close();
    console.log(`${direction.id}: ${pngPath}`);
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
