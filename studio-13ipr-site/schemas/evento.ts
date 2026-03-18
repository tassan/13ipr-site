import { defineField, defineType } from "sanity";

export const eventoSchema = defineType({
  name: "evento",
  title: "Evento",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título do Evento",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "dataHora",
      title: "Data e Horário",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "local",
      title: "Local",
      type: "string",
      description: 'Ex: "Templo Principal", "Salão de Eventos", etc.',
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "dataHora" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleString("pt-BR", {
              dateStyle: "short",
              timeStyle: "short",
            })
          : "Sem data",
      };
    },
  },
  orderings: [
    {
      title: "Próximos primeiro",
      name: "dataAsc",
      by: [{ field: "dataHora", direction: "asc" }],
    },
  ],
});
