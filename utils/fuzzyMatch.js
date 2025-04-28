// utils/fuzzyMatch.js

import { normalizeBottleName } from './normalizeBottleName.js';

export function bestFuzzyMatch(scrapedName, listings) {
  const Fuse = window.Fuse;
  
  const options = {
    keys: ['name'],
    threshold: 0.3 // 0 = perfect match, 1 = match anything
  };
  
  const normalizedListings = listings.map(item => ({
    ...item,
    name: normalizeBottleName(item.name)
  }));

  const fuse = new Fuse(normalizedListings, options);

  const result = fuse.search(normalizeBottleName(scrapedName));

  if (result.length > 0) {
    return result[0].item;
  } else {
    return null;
  }
}
