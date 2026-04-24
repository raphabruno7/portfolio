# Design Spec — Página /negocios-locais

**Data:** 2026-04-24  
**Estado:** Aprovado

---

## Objectivo

Criar uma nova rota `/negocios-locais` no portfolio `raphaelbruno.dev` dirigida a PMEs da Silver Coast, Portugal. A página é independente do resto do portfolio (que fica em inglês), tem conteúdo bilingue PT/EN, e não altera rotas nem componentes existentes.

---

## Rota e Ficheiros

```
src/app/negocios-locais/page.tsx              ← Server Component (metadata)
src/components/local-business/
  LocalBusinessPage.tsx                        ← "use client" — estado de idioma + toggle
  LocalBusinessHero.tsx
  LocalBusinessProblems.tsx
  LocalBusinessHowItWorks.tsx
  LocalBusinessServices.tsx
  LocalBusinessPricing.tsx
  LocalBusinessProjects.tsx
  LocalBusinessCTA.tsx
```

Segue o mesmo padrão da `advisory` page: Server Component como shell, componentes de secção separados, `Page` + `Container` como layout base.

---

## Idioma e Toggle

- **Detecção automática:** `navigator.language.startsWith('en')` no `useEffect` do mount → default EN para dispositivos em inglês, PT para todos os outros.
- **Toggle manual:** pill `PT | EN` no canto superior direito da área de conteúdo (abaixo do Nav, dentro do Container). Estilo mono, consistente com o site.
- **Sem persistência:** reset a cada visita conforme o device.
- **Prop `lang: 'pt' | 'en'`** passada a cada secção. Conteúdo PT/EN definido inline em cada componente como objecto `{ pt: {...}, en: {...} }`.

```ts
// LocalBusinessPage.tsx
"use client"
const [lang, setLang] = useState<'pt' | 'en'>('pt')
useEffect(() => {
  if (navigator.language.startsWith('en')) setLang('en')
}, [])
```

---

## Secções da Página

### 1. Hero
- Headline curta sobre o problema (tempo perdido em tarefas manuais)
- Quem é Raphael + onde atende (Silver Coast, sem mencionar "em Peniche")
- CTA principal: sessão gratuita Cal.com
- CTA secundário: WhatsApp directo

### 2. Problemas que resolve
- Por tipo de problema: atendimento, reservas, follow-up, dados dispersos
- Tom directo, sem jargão técnico, focado em resultados

### 3. Como funciona
- 4 passos: Conversa → Diagnóstico → Implementação → Funciona
- Visual simples (números ou ícones, seguindo estilo existente)

### 4. Soluções / Serviços
- 10 soluções em cards ou lista com descrição curta
- Não mencionar "bots" ou stack técnico

### 5. Pacotes e Preços
- Tabela: Starter (€400 setup / €90/mês) · Growth · Pro · Full (€3000 / €450/mês)
- Nota: sem IVA, setup = implementação única, mensal = manutenção + suporte

### 6. Projectos relevantes
- 3 cards linkando para projectos existentes:
  - `easy-leads` — prospecção ativa
  - `arcus-crm` — CRM com agente conversacional
  - `clinic-referral-automation` — automação para clínicas

### 7. CTA Final
- "Marca uma sessão gratuita de 15-20 min" → Cal.com
- Contacto directo WhatsApp: wa.me/351931822816

---

## Conteúdo — Contactos e Links

| Campo | Valor |
|---|---|
| Email | raphaelbruno.dev@proton.me |
| WhatsApp | wa.me/351931822816 |
| Cal.com | https://cal.eu/raphael-bruno-92p2gw/sessao-diagnostico-20-min |

---

## Restrições

- PT-PT (não BR). EN britânico/neutro.
- Não hardcodar "em Peniche" — usar "Silver Coast" ou "região"
- Não mexer em rotas, Nav, nem componentes existentes
- Não criar ficheiros MDX — conteúdo estático inline
- Reutilizar `Page`, `Container`, `Button`, `Divider` do portfolio existente
- Consistência visual: cores beige/ruby/black, font mono para labels, `heading-1`/`body-1`/`body-2`

---

## Metadata (Server Component)

```ts
export const metadata = {
  title: 'Negócios Locais — Raphael Bruno',
  description: 'Automação e presença digital para negócios locais na Silver Coast.',
}
```
