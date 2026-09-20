import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal | Intitax",
  description: "Portal de gestión y servicios de Intitax",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* 
        Futuro Sidebar del portal:
        Aquí se conectará el menú lateral <PortalSidebar /> cuando se desarrolle el módulo
      */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
