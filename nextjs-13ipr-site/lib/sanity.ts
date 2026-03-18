import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
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
