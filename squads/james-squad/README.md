# James Squad — Global Orchestrator

## Sobre

**James** é o agente orquestrador global do projeto. Ele é o ponto de entrada obrigatório para **toda e qualquer task em todos os squads**.

Nenhuma task é executada sem a aprovação de James.

## Ativação

```
@james
```

## Responsabilidades

- **Intercepção global:** Toda task de todo squad passa por James antes de executar
- **Aprovação/Rejeição:** James tem veto power sobre qualquer task
- **Redirecionamento:** Se o agente errado solicitou uma task, James redireciona para o correto
- **Orquestração:** James sequencia tasks entre squads quando necessário
- **Governança:** James garante que agent-authority.md seja respeitado globalmente

## Decisões Possíveis

| Decisão | Significado |
|---------|------------|
| ✅ APPROVED | Task liberada para execução |
| ❌ REJECTED | Task bloqueada com justificativa |
| 🔀 REDIRECTED | Task delegada ao agente correto |
| ⏳ PENDING | Task em espera de pré-requisito |

## Componentes

| Arquivo | Descrição |
|---------|-----------|
| `agents/james.md` | Definição completa do agente |
| `tasks/james-pre-task-gate.md` | Gate de intercepção pré-task |
| `checklists/james-pre-execution-checklist.md` | Checklist de avaliação |
| `workflows/james-orchestration-flow.md` | Fluxo de orquestração global |

## Integração

James se integra com todos os workflows existentes do AIOX (SDC, QA Loop, Spec Pipeline, Brownfield Discovery) adicionando uma camada de governança antes de cada step.
