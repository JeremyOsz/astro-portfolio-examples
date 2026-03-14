export type Event = {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue: string;
  location: string;
  url?: string;
  note?: string;
};

export const events: Event[] = [
  {
    id: "soft-evidence-berlin",
    title: "Soft Evidence",
    date: "2026-04-12",
    time: "18:00",
    venue: "Galerie M",
    location: "Berlin",
    note: "Opening"
  },
  {
    id: "ground-instrument-workshop",
    title: "Ground as Instrument — workshop",
    date: "2026-04-20",
    time: "10:00–17:00",
    venue: "Studio R",
    location: "Lisbon",
    url: "#"
  },
  {
    id: "reading-melbourne",
    title: "Manual for Staying With It (reading)",
    date: "2026-05-03",
    time: "19:30",
    venue: "Readings Carlton",
    location: "Melbourne",
    url: "#"
  },
  {
    id: "residency-open",
    title: "Open studio",
    date: "2026-05-15",
    venue: "Accra Arts Centre",
    location: "Accra",
    note: "Residency showing"
  },
  {
    id: "panel-archive",
    title: "Panel: Public domain & reuse",
    date: "2026-06-01",
    time: "14:00",
    venue: "Design Museum",
    location: "London",
    url: "#"
  }
];

export function formatEventDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

export function formatEventMonth(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}
