import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Allow `next build` to succeed even when Sanity env vars aren't present yet.
// Pages should render their own fallbacks in that case.
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error(
      "Sanity image url builder is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally NEXT_PUBLIC_SANITY_DATASET).",
    );
  }
  return builder.image(source);
}

// Types
export interface Aviso {
  _id: string;
  titulo: string;
  texto: string;
  dataPublicacao: string;
  destaque: boolean;
}

export interface Evento {
  _id: string;
  titulo: string;
  descricao?: string;
  dataHora: string;
  local?: string;
}

export interface Pastor {
  _id: string;
  nome: string;
  titulo: string;
  foto?: SanityImageSource;
  biografia?: string;
  versiculo?: string;
  versiculoReferencia?: string;
  ordemExibicao: number;
}

export interface Culto {
  _id: string;
  tipo: string;
  diaSemana: string;
  horario: string;
  descricao?: string;
  ordemExibicao: number;
}
