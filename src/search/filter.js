export const MIN_QUERY_LENGTH = 2;

const SEARCH_WEIGHTS = {
  title: 10,
  subtitle: 8,
  description: 5,
  keywords: 3,
  category: 2
};

function normalizeQuery(query) {
  return query?.trim().toLowerCase() ?? '';
}

export function calculateRelevanceScore(item, query) {
  const normalizedQuery = normalizeQuery(query);
  if (!normalizedQuery) {
    return 0;
  }

  let score = 0;
  const { title = '', subtitle = '', description = '', keywords = [], category = '' } = item;

  if (title.toLowerCase().includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.title;
  }

  if (subtitle.toLowerCase().includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.subtitle;
  }

  if (description.toLowerCase().includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.description;
  }

  if (Array.isArray(keywords) && keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery))) {
    score += SEARCH_WEIGHTS.keywords;
  }

  if (category.toLowerCase().includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.category;
  }

  return score;
}

export function filterSearchResults(searchData, query) {
  const normalizedQuery = normalizeQuery(query);
  if (normalizedQuery.length < MIN_QUERY_LENGTH) {
    return [];
  }

  const { forms = [], clauses = [] } = searchData ?? {};
  const allItems = [...forms, ...clauses];

  return allItems
    .map(item => ({ ...item, score: calculateRelevanceScore(item, normalizedQuery) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightMatches(text, query) {
  if (typeof text !== 'string') {
    return text;
  }

  const normalizedQuery = normalizeQuery(query);
  if (normalizedQuery.length < MIN_QUERY_LENGTH) {
    return text;
  }

  const escapedQuery = escapeRegExp(normalizedQuery);
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}
