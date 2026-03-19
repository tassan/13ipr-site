import { client } from "./sanity";
import type { Aviso, Evento, Pastor, Culto } from "./sanity";

/**
 * Cache options for Sanity queries.
 * ISR: revalidate every 60s. Aligns with page-level revalidate.
 * Enables Next.js Data Cache → faster TTFB (target: <800ms per Vercel Speed Insights).
 */
const CACHE = { next: { revalidate: 60 } } as const;

export async function getAvisos(limit = 6): Promise<Aviso[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "aviso"] | order(destaque desc, dataPublicacao desc)[0...$limit]{
      _id, titulo, texto, dataPublicacao, destaque
    }`,
    { limit },
    CACHE
  );
}

export async function getEventos(): Promise<Evento[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "evento" && dateTime(dataHora) >= dateTime(now())] | order(dataHora asc)[0...10]{
      _id, titulo, descricao, dataHora, local
    }`,
    {},
    CACHE
  );
}

export async function getPastores(): Promise<Pastor[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "pastor"] | order(ordemExibicao asc){
      _id, nome, titulo, foto, biografia, versiculo, versiculoReferencia, ordemExibicao
    }`,
    {},
    CACHE
  );
}

export async function getCultos(): Promise<Culto[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "culto"] | order(ordemExibicao asc){
      _id, tipo, diaSemana, horario, descricao, ordemExibicao
    }`,
    {},
    CACHE
  );
}
