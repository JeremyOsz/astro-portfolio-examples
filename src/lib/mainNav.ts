/**
 * Main site nav order — IDs must stay in sync with BaseLayout labels and hero kickers.
 */
export const MAIN_NAV = [
  { href: "/", label: "Index", id: "01" },
  { href: "/visual-artist", label: "Visual", id: "02" },
  { href: "/dancer", label: "Dancer", id: "03" },
  { href: "/writer", label: "Writer", id: "04" },
  { href: "/political-action", label: "Action", id: "05" },
  { href: "/blog", label: "Journal", id: "06" },
  { href: "/events", label: "Events", id: "07" },
  { href: "/contact", label: "Contact", id: "08" }
] as const;

export type MainNavItem = (typeof MAIN_NAV)[number];

/** Sidebar / hero number for the current path (e.g. blog posts → 05). */
export function siteRouteId(pathname: string): string {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/") return "01";
  if (p.startsWith("/blog")) return "06";
  const hit = MAIN_NAV.find((item) => item.href !== "/" && p.startsWith(item.href));
  return hit?.id ?? "";
}
