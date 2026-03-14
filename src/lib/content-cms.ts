import { getEntry } from "astro:content";

export type PersonaData = {
  label: string;
  title: string;
  statement: string;
  location: string;
  focus: string;
  format: string;
  notes: string[];
  excerpts?: { title: string; publication: string; text: string }[];
};

function normalizeNotes(
  notes: Array<string | { value: string }> | undefined
): string[] {
  if (!notes?.length) return [];
  return notes.map((n) => (typeof n === "string" ? n : n.value));
}

export async function getPersona(
  slug: "visual-artist" | "dancer" | "writer"
): Promise<PersonaData | null> {
  const entry = await getEntry("personas", slug);
  if (!entry) return null;
  const data = entry.data;
  return {
    label: data.label,
    title: data.title,
    statement: data.statement,
    location: data.location,
    focus: data.focus,
    format: data.format,
    notes: normalizeNotes(data.notes),
    excerpts: data.excerpts
  };
}
