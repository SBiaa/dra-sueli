import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(200),
  phone: z.string().trim().min(8).max(30),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(5).max(5000),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Preencha todos os campos corretamente." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contato] falha ao enviar e-mail", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}
