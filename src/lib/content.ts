export type Persona = {
  slug: "visual-artist" | "dancer" | "writer";
  label: string;
  title: string;
  statement: string;
  location: string;
  focus: string;
  format: string;
  notes: string[];
};

export const personas: Record<Persona["slug"], Persona> = {
  "visual-artist": {
    slug: "visual-artist",
    label: "Visual Artist",
    title: "Sable Kline",
    statement:
      "Assemblage and image studies tracing memory, artifacts, and misfiled histories. The work oscillates between strict grids and fragmented surfaces.",
    location: "Berlin / Accra",
    focus: "Image, print, collage",
    format: "Commissions, exhibitions",
    notes: [
      "Recent cycle: Soft Evidence (2026)",
      "Ongoing: public-domain image interventions",
      "Studio practice: charcoal, transfer, and stitched paper"
    ]
  },
  dancer: {
    slug: "dancer",
    label: "Dancer / Movement Practitioner",
    title: "Noa Serrat",
    statement:
      "A movement practice built from score-based improvisation and architectural listening. Works are tuned for black boxes, galleries, and outdoor thresholds.",
    location: "Lisbon / touring",
    focus: "Contemporary movement, voice",
    format: "Performance, labs, teaching",
    notes: [
      "Current research: Ground as Instrument",
      "Teaching: release technique + choreographic writing",
      "Open for residencies in 2026-2027"
    ]
  },
  writer: {
    slug: "writer",
    label: "Writer",
    title: "Iris Vale",
    statement:
      "Essays and hybrid nonfiction about labor, technology, and private rituals. The page is treated as choreography: breath, pause, and cut.",
    location: "Melbourne",
    focus: "Essay, criticism, notebooks",
    format: "Print, lectures, commissions",
    notes: [
      "Book project: Manual for Staying With It",
      "Columns: art criticism + process writing",
      "Available for editorial collaborations"
    ]
  }
};

export const writerExcerpts = [
  {
    title: "On Rehearsal",
    publication: "Field Notes Quarterly",
    text: "Practice is not repetition. It is an argument with timing, materials, and weather."
  },
  {
    title: "Portable Archives",
    publication: "Margin Review",
    text: "Every image carries a previous hand. Editing becomes a way of naming who touched it."
  },
  {
    title: "Scale and Attention",
    publication: "Short Lecture",
    text: "A room changes when a sentence is read aloud. The line breaks before the body does."
  }
];
