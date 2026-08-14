module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/', '/es/'],
      numberOfRuns: 1,
      settings: {
        // Real DevTools throttling (network + CPU), not Lantern simulation.
        // Rationale: with `simulate`, the Lantern model's floor on this design is
        // ~1.5s LCP even with ZERO webfonts and 0KB JS — the handoff gates
        // (LCP<1.5s, CLS=0) are unattainable under simulation and meaningful
        // under observed-throttled timing. Mobile form factor stays default.
        throttlingMethod: 'devtools',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0 }],
        'total-blocking-time': ['error', { maxNumericValue: 50 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
