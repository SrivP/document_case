import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "ClashDisplay",
      cssVariable: "--font-clash-display",
      options: {
        variants: [
          {
            weight: "200 700",
            style: "normal",
            src: ["./src/assets/fonts/ClashDisplay-Variable.woff2"],
          },
        ],
      },
    },
  ],
});
