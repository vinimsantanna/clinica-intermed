---
task: James Pre-Task Gate
responsavel: "@james"
responsavel_type: agent
atomic_layer: gate
scope: global
intercepts: all-squads
priority: NON-NEGOTIABLE
Entrada: |
  - task_name: Nome da task a ser executada (obrigatório)
  - squad: Squad de origem da task (obrigatório)
  - agent: Agente solicitante (obrigatório)
  - context: Contexto e justificativa da task (obrigatório)
  - dependencies: Tasks das quais esta depende (opcional)
  - risk_level: Nível de risco estimado low|medium|high (opcional, default: medium)
Saida: |
  - decision: APPROVED | REJECTED | REDIRECTED | PENDING
  - reason: Justificativa da decisão
  - next_action: Ação a ser tomada após a decisão
  - redirect_to: Agente destino (se REDIRECTED)
Checklist:
  - "[ ] Identificar task e squad de origem"
  - "[ ] Verificar alinhamento com objetivos do projeto"
  - "[ ] Verificar dependências pendentes"
  - "[ ] Avaliar risco e impacto"
  - "[ ] Verificar sequenciamento correto"
  - "[ ] Tomar decisão: APPROVED | REJECTED | REDIRECTED | PENDING"
  - "[ ] Documentar decisão com justificativa"
  - "[ ] Comunicar resultado ao agente solicitante"
---

# James Pre-Task Gate

Portão de intercepção obrigatório que James executa antes de qualquer task de qualquer squad.

## Propósito

Garantir que NENHUMA task seja executada sem avaliação prévia de:
- Alinhamento estratégico
- Dependências entre tasks
- Prioridade e sequenciamento
- Risco e impacto no projeto

## Fluxo de Execução

```
1. RECEBER solicitação de task
   ├── task_name: identificação da task
   ├── squad: squad de origem
   ├── agent: agente solicitante
   └── context: justificativa

2. AVALIAR alinhamento
   ├── A task está alinhada com os objetivos atuais do projeto?
   ├── É o momento correto para executá-la?
   └── Há tasks de maior prioridade pendentes?

3. VERIFICAR dependências
   ├── Todas as tasks pré-requisito foram concluídas?
   ├── Há bloqueios externos?
   └── O agente correto está solicitando?

4. AVALIAR risco
   ├── low  → Aprovação automática (se alinhado)
   ├── medium → Revisão rápida de James
   └── high → Revisão detalhada + justificativa obrigatória

5. DECIDIR
   ├── APPROVED   → Task liberada para execução
   ├── REJECTED   → Task bloqueada (motivo documentado)
   ├── REDIRECTED → Task redirecionada para agente mais adequado
   └── PENDING    → Task em espera (aguardando pré-requisito)

6. DOCUMENTAR e COMUNICAR decisão
```

## Critérios de Aprovação

| Critério | APPROVED | REJECTED | PENDING |
|----------|----------|----------|---------|
| Alinhamento com objetivos | ✅ Sim | ❌ Não | ⏳ Indefinido |
| Dependências satisfeitas | ✅ Sim | — | ❌ Não |
| Agente correto | ✅ Sim | ❌ Não → REDIRECTED | — |
| Momento oportuno | ✅ Sim | ❌ Não | ⏳ Aguardar |
| Risco aceitável | ✅ Sim | ❌ Alto sem justificativa | — |

## Formato de Resposta de James

```
👑 JAMES GATE — {task_name} [{squad}]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status:    APPROVED | REJECTED | REDIRECTED | PENDING
Motivo:    {justificativa}
Próximo:   {ação recomendada}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Exemplos

### APPROVED
```
👑 JAMES GATE — dev-develop-story [dev-squad]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status:    ✅ APPROVED
Motivo:    Story validada por @po, dependências OK, prioridade alta.
Próximo:   @dev pode iniciar implementação.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### REJECTED
```
👑 JAMES GATE — qa-gate [qa-squad]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status:    ❌ REJECTED
Motivo:    Implementação ainda não concluída. @dev reportou bloqueio ativo.
Próximo:   Aguardar @dev resolver bloqueio antes de executar QA gate.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### REDIRECTED
```
👑 JAMES GATE — git push [dev-squad]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status:    🔀 REDIRECTED
Motivo:    git push é operação exclusiva de @devops (agent-authority.md).
Próximo:   Redirecionar para @devops *push.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
