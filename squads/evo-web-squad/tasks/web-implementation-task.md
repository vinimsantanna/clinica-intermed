---
task: Web Implementation
responsavel: "@web-builder"
responsavel_type: agent
atomic_layer: task
elicit: true
depends_on:
  - web-planning-task.md
Entrada: |
  - brief_path: Caminho do brief estratégico (obrigatório)
  - tech_stack: Stack tecnológico — html/css/js | next | astro | wordpress | webflow (obrigatório)
  - design_source: Fonte do design — figma-url | design-doc | builder-only (obrigatório)
  - integrations: Lista de integrações necessárias (opcional)
  - hosting: Plataforma de hospedagem (opcional)
Saida: |
  - source_code: Código-fonte do ativo web
  - integrations_configured: Integrações configuradas e testadas
  - staging_url: URL de staging para validação
  - implementation_doc: Documentação técnica do que foi implementado
Checklist:
  - "[ ] Ler brief estratégico completo"
  - "[ ] Configurar ambiente de desenvolvimento"
  - "[ ] Implementar estrutura HTML semântica"
  - "[ ] Implementar estilos responsivos (mobile-first)"
  - "[ ] Implementar interações e animações"
  - "[ ] Configurar formulários e CTAs"
  - "[ ] Integrar analytics (GA4 / GTM)"
  - "[ ] Integrar pixels de rastreamento"
  - "[ ] Integrar CRM / automação de marketing"
  - "[ ] Otimizar imagens e assets"
  - "[ ] Testar em múltiplos dispositivos e browsers"
  - "[ ] Validar acessibilidade (WCAG AA mínimo)"
  - "[ ] Deploy em staging"
  - "[ ] Validar com stakeholder"
---

# Web Implementation Task

Implementação técnica completa do ativo web a partir do brief estratégico aprovado.

## Fluxo

```
1. PREPARAR ambiente
   ├── Ler brief e arquitetura de informação
   ├── Configurar repositório e stack
   └── Preparar componentes base

2. IMPLEMENTAR estrutura
   ├── HTML semântico (header, main, sections, footer)
   ├── CSS responsivo (mobile-first, breakpoints)
   ├── JavaScript para interações
   └── Assets otimizados (imagens, fontes, ícones)

3. CONFIGURAR integrações
   ├── Google Analytics 4 (eventos de conversão)
   ├── Google Tag Manager
   ├── Pixels (Meta, LinkedIn, etc.)
   ├── Formulários (webhook, CRM, email)
   └── Chat / WhatsApp (se aplicável)

4. TESTAR qualidade
   ├── Cross-browser (Chrome, Firefox, Safari, Edge)
   ├── Cross-device (mobile, tablet, desktop)
   ├── Formulários e fluxos de conversão
   └── Acessibilidade básica

5. DEPLOY staging
   └── URL para validação do cliente/stakeholder

6. DOCUMENTAR
   └── Salvar em docs/web-assets/{asset-name}/implementation.md
```

## Stack Suportadas

| Stack | Casos de Uso |
|-------|-------------|
| HTML/CSS/JS | Landing pages simples, máxima performance |
| Next.js | Sites com SSR, blog, e-commerce |
| Astro | Sites estáticos com componentes |
| WordPress | Sites com CMS para cliente editar |
| Webflow | Sites sem código, design-driven |
