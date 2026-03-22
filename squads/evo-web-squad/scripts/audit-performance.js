#!/usr/bin/env node
/**
 * audit-performance.js — evo-web-squad
 * Audita performance de um ativo web usando métricas do Lighthouse via CLI.
 *
 * Uso:
 *   node audit-performance.js <url>
 *   node audit-performance.js https://meusite.com.br
 */

const { execSync } = require('child_process');
const url = process.argv[2];

if (!url) {
  console.error('Uso: node audit-performance.js <url>');
  process.exit(1);
}

const THRESHOLDS = {
  performance: 90,
  seo: 95,
  accessibility: 80,
  'best-practices': 90,
};

console.log(`\n⚡ Auditando performance: ${url}\n`);

try {
  // Verifica se lighthouse está instalado
  execSync('npx lighthouse --version', { stdio: 'ignore' });

  const result = execSync(
    `npx lighthouse ${url} --output=json --quiet --chrome-flags="--headless"`,
    { encoding: 'utf8' }
  );

  const report = JSON.parse(result);
  const categories = report.lhr?.categories || {};

  console.log('📊 Resultados:\n');

  let passed = true;
  for (const [key, threshold] of Object.entries(THRESHOLDS)) {
    const score = Math.round((categories[key]?.score || 0) * 100);
    const status = score >= threshold ? '✅' : '❌';
    if (score < threshold) passed = false;
    console.log(`  ${status} ${key.padEnd(20)} ${score}/100  (meta: ${threshold})`);
  }

  // Core Web Vitals
  const audits = report.lhr?.audits || {};
  console.log('\n📐 Core Web Vitals:\n');
  console.log(`  LCP: ${audits['largest-contentful-paint']?.displayValue || 'N/A'}`);
  console.log(`  CLS: ${audits['cumulative-layout-shift']?.displayValue || 'N/A'}`);
  console.log(`  INP: ${audits['interaction-to-next-paint']?.displayValue || 'N/A'}`);

  console.log(`\n${passed ? '✅ Todas as metas atingidas!' : '⚠️  Algumas metas não foram atingidas.'}\n`);
  process.exit(passed ? 0 : 1);
} catch {
  console.log('ℹ️  Lighthouse não disponível. Execute manualmente:');
  console.log(`   npx lighthouse ${url} --view\n`);
  console.log('   Ou use: https://pagespeed.web.dev\n');
}
