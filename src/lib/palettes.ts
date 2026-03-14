export type PaletteToken = {
  paper: string;
  paperStrong: string;
  ink: string;
  muted: string;
  line: string;
  accent: string;
};

export type Palette = {
  id: string;
  name: string;
  token: PaletteToken;
};

export const PALETTE_STORAGE_KEY = "portfolio-palette";

export const palettes: Palette[] = [
  {
    id: "default",
    name: "Default",
    token: {
      paper: "#f4f1eb",
      paperStrong: "#ebe5da",
      ink: "#0a0a0a",
      muted: "#57524a",
      line: "#c9c2b7",
      accent: "#c41e3a"
    }
  },
  {
    id: "warm",
    name: "Warm",
    token: {
      paper: "#f5efe6",
      paperStrong: "#e8ddd0",
      ink: "#2c2420",
      muted: "#6b5d52",
      line: "#c4b5a5",
      accent: "#b84a2d"
    }
  },
  {
    id: "dark",
    name: "Dark",
    token: {
      paper: "#1a1a1a",
      paperStrong: "#252525",
      ink: "#f0ebe3",
      muted: "#a39e96",
      line: "#3d3a36",
      accent: "#e85c4a"
    }
  },
  {
    id: "cool",
    name: "Cool",
    token: {
      paper: "#f0f2f5",
      paperStrong: "#e2e6ec",
      ink: "#0f1419",
      muted: "#5c656d",
      line: "#b8c2cc",
      accent: "#2563eb"
    }
  }
];
