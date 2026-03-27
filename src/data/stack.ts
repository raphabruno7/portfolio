export interface StackItem {
  name: string;
  icon: string | null; // simple-icons slug from cdn.simpleicons.org, null = text fallback
}

export const stackItems: StackItem[] = [
  { name: "Next.js", icon: "nextdotjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Vite", icon: "vite" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Supabase", icon: "supabase" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Prisma", icon: "prisma" },
  { name: "Convex", icon: "convex" },
  { name: "Pandas", icon: "pandas" },
  { name: "Expo", icon: "expo" },
  { name: "React Native", icon: "react" },
  { name: "Llama", icon: "meta" },
  { name: "OpenClaw", icon: "url:https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/openclaw.png" },
  { name: "n8n", icon: "n8n" },
  { name: "Docker", icon: "docker" },
  { name: "Vercel", icon: "vercel" },
  { name: "GitHub", icon: "github" },
];
