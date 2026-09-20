import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard Portal | Intitax",
};

export default function PortalPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
      <div className="max-w-md p-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 font-mono text-xl">
          🚀
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2">
          Portal Intitax
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          El módulo de portal, citas y documentos estará disponible próximamente aquí con su propio menú lateral.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Volver a la Página Principal
        </Link>
      </div>
    </main>
  );
}
