import { defineField, defineType } from "sanity";

const DIAS_SEMANA = [
  { title: "Domingo", value: "Domingo" },
  { title: "Segunda-feira", value: "Segunda-feira" },
  { title: "Terça-feira", value: "Terça-feira" },
  { title: "Quarta-feira", value: "Quarta-feira" },
  { title: "Quinta-feira", value: "Quinta-feira" },
  { title: "Sexta-feira", value: "Sexta-feira" },
  { title: "Sábado", value: "Sábado" },
];

export const cultoSchema = defineType({
  name: "culto",
  title: "Culto / Reunião",
  type: "document",
  fields: [
    defineField({
      name: "tipo",
      title: "Tipo de Culto",
      type: "string",
      description: 'Ex: "Escola Bíblica Dominical", "Culto de Celebração"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "diaSemana",
      title: "Dia da Semana",
      type: "string",
      options: { list: DIAS_SEMANA },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "horario",
      title: "Horário",
      type: "string",
      description: 'Ex: "09h00", "19h30"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descricao",
      title: "Descrição opcional",
      type: "string",
    }),
    defineField({
      name: "ordemExibicao",
      title: "Ordem de Exibição",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "tipo", subtitle: "diaSemana" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
