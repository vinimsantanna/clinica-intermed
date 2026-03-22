---
workflow: Web Delivery Flow
responsavel: "@james"
gateway: james-pre-task-gate.md
---

# Web Delivery Flow

Fluxo completo de entrega de um ativo web — do briefing ao lançamento.

## Fases

```
[JAMES GATE]
     ↓
Phase 1: STRATEGY (@web-strategist / Vera)
  └── web-planning-task.md
      → Brief aprovado + Arquitetura de informação + SEO plan

[JAMES GATE]
     ↓
Phase 2: IMPLEMENTATION (@web-builder / Bolt)
  └── web-implementation-task.md
      → Código + Integrações + Staging URL

[JAMES GATE]
     ↓
Phase 3: VALIDATION
  ├── @qa *review (qualidade técnica)
  └── Stakeholder approval (staging)

[JAMES GATE]
     ↓
Phase 4: OPTIMIZATION (@web-builder / Bolt)
  └── web-optimization-task.md
      → Performance ≥ metas + SEO validado

[JAMES GATE]
     ↓
Phase 5: LAUNCH (@devops / Gage)
  └── Deploy produção + DNS + SSL
      → Ativo ao ar ✅

Phase 6: MONITOR (contínuo)
  └── Métricas, conversão, iterações
```

## Comandos Rápidos

```
@vera *briefing          → Inicia Phase 1
@bolt *implement         → Inicia Phase 2 (requer brief aprovado)
@bolt *optimize          → Inicia Phase 4 (requer staging)
@devops *deploy          → Inicia Phase 5 (requer JAMES GATE)
```
