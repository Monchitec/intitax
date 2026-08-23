import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contacto";

export const metadata: Metadata = {
  title: "Agendar Consulta y Contacto | Intitax",
  description:
    "Agenda tu consulta fiscal 1 a 1 gratuita y confidencial con un especialista de Intitax o contáctanos directamente.",
};

export default function AgendarPage() {
  return (
    <main className="flex-1">
      <ContactContent />
    </main>
  );
}
