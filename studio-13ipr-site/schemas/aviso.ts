import { defineField, defineType } from "sanity";

export const avisoSchema = defineType({
  name: "aviso",
  title: "Aviso / Notícia",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "texto",
      title: "Texto",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dataPublicacao",
      title: "Data de Publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "destaque",
      title: "Destacar este aviso?",
      type: "boolean",
      description: "Avisos em destaque aparecem primeiro e com visual especial.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "dataPublicacao", media: "destaque" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("pt-BR")
          : "Sem data",
      };
    },
  },
  orderings: [
    {
      title: "Mais recentes primeiro",
      name: "dataDesc",
      by: [{ field: "dataPublicacao", direction: "desc" }],
    },
  ],
});
