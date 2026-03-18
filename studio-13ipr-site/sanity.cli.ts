import { defineCliConfig } from "sanity/cli";

// Sanity CLI config is separate from Studio UI config.
// `sanity deploy` needs `api.projectId`/`api.dataset` to talk to Sanity.
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // If not set, `sanity deploy` will prompt you interactively for a studio hostname.
  studioHost: process.env.SANITY_STUDIO_HOSTNAME,
});

