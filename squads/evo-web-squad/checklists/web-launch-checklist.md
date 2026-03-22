---
checklist: Web Launch Checklist
responsavel: "@web-builder"
applies_to: evo-web-squad
---

# Web Launch Checklist

Execute ANTES de qualquer go-live de ativo web.

## Estratégia
- [ ] Brief aprovado pelo stakeholder
- [ ] Objetivo de negócio e KPIs definidos
- [ ] Persona e jornada documentadas

## Conteúdo & SEO
- [ ] Todos os textos revisados e aprovados
- [ ] Meta title configurado (≤ 60 chars)
- [ ] Meta description configurada (≤ 155 chars)
- [ ] H1 único e com keyword principal
- [ ] Alt text em todas as imagens
- [ ] Open Graph (og:title, og:description, og:image) configurado
- [ ] Structured data (schema.org) implementado
- [ ] sitemap.xml gerado e acessível
- [ ] robots.txt configurado

## Performance
- [ ] LCP < 2.5s (PageSpeed)
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Lighthouse Performance > 90 (mobile)
- [ ] Imagens em WebP/AVIF com dimensões corretas
- [ ] Fontes com font-display: swap
- [ ] JavaScript deferido / lazy loaded

## Integrações
- [ ] Google Analytics 4 disparando pageview
- [ ] Eventos de conversão configurados (form_submit, cta_click)
- [ ] GTM container publicado
- [ ] Pixels de remarketing ativos (Meta, etc.)
- [ ] Formulários testados end-to-end (submissão → CRM/email)

## Técnico
- [ ] SSL/HTTPS configurado
- [ ] Redirect www → não-www (ou vice-versa) configurado
- [ ] 404 personalizado
- [ ] Cross-browser testado (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testado (iOS Safari, Android Chrome)
- [ ] Formulários funcionando em mobile

## Pós-Launch
- [ ] Search Console: URL inspecionada e indexação solicitada
- [ ] Backup configurado
- [ ] Monitoramento de uptime ativo
- [ ] KPIs sendo coletados e dashboard criado
