# Wireframe — Landing Page Clínica Intermed
**Versão:** 1.0  
**Responsável:** @iris (Iris — UX/UI Designer)  
**Data:** 2026-03-22  
**Stack alvo:** HTML/CSS/JS — Mobile-first  
**Objetivo:** Conversão via WhatsApp (Meta Ads → Landing Page → Lead)

---

## PRINCÍPIOS DE DESIGN

- **Mobile-first obrigatório** — tráfego vem 90% de Meta Ads mobile
- **Uma ação, um CTA** — WhatsApp em todos os pontos de conversão
- **Emoção antes de informação** — imagem impacta antes do texto
- **Scroll contínuo** — sem âncoras que quebrem o ritmo emocional
- **Premium sem frieza** — Navy + Teal + Off-white = confiança + acolhimento

---

## SISTEMA DE DESIGN

### Cores
```
--color-navy:      #3D4466   (primária — confiança)
--color-teal:      #17A8A2   (secundária — inovação/cuidado)
--color-charcoal:  #2D2D2D   (texto)
--color-mint:      #9EFBB2   (acento — leveza)
--color-offwhite:  #F3F3F1   (backgrounds alternativos)
--color-white:     #FFFFFF
```

### Tipografia
```
Font Display:  Zitter Regular      → Headlines de impacto (H1, H2 destaque)
Font Primary:  Yu Gothic Bold      → Títulos de seção (H2, H3)
Font Body:     Yu Gothic Medium    → Textos, labels, CTAs
```

### Escala tipográfica (mobile)
```
H1:      40px / line-height: 1.15 / Zitter
H2:      28px / line-height: 1.25 / Yu Gothic Bold
H3:      20px / line-height: 1.35 / Yu Gothic Bold
Body:    16px / line-height: 1.7  / Yu Gothic Medium
Small:   13px / line-height: 1.5  / Yu Gothic Medium
CTA:     17px / font-weight: 700  / Yu Gothic Bold
```

### Espaçamento base
```
Section padding:  80px 24px (mobile) | 120px 80px (desktop)
Card gap:         16px (mobile) | 24px (desktop)
CTA height:       56px (touch-friendly)
Border-radius:    12px (cards) | 999px (CTAs pill)
```

### Componente CTA WhatsApp
```
Background:  #25D366 (WhatsApp green)
Texto:       #FFFFFF / Yu Gothic Bold / 17px
Ícone:       WhatsApp SVG à esquerda
Padding:     16px 32px
Border-radius: 999px
Shadow:      0 4px 20px rgba(37,211,102,0.35)
Hover:       brightness(1.08) + translateY(-2px)
```

### Floating WhatsApp Button
```
Position:    fixed bottom-right
Tamanho:     60px × 60px (mobile) | 68px × 68px (desktop)
Z-index:     9999
Background:  #25D366
Ícone:       WhatsApp branco 30px
Shadow:      0 4px 20px rgba(0,0,0,0.25)
Pulsação:    animação sutil a cada 3s para chamar atenção
Aparece:     após 2s de scroll
```

---

## SEÇÕES — WIREFRAME DETALHADO

---

### [GLOBAL] HEADER FIXO

```
┌─────────────────────────────────────────┐
│  [Logo im-logo07.png]          [WHATSAPP]│
│   altura: 60px                botão pill │
│   background: white/95% blur             │
│   border-bottom: 1px solid #eee          │
└─────────────────────────────────────────┘
```

**Comportamento:** Sticky. Em scroll > 80px, adiciona shadow suave.  
**Mobile:** Logo à esquerda + ícone WhatsApp verde à direita (sem texto).  
**Desktop:** Logo + botão "Falar pelo WhatsApp" completo.

---

### SEÇÃO 1 — HERO

```
┌─────────────────────────────────────────┐
│                                          │
│   [FOTO: DSC05480.jpg]                   │
│   Mulher sorrindo na entrada             │
│   Full-width, full-height (100vh mobile) │
│   Overlay: gradient navy 0%→65% bottom   │
│                                          │
│                    ┌──────────────────┐  │
│                    │ Clínica Intermed │  │
│                    │ Estética e Saúde │  │
│                    │ [small / teal]   │  │
│                    └──────────────────┘  │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  Pare de vestir o que cabe.     │   │
│   │  Comece a vestir o que deseja.  │   │
│   │  [H1 / Zitter / white / 40px]  │   │
│   └──────────────────────────────────┘   │
│                                          │
│   A clínica onde o cuidado começa no    │
│   primeiro contato — e acompanha você   │
│   em cada etapa da sua jornada.         │
│   [body / white 85% / 16px]            │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Quero realizar meu sonho    │   │
│   │  [CTA WhatsApp green / pill]    │   │
│   └──────────────────────────────────┘   │
│                                          │
│   ▾ scroll indicator (animated)          │
└─────────────────────────────────────────┘
```

**Detalhes:**
- Foto ocupa 100vh no mobile
- Overlay gradient: `linear-gradient(to top, rgba(61,68,102,0.85) 0%, transparent 50%)`
- Todo texto e CTA ancorados no bottom da seção
- Animação de entrada: fade-up suave (0.6s)

---

### SEÇÃO 2 — IDENTIFICAÇÃO

```
┌─────────────────────────────────────────┐
│   background: #FFFFFF                    │
│   padding: 80px 24px                     │
│                                          │
│   Você se reconhece aqui?               │
│   [H2 / Yu Gothic Bold / navy / 28px]   │
│                                          │
│   [linha decorativa teal 40px]          │
│                                          │
│   Você já acordou e sentiu que o        │
│   espelho não mostrava quem você        │
│   realmente é?                          │
│                                          │
│   Passou anos priorizando todo mundo    │
│   — menos você?                         │
│                                          │
│   Olhou para o próprio corpo e          │
│   pensou: "Um dia eu cuido disso"?      │
│   [body / charcoal / 18px / italic      │
│    para as perguntas / espaçamento      │
│    generoso entre parágrafos]           │
│                                          │
│   ──────────────────────────────────── │
│   Esse dia chegou. E você não precisa   │
│   passar por isso sozinha.              │
│   [body bold / navy / 18px]            │
│   ──────────────────────────────────── │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Falar com a Intermed        │   │
│   └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Detalhes:**
- Fundo branco — respiro após hero escuro
- As 3 perguntas em itálico com espaçamento generoso criam ritmo de leitura
- Frase de fechamento em destaque visual (linha separadora teal)

---

### SEÇÃO 3 — A INTERMED

```
┌─────────────────────────────────────────┐
│   background: #F3F3F1 (offwhite)        │
│   padding: 80px 24px                     │
│                                          │
│   Saúde plena. Cuidado integral.        │
│   Em um só lugar.                       │
│   [H2 / Zitter / navy]                  │
│                                          │
│   [foto: 1F5A3289.JPG — dupla           │
│    recepção Intermed]                   │
│   border-radius: 16px                   │
│   margin: 32px 0                        │
│                                          │
│   [texto body / charcoal]               │
│   A Clínica Intermed nasceu para...     │
│                                          │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│   │  🔵     │ │  🔵     │ │  🔵     │  │
│   │Do 1º    │ │Equipe   │ │Ambiente │  │
│   │contato  │ │especial │ │p/ você  │  │
│   │ao pós-op│ │izada    │ │         │  │
│   └─────────┘ └─────────┘ └─────────┘  │
│   [3 cards / background white /         │
│    border-top 3px teal / shadow suave]  │
└─────────────────────────────────────────┘
```

**Mobile:** 3 cards em coluna vertical  
**Desktop:** 3 cards em grid 3 colunas

---

### SEÇÃO 4 — COMO FUNCIONA

```
┌─────────────────────────────────────────┐
│   background: #3D4466 (navy)            │
│   padding: 80px 24px                     │
│   color: white                           │
│                                          │
│   Simples. Cuidadoso. Completo.         │
│   [H2 / Zitter / white]                 │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  01                             │   │
│   │  [número / teal / 48px]         │   │
│   │  Primeiro contato               │   │
│   │  [H3 / white]                   │   │
│   │  Entre em contato pelo          │   │
│   │  WhatsApp. Nossa equipe...      │   │
│   │  [body / white 80%]             │   │
│   └──────────────────────────────────┘   │
│   [linha conectora vertical teal]        │
│   ┌──────────────────────────────────┐   │
│   │  02  Planejamento personalizado  │   │
│   └──────────────────────────────────┘   │
│   [linha conectora vertical teal]        │
│   ┌──────────────────────────────────┐   │
│   │  03  Realização e acompanhamento │   │
│   └──────────────────────────────────┘   │
│                                          │
│   [foto: 1F5A3362.jpg — tablet+prótese] │
│   border-radius: 16px / margin-top: 32px│
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Começar meu planejamento    │   │
│   │  [CTA white outline pill]       │   │
│   └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Detalhes:**
- Fundo navy cria contraste máximo — seção de impacto
- Números em teal com tamanho grande criam hierarquia visual forte
- Linha conectora vertical entre os passos reforça sequência

---

### SEÇÃO 5 — PROCEDIMENTOS

```
┌─────────────────────────────────────────┐
│   background: #FFFFFF                    │
│   padding: 80px 24px                     │
│                                          │
│   Especialidades realizadas             │
│   na Intermed                           │
│   [H2 / Yu Gothic Bold / navy]          │
│                                          │
│   Procedimentos conduzidos por          │
│   especialistas certificados...         │
│   [body / charcoal]                     │
│                                          │
│   ── CIRURGIAS PLÁSTICAS ──────────── │
│   [label / teal / uppercase / 12px]     │
│                                          │
│   ┌────────────┐ ┌────────────┐         │
│   │Lipo HD/MD  │ │Mastopexia  │         │
│   └────────────┘ └────────────┘         │
│   ┌────────────┐ ┌────────────┐         │
│   │Mamoplastias│ │Abdominop.  │         │
│   └────────────┘ └────────────┘         │
│   ┌────────────┐ ┌────────────┐         │
│   │Pós Bariát. │ │Oto/Bleparo │         │
│   └────────────┘ └────────────┘         │
│   ┌────────────┐ ┌────────────┐         │
│   │Gluteoplast.│ │Rinoplastia │         │
│   └────────────┘ └────────────┘         │
│                                          │
│   ── ESTÉTICA FACIAL ──────────────── │
│   [label / teal / uppercase / 12px]     │
│                                          │
│   ┌────────────┐ ┌────────────┐         │
│   │Rinomodelação│ │Blefaroplas│         │
│   └────────────┘ └────────────┘         │
│   ┌────────────┐ ┌────────────┐         │
│   │   Botox    │ │Preench.Lab.│         │
│   └────────────┘ └────────────┘         │
│   ┌────────────┐ ┌────────────┐         │
│   │Lift lábios │ │Biostimul.  │         │
│   └────────────┘ └────────────┘         │
│                                          │
│   [cards: border 1.5px solid teal/30%   │
│    hover: border-color teal / shadow]   │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Tirar dúvidas sobre         │   │
│   │     um procedimento             │   │
│   └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Mobile:** 2 colunas de cards  
**Desktop:** 4 colunas de cards

---

### SEÇÃO 6 — DIFERENCIAIS

```
┌─────────────────────────────────────────┐
│   background: #F3F3F1 (offwhite)        │
│   padding: 80px 24px                     │
│                                          │
│   Por que a Intermed?                   │
│   [H2 / Zitter / navy]                  │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  [ícone teal]                   │   │
│   │  Tudo em um só lugar            │   │
│   │  [H3 / navy]                    │   │
│   │  Atendimento clínico e          │   │
│   │  cirúrgico integrados...        │   │
│   │  [body / charcoal]              │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [ícone teal]                   │   │
│   │  Planejamento personalizado     │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [ícone teal]                   │   │
│   │  Acompanhamento do início       │   │
│   │  ao fim                         │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [ícone teal]                   │   │
│   │  Agilidade com segurança        │   │
│   └──────────────────────────────────┘   │
│   [cards: fundo branco / shadow suave /  │
│    border-left 4px solid teal]          │
└─────────────────────────────────────────┘
```

---

### SEÇÃO 6.5 — BREAK VISUAL (foto espelho)

```
┌─────────────────────────────────────────┐
│   [FOTO: Dra Érica (3).JPG]             │
│   Full-width / height: 60vh             │
│   object-fit: cover / object-pos: top   │
│                                          │
│   Overlay: gradient navy bottom 40%     │
│                                          │
│   "Aqui, você finalmente               │
│    se vê do jeito que merece."          │
│   [quote / Zitter / white / 28px        │
│    centralizado / bottom da foto]       │
└─────────────────────────────────────────┘
```

**Nota:** Esta seção não estava no escopo original — adicionei como break emocional entre Diferenciais e Equipe. A foto do espelho da Dra. Érica é narrativamente perfeita aqui. Confirmar com `@morgan` se aprovado.

---

### SEÇÃO 7 — EQUIPE

```
┌─────────────────────────────────────────┐
│   background: #3D4466 (navy)            │
│   padding: 80px 24px                     │
│                                          │
│   Quem cuida de você                   │
│   [H2 / Zitter / white]                 │
│                                          │
│   Especialistas dedicados a oferecer   │
│   o melhor cuidado...                  │
│   [body / white 80%]                   │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  [foto circular 120px]          │   │
│   │  Dr. João Eduardo Sena          │   │
│   │  [H3 / white]                   │   │
│   │  Cirurgião Plástico             │   │
│   │  [label / teal / 13px]          │   │
│   │  CRM-SP 195228 · CRM-BA 41564  │   │
│   │  RQE 94739 · RQE 27942         │   │
│   │  [small / white 60% / 12px]    │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [foto circular 120px]          │   │
│   │  Dra. Érica Nascimento          │   │
│   │  Rinoplastia e Estética Facial  │   │
│   │  CRM-BA 26555 · RQE 3610       │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [foto circular 120px]          │   │
│   │  Dr. Marcos Monteiro            │   │
│   │  Especialista em Injetáveis     │   │
│   │  Faciais                        │   │
│   │  CRM-BA 38349                   │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  [foto circular 120px]          │   │
│   │  Regiane Querino                │   │
│   │  Gestora e Fundadora            │   │
│   │  "O acolhimento começa no       │   │
│   │   primeiro contato."            │   │
│   └──────────────────────────────────┘   │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Agendar minha consulta      │   │
│   └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Fotos:** Circular crop com border 2px teal  
**Mobile:** Cards em coluna / **Desktop:** Grid 2×2 ou 4 colunas

---

### SEÇÃO 8 — ESTRUTURA DA CLÍNICA

```
┌─────────────────────────────────────────┐
│   background: #FFFFFF                    │
│   padding: 80px 24px                     │
│                                          │
│   Um espaço pensado para               │
│   o seu bem-estar                      │
│   [H2 / Yu Gothic Bold / navy]          │
│                                          │
│   Da recepção ao centro cirúrgico...   │
│   [body / charcoal]                     │
│                                          │
│   [GALERIA — scroll horizontal mobile]  │
│   ┌──────────┐ ┌──────────┐ ┌────────┐  │
│   │1F5A3289  │ │DSC02090  │ │DSC0559 │  │
│   │recepção  │ │recepção  │ │sala    │  │
│   │equipe    │ │médico    │ │proced. │  │
│   └──────────┘ └──────────┘ └────────┘  │
│   border-radius: 16px / aspect: 4/3     │
│                                          │
│   [dots de navegação / teal]            │
└─────────────────────────────────────────┘
```

**Mobile:** Carousel com scroll horizontal + dots  
**Desktop:** Grid 3 colunas

---

### SEÇÃO 9 — CTA FINAL

```
┌─────────────────────────────────────────┐
│   background: linear-gradient(          │
│     135deg, #3D4466 0%, #17A8A2 100%)  │
│   padding: 100px 24px                   │
│   text-align: center                    │
│                                          │
│   Seu sonho está mais perto            │
│   do que você imagina.                 │
│   [H2 / Zitter / white / 32px]         │
│                                          │
│   Dê o primeiro passo hoje. Nossa      │
│   equipe está pronta para te receber... │
│   [body / white 85%]                   │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  💬 Quero falar com a Intermed  │   │
│   │  [CTA white bg / navy text]     │   │
│   │  [maior / 60px height]          │   │
│   └──────────────────────────────────┘   │
│                                          │
│   Atendimento pelo WhatsApp             │
│   Resposta rápida                       │
│   [small / white 70%]                  │
└─────────────────────────────────────────┘
```

**Detalhes:**
- Gradiente navy→teal é o momento mais premium da página
- CTA invertido (fundo branco, texto navy) para máximo contraste
- Seção de maior impacto visual da página

---

### SEÇÃO 10 — FAQ

```
┌─────────────────────────────────────────┐
│   background: #F3F3F1                   │
│   padding: 80px 24px                     │
│                                          │
│   Perguntas frequentes                  │
│   [H2 / Yu Gothic Bold / navy]          │
│                                          │
│   ┌──────────────────────────────────┐   │
│   │  Preciso ter decidido o         │  +│
│   │  procedimento antes...          │   │
│   ├──────────────────────────────────┤   │
│   │  [resposta expandida]           │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  Como funciona o acompanhamento │  +│
│   │  após o procedimento?           │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  Quanto tempo leva para iniciar │  +│
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  Consigo tirar dúvidas antes    │  +│
│   │  de agendar?                    │   │
│   └──────────────────────────────────┘   │
│   ┌──────────────────────────────────┐   │
│   │  Vocês atendem planos de saúde? │  +│
│   └──────────────────────────────────┘   │
│   [accordion: border-bottom 1px #ddd /  │
│    ícone + rotaciona 45° ao abrir]      │
└─────────────────────────────────────────┘
```

---

### SEÇÃO 11 — FOOTER

```
┌─────────────────────────────────────────┐
│   background: #2D2D2D (charcoal)        │
│   padding: 60px 24px 32px               │
│   color: white                           │
│                                          │
│   [Logo im-logo01.png / versão clara]   │
│   Clínica Intermed · Estética e Saúde  │
│                                          │
│   📱 +55 73 9152-5694                  │
│   📸 @clinica.intermed                 │
│   📍 Av. Comendador Firmino Alves, 60  │
│      Ed. Módulo Center, 4º andar       │
│      Sala 401 · Itabuna - BA           │
│                                          │
│   ──────────────────────────────────── │
│                                          │
│   Resp. Técnico: Dr. João Eduardo Sena  │
│   CRM-SP 195228 · CRM-BA 41564         │
│   [small / white 50% / 11px]           │
│                                          │
│   © 2025 Clínica Intermed.             │
│   Todos os direitos reservados.         │
│   [small / white 40%]                  │
└─────────────────────────────────────────┘
```

---

## INTERAÇÕES E MICROANIMAÇÕES

```
Entrada de seções:    fade-up 0.6s / threshold: 0.15 (IntersectionObserver)
CTA hover:            translateY(-2px) + shadow intensifica / 0.2s ease
Cards hover:          translateY(-4px) + shadow / 0.25s ease
Floating WhatsApp:    pulsação ring a cada 3s / aparece após 300px scroll
Accordion FAQ:        slide-down suave 0.3s / ícone rotate 45°
Galeria mobile:       snap scroll horizontal / dots ativos com transição
Header scroll:        background blur + shadow em > 80px scroll
```

---

## BREAKPOINTS

```
Mobile:   375px–767px    (PRIORIDADE MÁXIMA)
Tablet:   768px–1023px
Desktop:  1024px+
```

---

## HANDOFF PARA @pixel

**Prioridades de implementação:**
1. Mobile hero (100vh, overlay, CTA)
2. Floating WhatsApp button
3. Seções 2, 3, 4 (fluxo emocional principal)
4. Seção equipe (foto circular, CRMs)
5. Break visual espelho (6.5)
6. FAQ accordion
7. Footer com responsável técnico

**Assets a copiar para o projeto:**
```
/docs/web-assets/clinica-intermed/assets/
  logos/     → im-logo07.png, im-logo01.png, im-logo21.png
  fonts/     → Zitter-Regular.ttf, YuGothB.ttc, YuGothM.ttc
  photos/    → todas as fotos identificadas
  brand/     → paleta de cores.png
```

