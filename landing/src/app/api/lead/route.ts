import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const required = ["nome", "azienda", "email", "telefono"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: `Campo obbligatorio mancante: ${field}` },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    // TODO: integrate with CRM / email service
    console.log("[LEAD]", {
      timestamp: new Date().toISOString(),
      nome: body.nome,
      azienda: body.azienda,
      email: body.email,
      telefono: body.telefono,
      tipoEvento: body.tipoEvento || "",
      messaggio: body.messaggio || "",
      source: body.source || "unknown",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
