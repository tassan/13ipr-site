import { defineField, defineType } from "sanity";

export const pastorSchema = defineType({
  name: "pastor",
  title: "Pastor",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome completo",
      type: "string",
      description: 'Ex: "Pr. Wilson Brito"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titulo",
      title: "Título / Função",
      type: "string",
      description: 'Ex: "Pastor Titular", "Pastor Auxiliar"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "biografia",
      title: "Biografia",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "versiculo",
      title: "Versículo de Ministério",
      type: "string",
      description: "Texto do versículo (sem a referência)",
    }),
    defineField({
      name: "versiculoReferencia",
      title: "Referência do Versículo",
      type: "string",
      description: 'Ex: "João 10:11"',
    }),
    defineField({
      name: "ordemExibicao",
      title: "Ordem de Exibição",
      type: "number",
      description: "1 = aparece primeiro",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "nome", subtitle: "titulo", media: "foto" },
  },
});
