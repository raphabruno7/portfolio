# `/voiceagent` — Migrar voice-demo para o portfólio

## Objetivo

Disponibilizar o projeto `voice-demo` (24/7 Voice Agent — Hume, LiveKit/Gemini Live, ElevenLabs, Vapi, Retell, Twilio) em `raphaelbruno.dev/voiceagent`, para que clientes acedam ao demo diretamente a partir do portfólio. O conteúdo continua a viver no deploy Vercel do `voice-demo` (`voice-demo-navy.vercel.app`) — `git push` no `voice-demo` atualiza automaticamente o que aparece em `/voiceagent`, sem passos extra.

## Arquitetura: Next.js Multi-Zone (basePath + rewrite)

- `voice-demo` ganha `basePath: '/voiceagent'` no `next.config.ts`, e `assetPrefix` apontado para `https://voice-demo-navy.vercel.app` (assets `_next/static` servidos diretamente do domínio do voice-demo, sem passar pelo proxy do portfólio).
- `portfolio` adiciona `rewrites()`:
  ```js
  async rewrites() {
    return [
      { source: '/voiceagent', destination: 'https://voice-demo-navy.vercel.app/voiceagent' },
      { source: '/voiceagent/:path*', destination: 'https://voice-demo-navy.vercel.app/voiceagent/:path*' },
    ];
  }
  ```
- Resultado: browser acede a `raphaelbruno.dev/voiceagent/*` (mesma origem → permissões de microfone funcionam normalmente), conteúdo servido pelo deploy do voice-demo.

## Fase A — código (branch, sem afetar produção)

### voice-demo

1. `next.config.ts`: adicionar `basePath: '/voiceagent'` e `assetPrefix`.
2. Criar `lib/base-path.ts` exportando `BASE_PATH = '/voiceagent'`.
3. Substituir os 6 `fetch("/api/...")` por `fetch(\`${BASE_PATH}/api/...\`)`:
   - `components/HumeWidget.tsx` → `/api/hume/access-token`
   - `components/GeminiLiveWidget.tsx` → `/api/livekit/token`
   - `components/ElevenLabsWidget.tsx` → `/api/elevenlabs/signed-url`
   - `components/TwilioWidget.tsx` → `/api/twilio/token`
   - `components/RetellWidget.tsx` → `/api/retell/web-call`
   - `components/CallMeForm.tsx` → `/api/call`
4. Ajustar os 6 `<a href="/">` (links "voltar") em `app/{elevenlabs,hume,livekit,vapi,retell,twilio}/page.tsx` — usar `next/link` (`Link href="/"`, que o Next prefixa automaticamente com `basePath`) em vez de `<a>` cru.
5. `AgentNav.tsx` — já usa `next/link`, fica automaticamente prefixado. Revisar se o item `dict.portfolio` (atualmente `href: "/"`, ou seja a própria página Hume) deve passar a apontar para o portfólio real (`https://raphaelbruno.dev`) agora que `/voiceagent` já está dentro do portfólio — **decisão a confirmar com o Raphael durante a implementação**, não bloqueia o resto.

### portfolio

6. `next.config.js`/`.ts`: adicionar `rewrites()` acima.
7. Adicionar entrada de navegação/CTA para `/voiceagent` (local a decidir: nav principal, ou link na secção de projetos/advisory).

Tudo isto é feito numa branch dedicada em cada repo, sem deploy/merge — não tem efeito em produção até à Fase B estar pronta.

## Fase B — webhooks externos e env vars (⏳ pendente de confirmação)

**Bloqueada até o outro agente terminar o trabalho atual nos webhooks/env do voice-demo**, para evitar conflitos.

Com `basePath`, todas as rotas (páginas e `/api/*`) do voice-demo passam a viver sob `/voiceagent/*`. Atualizar:

1. **Hume** — tool `book_meeting` (config `7fd9f653-...`): webhook `https://voice-demo-navy.vercel.app/api/book-meeting` → `.../voiceagent/api/book-meeting`.
2. **ElevenLabs** — tool `book_meeting` (agent `agent_9401krm0dzycem49zckkhg3e2pzy`): mesmo ajuste de URL.
3. **livekit-agent** env vars: `CALENDAR_ENDPOINT`, `TRANSFER_FALLBACK_ENDPOINT` → adicionar `/voiceagent` ao path.
4. **vercel.json** (voice-demo): `crons[0].path` `/api/cron/outbound-calls` → `/voiceagent/api/cron/outbound-calls`.
5. Revisar `WEBHOOK_SECRET`/outros endpoints documentados em `CLAUDE.md` do voice-demo que referenciem paths absolutos `voice-demo-navy.vercel.app/api/...`.

## Rollout

1. Fase A em branches (voice-demo + portfolio), sem merge.
2. Confirmar com o Raphael que o outro agente terminou o trabalho nos webhooks/env.
3. Executar Fase B (atualizar dashboards Hume/ElevenLabs + env vars + `vercel.json`).
4. Merge + deploy voice-demo. Testar `voice-demo-navy.vercel.app/voiceagent` isoladamente (todas as páginas, booking tool, mic).
5. Merge + deploy portfolio. Testar `raphaelbruno.dev/voiceagent` end-to-end.

## Fora de âmbito

- Ativar Vapi/Retell/Twilio (seguem o roadmap próprio do voice-demo; quando ativados, os webhooks novos já devem usar `/voiceagent/api/...` desde o início).
- Subdomínio ou path alternativo — descartado a favor de `/voiceagent` com auto-update via multi-zone.
