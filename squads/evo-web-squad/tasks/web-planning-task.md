---
task: Web Planning
responsavel: "@web-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - objective: Objetivo de negócio do ativo web (obrigatório)
  - asset_type: Tipo de ativo — landing-page | site | microsite | hotsite (obrigatório)
  - target_audience: Público-alvo e persona (obrigatório)
  - conversion_goal: Meta de conversão principal (obrigatório)
  - brand_context: Contexto de marca e posicionamento (opcional)
  - competitors: Referências e concorrentes (opcional)
Saida: |
  - brief: Documento de briefing estratégico completo
  - sitemap: Arquitetura de informação / estrutura de seções
  - seo_plan: Estratégia SEO on-page (keywords, meta, estrutura H1-H3)
  - narrative_flow: Fluxo narrativo de conversão da página
  - success_metrics: KPIs e métricas de sucesso
Checklist:
  - "[ ] Entender objetivo de negócio"
  - "[ ] Definir persona e jornada do usuário"
  - "[ ] Mapear proposta de valor única"
  - "[ ] Definir meta de conversão principal e secundária"
  - "[ ] Estruturar arquitetura de informação (seções e hierarquia)"
  - "[ ] Planejar narrativa de conversão (problema → solução → prova → CTA)"
  - "[ ] Definir estratégia SEO (keyword principal, LSIs, meta title, meta description)"
  - "[ ] Documentar referências e benchmarks"
  - "[ ] Definir KPIs de sucesso"
  - "[ ] Validar brief com stakeholder"
---

# Web Planning Task

Briefing estratégico completo para ativos web. Define tudo que precisa ser verdade
antes de qualquer linha de design ou código começar.

## Fluxo

```
1. ELICITAR objetivo de negócio
   ├── O que este ativo precisa fazer para o negócio?
   ├── Qual a meta de conversão? (lead, venda, cadastro, contato)
   └── Qual o prazo e contexto de lançamento?

2. DEFINIR persona
   ├── Quem é o visitante ideal?
   ├── Qual a dor/desejo que traz ele até a página?
   └── Qual o nível de consciência do problema?

3. ESTRUTURAR proposta de valor
   ├── O que torna esta oferta única?
   ├── Por que agora? Por que aqui?
   └── Qual a prova social disponível?

4. MAPEAR arquitetura de informação
   ├── Hero (proposta de valor + CTA principal)
   ├── Problema / Contexto
   ├── Solução / Benefícios
   ├── Provas (depoimentos, casos, números)
   ├── Oferta detalhada
   ├── FAQ (objeções)
   └── CTA final

5. PLANEJAR SEO
   ├── Keyword principal (intenção de busca)
   ├── Keywords secundárias (LSI)
   ├── Meta title (até 60 chars)
   ├── Meta description (até 155 chars)
   └── Estrutura de headings (H1 → H2 → H3)

6. DEFINIR KPIs
   ├── Taxa de conversão alvo
   ├── Bounce rate aceitável
   ├── Tempo médio na página
   └── Fontes de tráfego esperadas

7. DOCUMENTAR brief final
   └── Salvar em docs/web-assets/{asset-name}/brief.md
```

## Output Esperado

```markdown
# Brief — {Nome do Ativo}

## Objetivo de Negócio
...

## Persona
...

## Proposta de Valor
...

## Arquitetura de Informação
...

## Estratégia SEO
...

## KPIs
...
```
