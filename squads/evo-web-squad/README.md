# evo-web-squad — Web Assets Squad

## Sobre

Squad responsável por planejar, criar, implementar e otimizar ativos web com foco em posicionamento, experiência e conversão.

Transforma objetivos de negócio em landing pages, sites e estruturas digitais que funcionam como ativo comercial — alinhando narrativa, design, tecnologia, SEO, performance e análise de dados.

## Agentes

| Agente | Nome | Responsabilidade |
|--------|------|-----------------|
| `@web-strategist` | Vera 🎯 | Briefing, narrativa, SEO, arquitetura de informação |
| `@web-builder` | Bolt ⚡ | Implementação, integrações, performance, publicação |

## Fluxo de Entrega

```
@vera *briefing → @bolt *implement → @bolt *optimize → @devops *deploy
```

Todos os passos passam pelo **James Gate** (👑 @james) antes de executar.

## Tasks

| Task | Agente | Descrição |
|------|--------|-----------|
| `web-planning-task.md` | Vera | Briefing estratégico completo |
| `web-implementation-task.md` | Bolt | Implementação técnica |
| `web-optimization-task.md` | Bolt | Auditoria e otimização |

## Scripts

```bash
# Auditar performance de um ativo
node squads/evo-web-squad/scripts/audit-performance.js https://meusite.com.br

# Verificar SEO on-page
node squads/evo-web-squad/scripts/check-seo.js https://meusite.com.br
```

## Metas de Performance

| Métrica | Meta |
|---------|------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
