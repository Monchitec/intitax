"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  CalendarCheck,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { contactStyles } from "./ContactContent.styles";

export function ContactContent() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [showCalendar, setShowCalendar] = React.useState(false);
  const email = "mcollahua@intitax.com";
  const calendlyUrl =
    "https://calendly.com/martin-collahua1/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=3a3c40&primary_color=f18a0e";

  return (
    <div className={contactStyles.container}>
      <Link href="/" className={contactStyles.backLink}>
        <ArrowLeft className="h-4 w-4" />
        <span>{isEn ? "Back to home" : "Volver al inicio"}</span>
      </Link>

      {/* Main Header */}
      <div className={contactStyles.headerWrapper}>
        <div className={contactStyles.badge}>
          <Mail className="h-3.5 w-3.5" />
          <span>{isEn ? "Direct Contact & Appointments" : "Contacto Directo y Citas"}</span>
        </div>
        <h1 className={contactStyles.title}>
          {isEn ? "Get in Touch with Intitax" : "Ponte en Contacto con Intitax"}
        </h1>
        <p className={contactStyles.subtitle}>
          {isEn
            ? "Have questions about your taxes or prefer to write us first? Reach out directly via email or reserve your 1-on-1 session below."
            : "Resolvemos tus dudas fiscales con total confianza y rapidez. Escríbenos por correo o agenda tu cita personalizada en nuestro calendario."}
        </p>
      </div>

      {/* 2-Column Bento Grid Layout */}
      <div className={contactStyles.mainGrid}>
        {/* Left Column: Big Schedule Consultation Card (Spanning full height) */}
        <div className={contactStyles.leftColumn}>
          <div className={contactStyles.bookingTriggerCard}>
            <div className={contactStyles.bookingTriggerContent}>
              <div className={contactStyles.iconWrapper}>
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h2 className={contactStyles.bookingTitle}>
                {isEn ? "Schedule Your 1-on-1 Consultation" : "Agenda tu Consulta Fiscal 1 a 1"}
              </h2>
              <p className={contactStyles.bookingSubtitle}>
                {isEn
                  ? "Select a date and time that fits your schedule for a private consultation via video call."
                  : "Selecciona el día y la hora que mejor te acomode para reunirnos en una sesión privada por videollamada."}
              </p>

              <button
                type="button"
                onClick={() => setShowCalendar((prev) => !prev)}
                className={contactStyles.bookButton}
              >
                <CalendarCheck className="h-4 w-4" />
                <span>{isEn ? "Book Appointment" : "Agendar Cita en Línea"}</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    showCalendar ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 2 Stacked Cards (Email + Coverage) */}
        <div className={contactStyles.rightColumn}>
          {/* Card 1: Email */}
          <div className={contactStyles.contactCard}>
            <div className={contactStyles.iconWrapper}>
              <Mail className="h-6 w-6" />
            </div>
            <h3 className={contactStyles.cardTitle}>
              {isEn ? "Email Us Directly" : "Correo Electrónico Directo"}
            </h3>
            <p className={contactStyles.cardDesc}>
              {isEn
                ? "Send us your tax questions or documentation anytime."
                : "Escríbenos tus consultas fiscales o envía tus documentos."}
            </p>
            <a
              href={`mailto:${email}`}
              className={contactStyles.cardLink}
              aria-label={`Enviar correo a ${email}`}
            >
              {email}
            </a>
          </div>

          {/* Card 2: Coverage Area */}
          <div className={contactStyles.contactCard}>
            <div className={contactStyles.iconWrapper}>
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className={contactStyles.cardTitle}>
              {isEn ? "Coverage Area" : "Cobertura y Atención"}
            </h3>
            <p className={contactStyles.cardDesc}>
              {isEn
                ? "100% Digital & Secure across all 50 U.S. States."
                : "Atención 100% digital y segura en todo EE.UU."}
            </p>
            <span className="font-semibold text-xs text-foreground">
              {isEn ? "Bilingual Attention (ES / EN)" : "Atención Bilingüe (Español / Inglés)"}
            </span>
          </div>
        </div>
      </div>

      {/* Calendly Container (Opens smoothly when user clicks Book Appointment) */}
      {showCalendar && (
        <div className={contactStyles.calendlyContainer}>
          <div className="flex items-center justify-between pb-3 px-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {isEn ? "Interactive Scheduler" : "Calendario Interactivo"}
            </span>
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer px-3 py-1.5 rounded-xl hover:bg-muted border border-border"
            >
              {isEn ? "✕ Close Calendar" : "✕ Cerrar Calendario"}
            </button>
          </div>
          <div className={contactStyles.calendlyCard}>
            <iframe
              src={calendlyUrl}
              title="Calendly Booking"
              className={contactStyles.calendlyIframe}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
