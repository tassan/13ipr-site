import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook endpoint chamado pelo Sanity quando um documento é publicado.
 * Configura em: Sanity Dashboard → API → Webhooks
 *   URL: https://seusite.com/api/revalidate
 *   Trigger: on create, update, delete
 *   Secret: mesmo valor de REVALIDATION_SECRET no .env
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type = body?._type as string | undefined;

    // Revalida as rotas afetadas com base no tipo de documento
    if (type === "aviso") {
      revalidatePath("/");
      revalidatePath("/noticias");
    } else if (type === "evento") {
      revalidatePath("/");
      revalidatePath("/eventos");
    } else if (type === "culto") {
      revalidatePath("/");
    } else if (type === "pastor") {
      revalidatePath("/pastores");
    } else {
      // Revalida tudo se não souber o tipo
      revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, type });
  } catch {
    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 }
    );
  }
}
