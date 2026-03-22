---
workflow: James Orchestration Flow
responsavel: "@james"
scope: global
trigger: before-any-task
---

# James Orchestration Flow

## Trigger

Este workflow é acionado automaticamente antes de qualquer task em qualquer squad.

## Fluxo

```
[QUALQUER AGENTE solicita task]
        ↓
[JAMES intercepta]
        ↓
[james-pre-task-gate.md]
        ↓
   ┌────┴────┐
   ↓         ↓         ↓         ↓
APPROVED  REJECTED  REDIRECTED  PENDING
   ↓         ↓         ↓         ↓
Executa   Bloqueia  Delega p/  Enfileira
task      + docs    agente     + aguarda
normal              correto    pré-req
```

## Integração com Workflows Existentes

### Story Development Cycle (SDC)
```
@sm *draft        → JAMES GATE → @sm executa
@po *validate     → JAMES GATE → @po executa
@dev *develop     → JAMES GATE → @dev executa
@qa *qa-gate      → JAMES GATE → @qa executa
@devops *push     → JAMES GATE → @devops executa
```

### QA Loop
```
@qa review        → JAMES GATE → @qa executa
@dev fixes        → JAMES GATE → @dev executa
re-review         → JAMES GATE → @qa executa
```

## Prioridades de James

| Prioridade | Situação |
|-----------|----------|
| P0 — Bloquear imediatamente | Violação de agent-authority, operação destrutiva não autorizada |
| P1 — Revisar antes de aprovar | Tasks de alto risco, mudanças em infra/CI/CD |
| P2 — Aprovação rápida | Tasks alinhadas, dependências OK, agente correto |
| P3 — Aprovação automática | Tasks de baixo risco com contexto claro |
