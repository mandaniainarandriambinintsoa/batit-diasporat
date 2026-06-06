"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  residenceCountry: "",
  projectCity: "",
  projectType: "",
  budget: "",
  message: ""
};

export default function ProjectEvaluationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    try {
      const response = await fetch("/api/project-evaluation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Impossible d'envoyer la demande.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: payload.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Réessayez dans un instant."
      });
    }
  }

  return (
    <form className="project-form" onSubmit={submitForm}>
      <div className="form-grid">
        <label>
          <span className="sr-only">Nom complet</span>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Nom complet"
            autoComplete="name"
            suppressHydrationWarning
            required
          />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="Email"
            type="email"
            autoComplete="email"
            suppressHydrationWarning
            required
          />
        </label>
        <label>
          <span className="sr-only">Pays de résidence</span>
          <select
            name="residenceCountry"
            value={form.residenceCountry}
            onChange={updateField}
            suppressHydrationWarning
            required
          >
            <option value="">Pays de résidence</option>
            <option>France</option>
            <option>Canada</option>
            <option>Belgique</option>
            <option>États-Unis</option>
            <option>Côte d'Ivoire</option>
            <option>Autre pays</option>
          </select>
        </label>
        <label>
          <span className="sr-only">Téléphone ou WhatsApp</span>
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="Téléphone / WhatsApp"
            autoComplete="tel"
            suppressHydrationWarning
            required
          />
        </label>
        <label>
          <span className="sr-only">Ville du projet</span>
          <input
            name="projectCity"
            value={form.projectCity}
            onChange={updateField}
            placeholder="Ville du projet"
            suppressHydrationWarning
            required
          />
        </label>
        <label>
          <span className="sr-only">Type de projet</span>
          <select
            name="projectType"
            value={form.projectType}
            onChange={updateField}
            suppressHydrationWarning
            required
          >
            <option value="">Type de projet</option>
            <option>Maison familiale</option>
            <option>Villa</option>
            <option>Extension</option>
            <option>Rénovation</option>
            <option>Local professionnel</option>
          </select>
        </label>
        <label>
          <span className="sr-only">Budget indicatif</span>
          <input
            name="budget"
            value={form.budget}
            onChange={updateField}
            placeholder="Budget indicatif"
            suppressHydrationWarning
          />
        </label>
        <label className="wide">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Décrivez votre projet en quelques mots..."
            rows="4"
            suppressHydrationWarning
            required
          />
        </label>
      </div>
      <button className="form-submit" disabled={status.type === "loading"}>
        {status.type === "loading"
          ? "Envoi en cours..."
          : "Recevoir mon étude gratuite"}
      </button>
      {status.message ? (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
