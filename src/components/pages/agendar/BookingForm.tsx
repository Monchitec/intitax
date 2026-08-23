"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { bookingFormStyles } from "./BookingForm.styles";

export function BookingForm() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const calendlyUrl =
    "https://calendly.com/martin-collahua1/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=3a3c40&primary_color=f18a0e";

  return (
    <div className={bookingFormStyles.container}>
      <Link href="/" className={bookingFormStyles.backLink}>
        <ArrowLeft className="h-4 w-4" />
        <span>{isEn ? "Back to home" : "Volver al inicio"}</span>
      </Link>

      {/* Header */}
      <div className={bookingFormStyles.headerWrapper}>
        <h1 className={bookingFormStyles.title}>
          {isEn
            ? "Book Your 1-on-1 Tax Consultation"
            : "Agenda tu Consulta Fiscal 1 a 1"}
        </h1>
        <p className={bookingFormStyles.subtitle}>
          {isEn
            ? "Select your preferred date and time in our interactive calendar to reserve your personalized session."
            : "Selecciona el día y la hora que mejor te acomode en nuestro calendario interactivo para reservar tu sesión personalizada."}
        </p>
      </div>

      {/* Embedded Calendly Widget */}
      <div className={bookingFormStyles.calendlyCard}>
        <iframe
          src={calendlyUrl}
          title="Calendly Booking"
          className={bookingFormStyles.calendlyIframe}
          loading="lazy"
        />
      </div>

      {/* Trust & Guarantee Footer */}
      <div className={bookingFormStyles.trustFooter}>
        <div className={bookingFormStyles.trustItem}>
          <ShieldCheck className="h-4 w-4 text-accent-success" />
          <span>
            {isEn ? "100% Confidential & Secure" : "100% Confidencial y Seguro"}
          </span>
        </div>
        <div className={bookingFormStyles.trustItem}>
          <CalendarCheck className="h-4 w-4 text-primary" />
          <span>
            {isEn ? "Instant Confirmation" : "Confirmación Instantánea"}
          </span>
        </div>
        <div className={bookingFormStyles.trustItem}>
          <MessageSquare className="h-4 w-4 text-primary" />
          <span>
            {isEn
              ? "Bilingual Attention (ES / EN)"
              : "Atención Bilingüe (Español / Inglés)"}
          </span>
        </div>
      </div>
    </div>
  );
}
