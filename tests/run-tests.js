import assert from 'node:assert/strict';
import {
  calculateRelevanceScore,
  filterSearchResults,
  highlightMatches,
  MIN_QUERY_LENGTH
} from '../src/search/filter.js';

const tests = [];

function test(name, fn) {
  tests.push({ name, fn });
}

test('calculateRelevanceScore rewards matches across fields', () => {
  const item = {
    title: 'Agreement of Purchase and Sale',
    subtitle: 'OREA Form 100',
    description: 'Primary agreement for residential properties',
    keywords: ['purchase', 'sale', 'agreement'],
    category: 'Purchase & Sale'
  };

  const score = calculateRelevanceScore(item, 'purchase');
  assert(score > 0, 'Expected score to be positive for matching query');
});

test('filterSearchResults merges datasets and sorts by score', () => {
  const searchData = {
    forms: [
      {
        id: 'form-1',
        type: 'Form',
        title: 'Agreement of Purchase and Sale',
        subtitle: 'OREA Form 100',
        description: 'Primary agreement for residential properties',
        keywords: ['purchase', 'agreement'],
        category: 'Purchase'
      }
    ],
    clauses: [
      {
        id: 'clause-1',
        type: 'Clause',
        title: 'Financing Condition',
        subtitle: 'MORT-1',
        description: 'Provides protection if financing is not secured',
        keywords: ['mortgage', 'loan'],
        category: 'Financing'
      },
      {
        id: 'clause-2',
        type: 'Clause',
        title: 'Purchase Price Adjustment',
        subtitle: 'ADJ-1',
        description: 'Aligns purchase price with appraisal',
        keywords: ['purchase', 'price'],
        category: 'Purchase'
      }
    ]
  };

  const results = filterSearchResults(searchData, 'purchase');
  assert.equal(results.length, 2, 'Expected two results containing the query');
  assert(results.some(result => result.id === 'form-1'), 'Merged results should include form entries');
  assert(results.some(result => result.id === 'clause-2'), 'Merged results should include clause entries');
  for (let index = 1; index < results.length; index += 1) {
    assert(
      results[index - 1].score >= results[index].score,
      'Results should be sorted by descending relevance'
    );
  }
});

test('filterSearchResults enforces minimum query length', () => {
  const searchData = { forms: [], clauses: [] };
  const results = filterSearchResults(searchData, 'a');
  assert.equal(results.length, 0);
});

test('MIN_QUERY_LENGTH is exposed for UI integrations', () => {
  assert.equal(MIN_QUERY_LENGTH, 2);
});

test('highlightMatches wraps case-insensitive matches safely', () => {
  const highlighted = highlightMatches('Agreement of Purchase and Sale', 'purchase');
  assert.ok(
    highlighted.includes('<span class="highlight">Purchase</span>'),
    'Expected highlight span for matching term'
  );
});

test('highlightMatches escapes special characters in the query', () => {
  const highlighted = highlightMatches('Section 1.1 (a)', '(a)');
  assert.ok(highlighted.includes('<span class="highlight">(a)</span>'));
});

(async () => {
  let failures = 0;

  for (const { name, fn } of tests) {
    try {
      await fn();
      console.log(`✅ ${name}`);
    } catch (error) {
      failures += 1;
      console.error(`❌ ${name}`);
      console.error(error);
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} test(s) failed.`);
    process.exit(1);
  } else {
    console.log(`\nAll ${tests.length} test(s) passed.`);
  }
})();
