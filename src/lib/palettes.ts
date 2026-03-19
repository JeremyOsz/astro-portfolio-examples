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
      paper: "#ffffff",
      paperStrong: "#f5f5f5",
      ink: "#1a1a1a",
      muted: "#777777",
      line: "#e0e0e0",
      accent: "#1a1a1a"
    }
  },
  {
    id: "warm",
    name: "Warm",
    token: {
      paper: "#f8f6f1",
      paperStrong: "#efece4",
      ink: "#2c2420",
      muted: "#7a7168",
      line: "#d8d0c6",
      accent: "#2c2420"
    }
  },
  {
    id: "dark",
    name: "Dark",
    token: {
      paper: "#141414",
      paperStrong: "#1e1e1e",
      ink: "#e8e8e8",
      muted: "#999999",
      line: "#333333",
      accent: "#e8e8e8"
    }
  },
  {
    id: "cool",
    name: "Cool",
    token: {
      paper: "#f4f5f7",
      paperStrong: "#eaecf0",
      ink: "#111318",
      muted: "#6b7280",
      line: "#d1d5db",
      accent: "#111318"
    }
  },
  {
    id: "forest",
    name: "Forest",
    token: {
      paper: "#f4f6f2",
      paperStrong: "#e8ece4",
      ink: "#1a2418",
      muted: "#5c6b56",
      line: "#c8d4c0",
      accent: "#1a2418"
    }
  },
  {
    id: "sunset",
    name: "Sunset",
    token: {
      paper: "#fdf6f0",
      paperStrong: "#f8ece2",
      ink: "#2d1f1a",
      muted: "#8a6e5e",
      line: "#e8d4c4",
      accent: "#2d1f1a"
    }
  },
  {
    id: "midnight",
    name: "Midnight",
    token: {
      paper: "#0c1018",
      paperStrong: "#161c28",
      ink: "#d8dce4",
      muted: "#8898ac",
      line: "#2a3444",
      accent: "#d8dce4"
    }
  },
  {
    id: "lavender",
    name: "Lavender",
    token: {
      paper: "#f6f4f9",
      paperStrong: "#edeaf2",
      ink: "#1e1a24",
      muted: "#6e6480",
      line: "#d0c8dc",
      accent: "#1e1a24"
    }
  },
  {
    id: "sepia",
    name: "Sepia",
    token: {
      paper: "#f6f2ea",
      paperStrong: "#ece6d8",
      ink: "#2c2620",
      muted: "#7a6e5e",
      line: "#d4c8b4",
      accent: "#2c2620"
    }
  },
  {
    id: "ocean",
    name: "Ocean",
    token: {
      paper: "#f2f6f7",
      paperStrong: "#e4eced",
      ink: "#0d1f22",
      muted: "#5a7478",
      line: "#b8ccce",
      accent: "#0d1f22"
    }
  }
];
