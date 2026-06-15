# `/ai-agent-voice` Multi-Zone — Fase A Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare `voice-demo` and `portfolio` (code only, in branches, no merge/deploy) so that once Fase B (webhook/env updates) is unblocked, `raphaelbruno.dev/ai-agent-voice` serves the voice-demo app via Next.js Multi-Zone.

**Architecture:** `voice-demo` gets `basePath: "/ai-agent-voice"`, `assetPrefix` pointing at its own Vercel domain, and `trailingSlash: true` (to match the portfolio and avoid cross-domain redirect leaks through the proxy). All 6 client-side `fetch("/api/...")` calls and all 6 raw `<a href="/">` back-links are updated to respect the new basePath. `portfolio` adds `rewrites()` that proxy `/ai-agent-voice*` to `https://voice-demo-navy.vercel.app/ai-agent-voice*`, plus a nav link.

**Tech Stack:** Next.js 16 (voice-demo) / Next.js 15 (portfolio), TypeScript, React 19.

**Repos:**
- `voice-demo` → `/Users/raphaelbruno/voice-demo` (branch `feat/ai-agent-voice-basepath`)
- `portfolio` → `/Users/raphaelbruno/projects/portfolio` (branch `feat/ai-agent-voice-rewrite`)

**Out of scope (Fase B, blocked):** Hume/ElevenLabs webhook URLs, `livekit-agent` env vars (`CALENDAR_ENDPOINT`, `TRANSFER_FALLBACK_ENDPOINT`), `vercel.json` cron path, merge/deploy. Do not push these branches to `main` or deploy until Fase B is confirmed unblocked.

**Resolved during planning (no longer open):** the `AgentNav.tsx` "portfolio" item (`href: "/"`) needs **no code change** — it uses `next/link`, which Next automatically prefixes with `basePath`, so it continues to point at the demo's own home page (now `/ai-agent-voice/`). A dedicated "back to raphaelbruno.dev root" link is a possible future nice-to-have, not part of this plan.

---

## Part 1 — voice-demo (branch `feat/ai-agent-voice-basepath`)

### Task 1: Create branch and `BASE_PATH` constant

**Files:**
- Create: `/Users/raphaelbruno/voice-demo/lib/base-path.ts`

- [ ] **Step 1: Create the branch**

```bash
cd /Users/raphaelbruno/voice-demo
git checkout -b feat/ai-agent-voice-basepath
```

Expected: `Switched to a new branch 'feat/ai-agent-voice-basepath'`

- [ ] **Step 2: Create `lib/base-path.ts`**

```ts
export const BASE_PATH = "/ai-agent-voice";
```

- [ ] **Step 3: Verify it compiles**

```bash
npx tsc --noEmit lib/base-path.ts
```

Expected: no output (no errors)

- [ ] **Step 4: Commit**

```bash
git add lib/base-path.ts
git commit -m "feat: add BASE_PATH constant for /ai-agent-voice multi-zone"
```

---

### Task 2: Configure `basePath`, `assetPrefix`, `trailingSlash` in `next.config.ts`

**Files:**
- Modify: `/Users/raphaelbruno/voice-demo/next.config.ts`

- [ ] **Step 1: Update the config**

Current content:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

New content:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/ai-agent-voice",
  assetPrefix: "https://voice-demo-navy.vercel.app/ai-agent-voice",
  trailingSlash: true,
};

export default nextConfig;
```

- [ ] **Step 2: Build to verify the config is valid**

```bash
npm run build
```

Expected: build completes successfully (exit code 0). Route output will now show paths without the `/ai-agent-voice` prefix in the build summary — that's expected, `basePath` is applied at request time, not in the build manifest.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: set basePath /ai-agent-voice for multi-zone mount under portfolio"
```

---

### Task 3: Fix `fetch("/api/...")` calls to use `BASE_PATH`

**Files:**
- Modify: `/Users/raphaelbruno/voice-demo/components/HumeWidget.tsx:52`
- Modify: `/Users/raphaelbruno/voice-demo/components/GeminiLiveWidget.tsx:94`
- Modify: `/Users/raphaelbruno/voice-demo/components/ElevenLabsWidget.tsx:43`
- Modify: `/Users/raphaelbruno/voice-demo/components/TwilioWidget.tsx:29`
- Modify: `/Users/raphaelbruno/voice-demo/components/RetellWidget.tsx:44`
- Modify: `/Users/raphaelbruno/voice-demo/components/CallMeForm.tsx:15`

`fetch()` URLs are not rewritten by Next's `basePath` — each must be prefixed manually with `BASE_PATH`.

- [ ] **Step 1: `components/HumeWidget.tsx`**

Add the import near the top (after the `Dict` import):

```ts
import type { Dict } from "@/lib/i18n/dictionaries";
import { BASE_PATH } from "@/lib/base-path";
```

Change line 52:

```ts
    const r = await fetch("/api/hume/access-token", { method: "POST" });
```

to:

```ts
    const r = await fetch(`${BASE_PATH}/api/hume/access-token`, { method: "POST" });
```

- [ ] **Step 2: `components/GeminiLiveWidget.tsx`**

Add `import { BASE_PATH } from "@/lib/base-path";` near the top imports.

Change line 94:

```ts
      const res = await fetch("/api/livekit/token", {
```

to:

```ts
      const res = await fetch(`${BASE_PATH}/api/livekit/token`, {
```

- [ ] **Step 3: `components/ElevenLabsWidget.tsx`**

Add `import { BASE_PATH } from "@/lib/base-path";` near the top imports.

Change line 43:

```ts
      const res = await fetch("/api/elevenlabs/signed-url", { method: "POST" });
```

to:

```ts
      const res = await fetch(`${BASE_PATH}/api/elevenlabs/signed-url`, { method: "POST" });
```

- [ ] **Step 4: `components/TwilioWidget.tsx`**

Add `import { BASE_PATH } from "@/lib/base-path";` near the top imports.

Change line 29:

```ts
      const res = await fetch("/api/twilio/token", { method: "POST" });
```

to:

```ts
      const res = await fetch(`${BASE_PATH}/api/twilio/token`, { method: "POST" });
```

- [ ] **Step 5: `components/RetellWidget.tsx`**

Add `import { BASE_PATH } from "@/lib/base-path";` near the top imports.

Change line 44:

```ts
        const res = await fetch("/api/retell/web-call", { method: "POST" });
```

to:

```ts
        const res = await fetch(`${BASE_PATH}/api/retell/web-call`, { method: "POST" });
```

- [ ] **Step 6: `components/CallMeForm.tsx`**

Add `import { BASE_PATH } from "@/lib/base-path";` near the top imports.

Change line 15:

```ts
    const res = await fetch("/api/call", {
```

to:

```ts
    const res = await fetch(`${BASE_PATH}/api/call`, {
```

- [ ] **Step 7: Grep to confirm no remaining unprefixed `/api/` fetches**

```bash
grep -rn 'fetch("/api' components/
```

Expected: no output (all matches now use `` `${BASE_PATH}/api/...` ``)

- [ ] **Step 8: Build**

```bash
npm run build
```

Expected: build completes successfully (exit code 0)

- [ ] **Step 9: Commit**

```bash
git add components/HumeWidget.tsx components/GeminiLiveWidget.tsx components/ElevenLabsWidget.tsx components/TwilioWidget.tsx components/RetellWidget.tsx components/CallMeForm.tsx
git commit -m "fix: prefix client-side API fetches with BASE_PATH for /ai-agent-voice"
```

---

### Task 4: Fix `<a href="/">` back-links to use `next/link`

**Files:**
- Modify: `/Users/raphaelbruno/voice-demo/app/elevenlabs/page.tsx:39`
- Modify: `/Users/raphaelbruno/voice-demo/app/hume/page.tsx:77`
- Modify: `/Users/raphaelbruno/voice-demo/app/livekit/page.tsx:39`
- Modify: `/Users/raphaelbruno/voice-demo/app/vapi/page.tsx:32`
- Modify: `/Users/raphaelbruno/voice-demo/app/retell/page.tsx:32`
- Modify: `/Users/raphaelbruno/voice-demo/app/twilio/page.tsx:38`

Raw `<a href="/">` resolves to the domain root and does **not** get `basePath` prefixed by Next — it would point at `raphaelbruno.dev/` (the portfolio home) instead of the demo's home page. `next/link` with `href="/"` *does* get prefixed to `/ai-agent-voice/`. Each of these 6 files needs `Link` imported and the `<a>` swapped for `<Link>`.

- [ ] **Step 1: `app/elevenlabs/page.tsx`**

Add to imports (this file has no `next/link` import yet — check first with `grep -n "next/link" app/elevenlabs/page.tsx`; if absent, add):

```ts
import Link from "next/link";
```

Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">
            {dict.elevenlabs.back}
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            {dict.elevenlabs.back}
```

And the matching closing tag a few lines below (find `</a>` immediately closing this block) becomes `</Link>`.

- [ ] **Step 2: `app/hume/page.tsx`** — same pattern

```bash
grep -n "next/link" app/hume/page.tsx
```

If absent, add `import Link from "next/link";` to the imports. Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">
            {dict.hume.back}
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            {dict.hume.back}
```

...and its closing `</a>` to `</Link>`.

- [ ] **Step 3: `app/livekit/page.tsx`** — same pattern

```bash
grep -n "next/link" app/livekit/page.tsx
```

If absent, add `import Link from "next/link";`. Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">
            {dict.livekit.back}
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            {dict.livekit.back}
```

...and its closing `</a>` to `</Link>`.

- [ ] **Step 4: `app/vapi/page.tsx`** — single-line variant

```bash
grep -n "next/link" app/vapi/page.tsx
```

If absent, add `import Link from "next/link";`. Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">{dict.vapi.back}</a>
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">{dict.vapi.back}</Link>
```

- [ ] **Step 5: `app/retell/page.tsx`** — single-line variant

```bash
grep -n "next/link" app/retell/page.tsx
```

If absent, add `import Link from "next/link";`. Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">{dict.retell.back}</a>
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">{dict.retell.back}</Link>
```

- [ ] **Step 6: `app/twilio/page.tsx`** — single-line variant

```bash
grep -n "next/link" app/twilio/page.tsx
```

If absent, add `import Link from "next/link";`. Change:

```tsx
          <a href="/" className="hover:text-zinc-300 transition-colors">{dict.twilio.back}</a>
```

to:

```tsx
          <Link href="/" className="hover:text-zinc-300 transition-colors">{dict.twilio.back}</Link>
```

- [ ] **Step 7: Grep to confirm no remaining root back-links as raw `<a>`**

```bash
grep -rn 'href="/"' app/*/page.tsx
```

Expected: no output

- [ ] **Step 8: Build**

```bash
npm run build
```

Expected: build completes successfully (exit code 0)

- [ ] **Step 9: Commit**

```bash
git add app/elevenlabs/page.tsx app/hume/page.tsx app/livekit/page.tsx app/vapi/page.tsx app/retell/page.tsx app/twilio/page.tsx
git commit -m "fix: use next/link for back-links so basePath prefixing applies"
```

---

### Task 5: Run existing test suite and push branch

**Files:** none (verification only)

- [ ] **Step 1: Run the test suite**

```bash
npm run test
```

Expected: all existing tests pass (this plan doesn't touch `lib/book-meeting.ts` or `lib/google-calendar.ts`, which are the only files with `.test.ts` siblings — no regressions expected)

- [ ] **Step 2: Run dev server and smoke-check basePath locally**

```bash
npm run dev &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/ai-agent-voice/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/ai-agent-voice/livekit/
kill %1
```

Expected: both return `200`. (Root `/` without the basePath should now 404 — that's expected with `basePath` set.)

- [ ] **Step 3: Push the branch (do NOT merge to main)**

```bash
git push -u origin feat/ai-agent-voice-basepath
```

Expected: branch pushed. **Do not open/merge a PR yet** — this is blocked on Fase B (see plan header).

---

## Part 2 — portfolio (branch `feat/ai-agent-voice-rewrite`)

### Task 6: Add `rewrites()` to proxy `/ai-agent-voice*` to voice-demo

**Files:**
- Modify: `/Users/raphaelbruno/projects/portfolio/next.config.ts`

- [ ] **Step 1: Create branch**

```bash
cd /Users/raphaelbruno/projects/portfolio
git checkout -b feat/ai-agent-voice-rewrite
```

- [ ] **Step 2: Add a `rewrites()` function to the config object**

The config currently has `async redirects() { ... }` as the last key before the closing brace of `nextConfig`. Add a sibling `async rewrites()` function. Insert it immediately after the closing `};` of `redirects()` (and before the final `};` that closes `nextConfig`):

```ts
  async rewrites() {
    return [
      {
        source: "/ai-agent-voice",
        destination: "https://voice-demo-navy.vercel.app/ai-agent-voice/",
      },
      {
        source: "/ai-agent-voice/",
        destination: "https://voice-demo-navy.vercel.app/ai-agent-voice/",
      },
      {
        source: "/ai-agent-voice/:path*",
        destination: "https://voice-demo-navy.vercel.app/ai-agent-voice/:path*",
      },
    ];
  },
```

- [ ] **Step 3: Build to verify the config is valid**

```bash
npm run build
```

Expected: build completes successfully (exit code 0)

- [ ] **Step 4: Commit**

```bash
git add next.config.ts
git commit -m "feat: proxy /ai-agent-voice to voice-demo multi-zone deployment"
```

---

### Task 7: Add nav link to `/ai-agent-voice`

**Files:**
- Modify: `/Users/raphaelbruno/projects/portfolio/src/components/Nav.tsx:75-83`

- [ ] **Step 1: Add a new `<li>` after the "Negócios Locais" item**

Current (lines 75-83):

```tsx
              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${
                    pathname.startsWith("/negocios-locais") ? "underline" : ""
                  }`}
                  href="/negocios-locais"
                >
                  Negócios Locais
                </Link>
              </li>
```

New (append a sibling `<li>` right after it, still inside the `<ul>`):

```tsx
              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${
                    pathname.startsWith("/negocios-locais") ? "underline" : ""
                  }`}
                  href="/negocios-locais"
                >
                  Negócios Locais
                </Link>
              </li>
              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${
                    pathname.startsWith("/ai-agent-voice") ? "underline" : ""
                  }`}
                  href="/ai-agent-voice"
                >
                  Voice Agent
                </Link>
              </li>
```

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: build completes successfully (exit code 0)

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat(nav): add Voice Agent link to /ai-agent-voice"
```

---

### Task 8: Push branch (no merge)

**Files:** none

- [ ] **Step 1: Push the branch**

```bash
git push -u origin feat/ai-agent-voice-rewrite
```

Expected: branch pushed. **Do not merge to main yet.**

- [ ] **Step 2: Note for follow-up**

The rewrite destination (`https://voice-demo-navy.vercel.app/ai-agent-voice/...`) will 404 until the `feat/ai-agent-voice-basepath` branch in `voice-demo` is merged and deployed — which is itself blocked on Fase B (webhook/env updates), per the design spec (`docs/superpowers/specs/2026-06-15-ai-agent-voice-page-design.md`). Once Fase B is confirmed done:

1. Merge & deploy `voice-demo` (`feat/ai-agent-voice-basepath` → `main`).
2. Verify `https://voice-demo-navy.vercel.app/ai-agent-voice/` works standalone (all 6 provider pages, mic permission, booking tool).
3. Merge & deploy `portfolio` (`feat/ai-agent-voice-rewrite` → `main`).
4. Verify `https://raphaelbruno.dev/ai-agent-voice/` end-to-end.

---

## Self-Review Notes

- **Spec coverage:** Fase A items 1-7 from the design spec are covered by Tasks 1-7 (voice-demo: basePath/assetPrefix/trailingSlash, BASE_PATH helper, 6 fetch fixes, 6 back-link fixes; portfolio: rewrites + nav entry). Item 5 (AgentNav decision) resolved in the plan header — no task needed. Fase B items are explicitly out of scope and called out in Task 8 Step 2.
- **Trailing slash:** `trailingSlash: true` added to voice-demo (Task 2) to match the portfolio's existing config and avoid a 308 redirect from `voice-demo-navy.vercel.app` escaping the proxy and exposing the raw Vercel URL to users.
- **No placeholders:** every step has concrete file paths, exact code, and exact commands with expected output.
