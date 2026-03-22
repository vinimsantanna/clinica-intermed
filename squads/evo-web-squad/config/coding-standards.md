# Coding Standards — evo-web-squad

> Extends aiox-core coding standards.

## HTML
- Semântico: usar `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` corretamente
- Alt text obrigatório em todas as imagens
- ARIA labels em elementos interativos sem texto visível
- Um único `<h1>` por página

## CSS
- Mobile-first: estilos base para mobile, `@media (min-width: ...)` para desktop
- BEM para nomenclatura de classes quando não usar utility-first
- Variáveis CSS para cores, fontes e espaçamentos
- Sem inline styles (exceto gerados por JS)

## JavaScript
- Vanilla JS por padrão para landing pages simples
- Defer ou async em todos os scripts não-críticos
- Sem bibliotecas desnecessárias — medir impacto no bundle

## Performance
- Imagens em WebP ou AVIF
- Lazy loading em imagens abaixo do fold
- `font-display: swap` em Google Fonts
- Critical CSS inline no `<head>`

## SEO
- Meta tags completas (title, description, og:*, twitter:*)
- Structured data onde aplicável
- Canonical em toda página
- sitemap.xml e robots.txt presentes
