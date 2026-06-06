import { site } from "@/lib/site";

const requiredFields = [
  "name",
  "email",
  "phone",
  "residenceCountry",
  "projectCity",
  "projectType",
  "message"
];

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (_error) {
    return Response.json(
      { ok: false, message: "La demande envoyee est invalide." },
      { status: 400 }
    );
  }

  const missing = requiredFields.filter((field) => !String(body[field] || "").trim());

  if (missing.length > 0) {
    return Response.json(
      {
        ok: false,
        message: "Merci de completer les champs obligatoires avant l'envoi."
      },
      { status: 400 }
    );
  }

  const payload = {
    source: site.source,
    submittedAt: new Date().toISOString(),
    contact: {
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      phone: String(body.phone).trim(),
      residenceCountry: String(body.residenceCountry).trim()
    },
    project: {
      city: String(body.projectCity).trim(),
      type: String(body.projectType).trim(),
      budget: String(body.budget || "").trim(),
      message: String(body.message).trim()
    }
  };

  const webhookUrl = process.env.N8N_BATI_DIASPORA_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-bati-diaspora-secret": process.env.BATI_DIASPORA_WEBHOOK_SECRET || ""
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return Response.json(
        {
          ok: false,
          message:
            "La demande est prete, mais la transmission a echoue. Reessayez ou contactez-nous sur WhatsApp."
        },
        { status: 502 }
      );
    }
  }

  return Response.json({
    ok: true,
    message:
      "Votre demande a bien ete recue. Un responsable vous contactera pour clarifier le projet et les prochaines etapes."
  });
}
