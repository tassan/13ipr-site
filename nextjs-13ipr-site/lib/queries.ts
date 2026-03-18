import { client } from "./sanity";
import type { Aviso, Evento, Pastor, Culto } from "./sanity";

export async function getAvisos(limit = 6): Promise<Aviso[]> {
  return client.fetch(
    `*[_type == "aviso"] | order(destaque desc, dataPublicacao desc)[0...$limit]{
      _id, titulo, texto, dataPublicacao, destaque
    }`,
    { limit: limit - 1 }
  );
}

export async function getEventos(): Promise<Evento[]> {
  return client.fetch(
    `*[_type == "evento" && dateTime(dataHora) >= dateTime(now())] | order(dataHora asc)[0...10]{
      _id, titulo, descricao, dataHora, local
    }`
  );
}

export async function getPastores(): Promise<Pastor[]> {
  return client.fetch(
    `*[_type == "pastor"] | order(ordemExibicao asc){
      _id, nome, titulo, foto, biografia, versiculo, versiculoReferencia, ordemExibicao
    }`
  );
}

export async function getCultos(): Promise<Culto[]> {
  return client.fetch(
    `*[_type == "culto"] | order(ordemExibicao asc){
      _id, tipo, diaSemana, horario, descricao, ordemExibicao
    }`
  );
}
