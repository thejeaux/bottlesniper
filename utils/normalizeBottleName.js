// utils/normalizeBottleName.js

export function normalizeBottleName(name) {
  return name
    .toLowerCase()
    .replace(/(whisky|whiskey|wine|bottle|single malt|year old|aged|nv|n\.v\.)/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
