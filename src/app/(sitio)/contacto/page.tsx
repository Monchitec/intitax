import type { Metadata } from "next";
import { ContactContent } from "@/components/sitio/contacto";
import { FaqSection } from "@/components/sitio/faq";

export const metadata: Metadata = {
  title: "Contacto, Citas y Preguntas Frecuentes | Intitax",
  description:
    "Ponte en contacto con el equipo de Intitax por correo electrónico (mcollahua@intitax.com), agenda tu cita 1 a 1 en línea y resuelve tus dudas en nuestras preguntas frecuentes.",
};

export default function ContactoPage() {
  return (
    <main className="flex-1">
      <ContactContent />
      <FaqSection />
    </main>
  );
}
