---
task: Web Optimization
responsavel: "@web-builder"
responsavel_type: agent
atomic_layer: task
depends_on:
  - web-implementation-task.md
Entrada: |
  - asset_url: URL do ativo publicado ou staging (obrigatório)
  - focus_areas: Áreas de foco — performance | seo | conversion | all (default: all)
  - baseline_metrics: Métricas atuais de referência (opcional)
Saida: |
  - audit_report: Relatório completo de auditoria
  - optimization_applied: Lista de otimizações aplicadas
  - metrics_after: Métricas após otimização
  - recommendations: Recomendações para ciclos futuros
Checklist:
  - "[ ] Auditar Core Web Vitals (LCP, CLS, INP)"
  - "[ ] Auditar Lighthouse Score (Performance, SEO, Accessibility, Best Practices)"
  - "[ ] Otimizar imagens (formato, compressão, lazy loading)"
  - "[ ] Otimizar JavaScript (bundle size, code splitting, defer)"
  - "[ ] Otimizar CSS (critical CSS, unused CSS removal)"
  - "[ ] Configurar cache e CDN"
  - "[ ] Validar meta tags e Open Graph"
  - "[ ] Validar structured data (schema.org)"
  - "[ ] Verificar sitemap.xml e robots.txt"
  - "[ ] Auditar taxa de conversão (CRO básico)"
  - "[ ] Testar velocidade mobile (PageSpeed Insights)"
  - "[ ] Documentar otimizações aplicadas"
---

# Web Optimization Task

Auditoria e otimização contínua de performance, SEO técnico e conversão.

## Metas de Performance

| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| PageSpeed Mobile | > 85 |

## Fluxo

```
1. AUDITAR estado atual
   ├── Rodar audit-performance.js
   ├── Rodar check-seo.js
   ├── Rodar Lighthouse (CI ou manual)
   └── Registrar baseline

2. IDENTIFICAR prioridades
   ├── Quick wins (impacto alto, esforço baixo)
   ├── Melhorias médias (impacto médio)
   └── Backlog (para próximo ciclo)

3. APLICAR otimizações
   ├── Performance: imagens, fonts, JS/CSS, cache
   ├── SEO: meta tags, schema, sitemap, robots
   └── CRO: CTAs, formulários, heatmap analysis

4. VALIDAR melhorias
   ├── Reaudit após mudanças
   └── Comparar com baseline

5. DOCUMENTAR
   └── Salvar em docs/web-assets/{asset-name}/optimization-log.md
```
