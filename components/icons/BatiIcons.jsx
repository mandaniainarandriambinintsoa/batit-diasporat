// Icones UI (bande de confiance, reporting, stats, formulaire, CTA) issues de
// Unicons by Iconscout (https://github.com/Iconscout/unicons), style "line".
// Licence Iconscout Simple License : usage commercial autorise.
// Les pictogrammes de chantier des jalons (pelle, fondations, briques, rouleau,
// charpente, devis-recherche, cle) restent des SVG custom : aucune librairie UI
// generaliste ne propose ces pictos metier, et ils collent deja a la maquette.

// --- Tracés Unicons line (viewBox 0 0 24 24) ---
const UNI = {
  fileAlt:
    "M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z",
  moneyStack:
    "M22,17H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Zm0,4H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2ZM6,7A1,1,0,1,0,7,8,1,1,0,0,0,6,7ZM20,1H4A3,3,0,0,0,1,4v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM12,5a3,3,0,1,0,3,3A3,3,0,0,0,12,5Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,9Zm6-2a1,1,0,1,0,1,1A1,1,0,0,0,18,7Z",
  camera:
    "M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z",
  user:
    "M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z",
  usersAlt:
    "M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z",
  comment:
    "M13,11H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-4H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm2-5H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z",
  clipboard:
    "M13,14H9a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2ZM17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Zm-3-9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z",
  archive:
    "M10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM19,3H5A3,3,0,0,0,2,6V9a1,1,0,0,0,1,1H4v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10h1a1,1,0,0,0,1-1V6A3,3,0,0,0,19,3ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10H18ZM20,8H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z",
  globe:
    "M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z",
  shieldCheck:
    "M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39ZM13.54,9.59l-2.69,2.7-.89-.9a1,1,0,0,0-1.42,1.42l1.6,1.6a1,1,0,0,0,1.42,0L15,11a1,1,0,0,0-1.42-1.42Z",
  clock:
    "M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z",
  fileCheck:
    "M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z",
  lightbulb:
    "M17.09,2.82a8,8,0,0,0-6.68-1.66A8,8,0,0,0,4.14,7.48a8.07,8.07,0,0,0,1.72,6.65A4.54,4.54,0,0,1,7,17v3a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V17.19A5.17,5.17,0,0,1,18.22,14a8,8,0,0,0-1.13-11.2ZM15,20a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V19h6Zm1.67-7.24A7.13,7.13,0,0,0,15,17H13V14a1,1,0,0,0-2,0v3H9a6.5,6.5,0,0,0-1.6-4.16,6,6,0,0,1,3.39-9.72A6,6,0,0,1,18,9,5.89,5.89,0,0,1,16.67,12.76Z",
  lock:
    "M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
};

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false
};

// Wrapper trait pour les pictos chantier custom (jalons).
function Svg({ children, className }) {
  return (
    <svg className={className} {...iconProps}>
      <g
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

// Wrapper rempli pour les icones Unicons (line).
function UIcon({ d, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}

export function LogoMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="4 4 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 33 36 9l27 24"
        stroke="var(--orange)"
        strokeWidth="7.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M14 31v29h44V31"
        stroke="var(--navy)"
        strokeWidth="6.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M25 60V43.5L36 34l11 9.5V60"
        stroke="var(--orange)"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M31 60V48h10v12"
        stroke="var(--navy)"
        strokeWidth="5.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M11 60h50"
        stroke="var(--navy)"
        strokeWidth="6.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function WhatsAppMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.2 25.8 7.8 20A10.4 10.4 0 1 1 12 24.2z"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3 10.7c-.35.08-.95 1.18-.95 1.8 0 3.05 4.26 7.4 7.42 7.4.65 0 1.78-.58 1.9-.95l.42-1.32c.08-.27-.04-.56-.3-.69l-2.1-1.05c-.25-.13-.56-.08-.76.12l-.82.84c-.2.2-.52.24-.76.1a8.5 8.5 0 0 1-3.1-3.08c-.14-.24-.1-.56.1-.76l.83-.82c.2-.2.25-.51.12-.76l-1.06-2.1a.6.6 0 0 0-.69-.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BatiIcon({ name, className = "" }) {
  switch (name) {
    // --- Bande de confiance (Unicons) ---
    case "document":
      return <UIcon d={UNI.fileAlt} className={className} />;
    case "coins":
      return <UIcon d={UNI.moneyStack} className={className} />;
    case "camera":
      return <UIcon d={UNI.camera} className={className} />;
    case "user":
      return <UIcon d={UNI.user} className={className} />;

    // --- Reporting (Unicons) ---
    case "team":
      return <UIcon d={UNI.usersAlt} className={className} />;
    case "chat":
      return <UIcon d={UNI.comment} className={className} />;
    case "clipboardCheck":
      return <UIcon d={UNI.clipboard} className={className} />;
    case "archive":
      return <UIcon d={UNI.archive} className={className} />;

    // --- Stats diaspora (Unicons) ---
    case "globe":
      return <UIcon d={UNI.globe} className={className} />;
    case "users":
      return <UIcon d={UNI.usersAlt} className={className} />;
    case "shield":
      return <UIcon d={UNI.shieldCheck} className={className} />;

    // --- Benefices formulaire (Unicons) ---
    case "clock":
      return <UIcon d={UNI.clock} className={className} />;
    case "documentCheck":
      return <UIcon d={UNI.fileCheck} className={className} />;
    case "lightbulb":
      return <UIcon d={UNI.lightbulb} className={className} />;

    // --- CTA final (Unicons) ---
    case "lock":
      return <UIcon d={UNI.lock} className={className} />;
    case "checkShield":
      return <UIcon d={UNI.shieldCheck} className={className} />;

    // --- Pictos chantier des jalons (SVG custom, trait) ---
    case "documentSearch":
      return (
        <Svg className={className}>
          <path d="M13 7h15l7 7v24H13z" />
          <path d="M28 7v8h7" />
          <circle cx="24" cy="27" r="6" />
          <path d="m29 32 7 7" />
        </Svg>
      );
    case "shovel":
      return (
        <Svg className={className}>
          <path d="M31 7 18 20" />
          <path d="m28 10 10 10" />
          <path d="M18 20c-3 3-2.5 8.4 1 12l5 5 9-9-5-5c-3.6-3.5-7.2-5.2-10-3z" />
          <path d="m13 37 7-7" />
        </Svg>
      );
    case "foundation":
      return (
        <Svg className={className}>
          <path d="M9 38h30" />
          <path d="M14 38V14" />
          <path d="M24 38V10" />
          <path d="M34 38V18" />
          <path d="M11 23h26" />
          <path d="M17 14h14" />
        </Svg>
      );
    case "bricks":
      return (
        <Svg className={className}>
          <path d="M9 17h30v22H9z" />
          <path d="M9 25h30" />
          <path d="M9 33h30" />
          <path d="M19 17v8" />
          <path d="M29 17v8" />
          <path d="M14 25v8" />
          <path d="M24 25v8" />
          <path d="M34 25v8" />
          <path d="M19 33v6" />
          <path d="M29 33v6" />
        </Svg>
      );
    case "houseLine":
      return (
        <Svg className={className}>
          <path d="M10 25 24 12l14 13" />
          <path d="M14 23v17h20V23" />
          <path d="M21 40V29h7v11" />
          <path d="M8 40h32" />
        </Svg>
      );
    case "roller":
      return (
        <Svg className={className}>
          <path d="M11 12h22v10H11z" />
          <path d="M33 17h5v8H24v6" />
          <path d="M21 31h6v10h-6z" />
        </Svg>
      );
    case "wrench":
      return (
        <Svg className={className}>
          <path d="M31 8a10 10 0 0 0-9 13L10 33a5 5 0 0 0 7 7l12-12a10 10 0 0 0 11-13l-7 7-6-6z" />
        </Svg>
      );

    default:
      return (
        <Svg className={className}>
          <circle cx="24" cy="24" r="15" />
          <path d="M17 24h14" />
        </Svg>
      );
  }
}
