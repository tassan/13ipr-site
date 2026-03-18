import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "13ipr-studio",
  title: "13ª IPR — Painel de Conteúdo",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conteúdo")
          .items([
            S.listItem()
              .title("📢 Avisos e Notícias")
              .child(S.documentTypeList("aviso").title("Avisos")),
            S.listItem()
              .title("📅 Eventos")
              .child(S.documentTypeList("evento").title("Eventos")),
            S.listItem()
              .title("🙏 Cultos / Reuniões")
              .child(S.documentTypeList("culto").title("Cultos")),
            S.listItem()
              .title("👤 Pastores")
              .child(S.documentTypeList("pastor").title("Pastores")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
