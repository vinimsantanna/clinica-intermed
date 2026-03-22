#!/usr/bin/env node
/**
 * check-seo.js — evo-web-squad
 * Verifica itens básicos de SEO on-page de um ativo web.
 *
 * Uso:
 *   node check-seo.js <url>
 *   node check-seo.js https://meusite.com.br
 */

const https = require('https');
const http = require('http');
const url = process.argv[2];

if (!url) {
  console.error('Uso: node check-seo.js <url>');
  process.exit(1);
}

function fetch(targetUrl) {
  return new Promise((resolve, reject) => {
    const lib = targetUrl.startsWith('https') ? https : http;
    lib.get(targetUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extract(html, regex, group = 1) {
  const match = html.match(regex);
  return match ? match[group] : null;
}

(async () => {
  console.log(`\n🔍 Verificando SEO: ${url}\n`);

  try {
    const html = await fetch(url);

    const checks = [];

    // Title
    const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i);
    checks.push({
      name: 'Meta Title',
      pass: title && title.length > 0 && title.length <= 60,
      value: title ? `"${title}" (${title.length} chars)` : 'Não encontrado',
      tip: 'Deve ter entre 1 e 60 caracteres',
    });

    // Meta Description
    const metaDesc = extract(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
    checks.push({
      name: 'Meta Description',
      pass: metaDesc && metaDesc.length > 0 && metaDesc.length <= 155,
      value: metaDesc ? `${metaDesc.length} chars` : 'Não encontrada',
      tip: 'Deve ter entre 1 e 155 caracteres',
    });

    // H1
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    checks.push({
      name: 'H1 único',
      pass: h1Count === 1,
      value: `${h1Count} H1(s) encontrado(s)`,
      tip: 'Deve haver exatamente 1 H1 por página',
    });

    // Open Graph
    const ogTitle = extract(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
    checks.push({
      name: 'OG Title',
      pass: !!ogTitle,
      value: ogTitle || 'Não encontrado',
      tip: 'Necessário para compartilhamento social',
    });

    const ogDesc = extract(html, /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    checks.push({
      name: 'OG Description',
      pass: !!ogDesc,
      value: ogDesc ? 'Presente' : 'Não encontrada',
      tip: 'Necessário para compartilhamento social',
    });

    const ogImage = extract(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    checks.push({
      name: 'OG Image',
      pass: !!ogImage,
      value: ogImage ? 'Presente' : 'Não encontrada',
      tip: 'Necessário para compartilhamento social',
    });

    // Canonical
    const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    checks.push({
      name: 'Canonical',
      pass: !!canonical,
      value: canonical || 'Não encontrado',
      tip: 'Evita conteúdo duplicado',
    });

    // Lang
    const lang = extract(html, /<html[^>]+lang=["']([^"']+)["']/i);
    checks.push({
      name: 'HTML lang',
      pass: !!lang,
      value: lang || 'Não definido',
      tip: 'Importante para acessibilidade e SEO',
    });

    // Resultados
    let passed = 0;
    for (const check of checks) {
      const icon = check.pass ? '✅' : '❌';
      console.log(`  ${icon} ${check.name.padEnd(20)} ${check.value}`);
      if (!check.pass) console.log(`     💡 ${check.tip}`);
      if (check.pass) passed++;
    }

    console.log(`\n📊 ${passed}/${checks.length} verificações passaram.\n`);
    process.exit(passed === checks.length ? 0 : 1);
  } catch (err) {
    console.error(`Erro ao acessar ${url}: ${err.message}\n`);
    process.exit(1);
  }
})();
