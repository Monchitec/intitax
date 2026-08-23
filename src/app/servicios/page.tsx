import type { Metadata } from "next";
import { ServicesSection } from "@/components/pages/servicios";
import { CtaSection } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "Servicios de Impuestos | Intitax",
  description:
    "Conoce nuestros servicios de preparación de impuestos personales: Form 1040, Schedule C, Enmiendas, ITIN y Asistencia con cartas del IRS.",
};

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <ServicesSection />
      <CtaSection />
    </main>
  );
}
