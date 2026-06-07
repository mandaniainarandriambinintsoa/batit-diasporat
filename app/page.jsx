import ProjectEvaluationForm from "@/components/forms/ProjectEvaluationForm";
import { BatiIcon, LogoMark, WhatsAppMark } from "@/components/icons/BatiIcons";
import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  faqs,
  formBenefits,
  milestones,
  navLinks,
  problemPoints,
  progressPhotos,
  reportingItems,
  solutionPoints,
  trustChips
} from "@/data/bati-diaspora";
import { site } from "@/lib/site";

function BrandLockup() {
  return (
    <a href="#accueil" className="brand" aria-label="Bati Diaspora accueil">
      <span className="brand-main">
        <LogoMark className="brand-mark" />
        <span className="brand-name" aria-hidden="true">
          <strong>BATI</strong>
          <strong>DIASPORA</strong>
        </span>
      </span>
      <small className="brand-tagline">{site.tagline}</small>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header" data-reveal="fade-down">
      <BrandLockup />
      <nav className="main-nav" aria-label="Navigation principale">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Demander un devis
      </a>
    </header>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Garanties principales">
      {trustChips.map((chip, index) => (
        <article
          className="trust-item"
          key={chip.title}
          data-reveal="fade-up"
          style={{ "--reveal-delay": `${index * 70}ms` }}
        >
          <span className="icon-ring">
            <BatiIcon name={chip.icon} />
          </span>
          <div>
            <h3>{chip.title}</h3>
            <p>{chip.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="accueil">
      <Header />
      <div
        className="hero-bg"
        aria-hidden="true"
        data-reveal="fade-left"
        style={{ "--reveal-delay": "120ms" }}
      />
      <div className="hero-content" data-reveal="fade-right">
        <h1>
          Construisez
          <br />
          au pays sans
          <br />
          avancer à l'aveugle.
        </h1>
        <p className="hero-lead">
          Devis détaillé, paiements par jalons, reporting photo/vidéo et
          responsable unique pour suivre votre maison même depuis l'étranger.
        </p>
        <div className="hero-actions">
          <a className="primary-action whatsapp-action" href={`https://wa.me/${site.whatsapp}`}>
            <WhatsAppMark className="wa-icon" />
            Parler à un conseiller
          </a>
          <a className="secondary-action" href="#realisations">
            Voir nos réalisations
            <span className="arrow-mark" aria-hidden="true" />
          </a>
        </div>
      </div>
      <TrustStrip />
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="split-section" id="a-propos">
      <div className="split-grid">
        <article className="problem-copy" data-reveal="fade-right">
          <p className="section-kicker">Le problème</p>
          <h2>Trop loin. Pas assez de preuves.</h2>
          <p className="section-intro">
            Vivre à l'étranger rend le suivi des travaux difficile.
          </p>
          <ul className="cross-list">
            {problemPoints.map((point) => (
              <li key={point}>
                <span className="mark-x" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <strong className="result-line">
            Résultat : stress, pertes d'argent et projets inachevés.
          </strong>
        </article>
        <div
          className="client-photo"
          data-reveal="zoom-soft"
          style={{ "--reveal-delay": "90ms" }}
        >
          <img
            src="/images/bati-diaspora/distance-client.webp"
            alt="Client de la diaspora inquiet devant son téléphone pendant le suivi des travaux"
          />
        </div>
        <article
          className="solution-copy"
          data-reveal="fade-left"
          style={{ "--reveal-delay": "150ms" }}
        >
          <p className="section-kicker">Notre solution</p>
          <h2>Une construction clé en main encadrée, transparente et sûre.</h2>
          <p className="section-intro">
            Bati Diaspora prend en charge votre projet de A à Z avec des
            processus clairs et un suivi rigoureux.
          </p>
          <ul className="check-list">
            {solutionPoints.map((point) => (
              <li key={point.lead}>
                <span className="mark-check" aria-hidden="true" />
                <span>
                  <strong>{point.lead}</strong>
                  {point.rest}
                </span>
              </li>
            ))}
          </ul>
          <strong className="result-line">
            Vous restez maître, même à distance.
          </strong>
        </article>
      </div>
    </section>
  );
}

function ProofGallery() {
  return (
    <section className="proof-gallery" id="realisations">
      <div className="section-title centered" data-reveal="fade-up">
        <h2>Des projets. Des preuves.</h2>
      </div>
      <div className="progress-gallery">
        {progressPhotos.map((photo, index) => (
          <article
            className="progress-card"
            key={photo.label}
            data-reveal="fade-up"
            style={{ "--reveal-delay": `${index * 65}ms` }}
          >
            <img src={photo.image} alt={photo.alt} />
            <span>{photo.label}</span>
            {index < progressPhotos.length - 1 ? (
              <b className="gallery-arrow" aria-hidden="true">&gt;</b>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Milestones() {
  return (
    <section className="milestone-section" id="methode">
      <div className="section-title centered" data-reveal="fade-up">
        <h2>Paiements par jalons - vous gardez le contrôle</h2>
      </div>
      <div className="milestone-track">
        {milestones.map((milestone, index) => (
          <article
            className="milestone-item"
            key={milestone.step}
            data-reveal="fade-up"
            style={{ "--reveal-delay": `${index * 55}ms` }}
          >
            <span className="icon-ring large">
              <BatiIcon name={milestone.icon} />
            </span>
            <b>{milestone.step}</b>
            <h3>{milestone.title}</h3>
          </article>
        ))}
      </div>
      <p className="milestone-note" data-reveal="fade-up">
        <BatiIcon name="lock" />
        Chaque jalon est validé par vous avec preuves avant le paiement suivant.
      </p>
    </section>
  );
}

function RemoteReporting() {
  return (
    <section className="remote-section" id="services">
      <div className="remote-image" data-reveal="fade-right">
        <img
          src="/images/bati-diaspora/remote-report.webp"
          alt="Client consultant les preuves photo et vidéo de son chantier depuis son téléphone"
        />
      </div>
      <article
        className="remote-content"
        data-reveal="fade-left"
        style={{ "--reveal-delay": "90ms" }}
      >
        <h2>Suivi de chantier à distance</h2>
        <p className="section-intro">Vous voyez. Vous comprenez. Vous décidez.</p>
        <div className="report-grid">
          {reportingItems.map((item, index) => (
            <article
              className="report-card"
              key={item.title}
              data-reveal="fade-up"
              style={{ "--reveal-delay": `${120 + index * 55}ms` }}
            >
              <span className="icon-ring small">
                <BatiIcon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy" data-reveal="fade-right">
        <p className="section-kicker">Construction pour la diaspora</p>
        <h2>Votre projet mérite le meilleur départ.</h2>
        <p>
          Une étude claire, un interlocuteur unique et des preuves avant chaque
          décision, même si vous suivez le chantier depuis l'étranger.
        </p>
        <div className="benefit-row">
          {formBenefits.map((benefit, index) => (
            <article
              key={benefit.title}
              data-reveal="fade-up"
              style={{ "--reveal-delay": `${index * 65}ms` }}
            >
              <span className="icon-ring small">
                <BatiIcon name={benefit.icon} />
              </span>
              <div>
                <strong>{benefit.title}</strong>
                <span>{benefit.text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        className="form-panel"
        data-reveal="fade-left"
        style={{ "--reveal-delay": "120ms" }}
      >
        <div className="form-panel-head">
          <h3>Demandez votre étude gratuite</h3>
          <p>Réponse sous 24h avec les prochaines étapes.</p>
        </div>
        <ProjectEvaluationForm />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" data-reveal="fade-up">
      <div data-reveal="fade-right">
        <h2>
          Ne construisez plus dans le doute.
          <span> Construisez avec Bati Diaspora.</span>
        </h2>
      </div>
      <div className="final-proofs">
        <span data-reveal="fade-up" style={{ "--reveal-delay": "90ms" }}>
          <BatiIcon name="lock" />
          Zéro avance à l'aveugle
        </span>
        <span data-reveal="fade-up" style={{ "--reveal-delay": "150ms" }}>
          <BatiIcon name="documentCheck" />
          Transparence totale
        </span>
        <span data-reveal="fade-up" style={{ "--reveal-delay": "210ms" }}>
          <BatiIcon name="checkShield" />
          Qualité garantie
        </span>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="section-title centered">
        <p className="section-kicker">FAQ</p>
        <h2>Les questions avant de lancer un chantier à distance.</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" data-reveal="fade-up">
      <div className="footer-brand">
        <BrandLockup />
        <div className="social-row" aria-label="Reseaux sociaux">
          <span>f</span>
          <span>ig</span>
          <span>yt</span>
          <span>in</span>
        </div>
      </div>
      <div>
        <h3>Nos services</h3>
        <a href="#services">Étude et conception</a>
        <a href="#services">Construction clé en main</a>
        <a href="#services">Rénovation</a>
        <a href="#services">Suivi de chantier</a>
        <a href="#services">Assistance administrative</a>
      </div>
      <div>
        <h3>À propos</h3>
        <a href="#a-propos">Qui sommes-nous ?</a>
        <a href="#methode">Notre approche</a>
        <a href="#methode">Nos engagements</a>
        <a href="#realisations">Carrières</a>
      </div>
      <div>
        <h3>Ressources</h3>
        <a href="#faq">FAQ</a>
        <a href="#services">Guides et conseils</a>
        <a href="#realisations">Actualités</a>
      </div>
      <div>
        <h3>Contact</h3>
        <p>{site.address}</p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
        <p>www.batidiaspora.com</p>
      </div>
      <p className="footer-bottom">
        &copy; 2026 Bati Diaspora. Tous droits réservés.
      </p>
    </footer>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    areaServed: ["Côte d'Ivoire", "Madagascar", "Diaspora francophone"],
    url: site.url,
    makesOffer: [
      "Construction clé en main encadrée",
      "Suivi de chantier à distance",
      "Rénovation et finitions",
      "Reporting photo et vidéo"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero />
        <ProblemSolution />
        <ProofGallery />
        <Milestones />
        <RemoteReporting />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
