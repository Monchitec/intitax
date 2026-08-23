import { Dictionary } from "./types";

export const es: Dictionary = {
  navbar: {
    home: "Inicio",
    services: "Servicios",
    faq: "Preguntas Frecuentes",
    contact: "Contacto",
    cta: "Agendar Cita Gratuita",
    callSupport: "Llamar a soporte",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú",
    switchLanguage: "Cambiar idioma",
  },
  hero: {
    titleStart: "Tus Impuestos, ",
    titleHighlight: "En Buenas Manos.",
    subtitle:
      "Te acompañamos en la preparación de tus impuestos federales y estatales de forma clara y segura. Ya sea que trabajes como empleado o por tu propia cuenta, protegemos tu dinero y te ayudamos a obtener el mayor reembolso legal posible.",
    ctaPrimary: "Agendar Cita Gratuita",
    ctaSecondary: "Explorar Servicios",
    windowTitle: "intitax • Asistencia de Impuestos",
    typewriterPhrases: [
      "Preparando tu declaración Form 1040 con revisión minuciosa...",
      "Maximizando tus deducciones de Schedule C y 1099...",
      "Tramitando tu número ITIN de forma rápida y segura...",
      "Respondiendo a tu carta o notificación del IRS...",
      "Recuperando dinero con enmiendas de años anteriores...",
    ],
    formsTicker: [
      {
        code: "1040",
        name: "Declaración Anual Individual",
        description:
          "Créditos por dependientes, deducción estándar y máximo reembolso legal.",
      },
      {
        code: "1040-X",
        name: "Declaración Enmendada",
        description:
          "Recupera dinero olvidado o corrige errores en declaraciones pasadas.",
      },
      {
        code: "W-2",
        name: "Declaración de Sueldos y Salarios",
        description:
          "Reporte de retenciones federales y optimización fiscal para empleados.",
      },
      {
        code: "Sch C",
        name: "Ganancias y Pérdidas de Negocio",
        description:
          "Ingresos netos, deducciones de gastos operativos y Self-Employment Tax.",
      },
      {
        code: "1099-NEC",
        name: "Compensación de No Empleados",
        description:
          "Para contratistas independientes, freelancers y servicios profesionales.",
      },
      {
        code: "1099-K",
        name: "Transacciones de Red y Tarjetas",
        description:
          "Reportes de plataformas como Uber, Lyft, DoorDash, Stripe y PayPal.",
      },
      {
        code: "1099-INT",
        name: "Declaración de Intereses Bancarios",
        description:
          "Reporte de intereses en cuentas de ahorro, certificados CD y bonos.",
      },
      {
        code: "W-7",
        name: "Solicitud y Renovación de ITIN",
        description:
          "Tramitación oficial de ITIN y validación de identidad ante el IRS.",
      },
      {
        code: "1098-T",
        name: "Matrícula y Créditos Educativos",
        description:
          "Aprovecha créditos universitarios (AOTC / LLC) para estudiantes y familias.",
      },
    ],
  },
  services: {
    badge: "Nuestras Especialidades",
    title: "Soluciones claras y precisas para tus impuestos",
    subtitle:
      "Atención personalizada y directa para resolver cualquier trámite ante el IRS de forma ágil, segura y sin complicaciones.",
    items: [
      {
        id: "personal-tax",
        title: "Impuestos Personales (Form 1040)",
        note: "Pronto: Taxes Corporativas",
        description:
          "Preparación y presentación exhaustiva de tu declaración anual individual (Form 1040), asegurando la aplicación de todos los créditos y deducciones a los que tienes derecho legalmente.",
        features: [
          "Declaración individual y conjunta (Form 1040)",
          "Créditos por hijos, educación y dependientes",
          "Deducciones estándar y detalladas optimizadas",
          "Presentación electrónica rápida (E-file)",
        ],
      },
      {
        id: "tax-amended",
        title: "Declaraciones Enmendadas (Form 1040-X)",
        badge: "Corrección de Años Anteriores",
        description:
          "¿Cometiste un error o se te olvidó reportar deducciones en años pasados? Corregimos y enmendamos tus declaraciones anteriores para recuperar reembolsos no reclamados o regularizar tu estado.",
        features: [
          "Formulario 1040-X para rectificaciones",
          "Reclamo de reembolsos atrasados no cobrados",
          "Corrección de estado civil o ingresos omitidos",
          "Acompañamiento hasta la aprobación del IRS",
        ],
      },
      {
        id: "irs-letters",
        title: "Asistencia con Cartas y Notificaciones del IRS",
        badge: "Soporte Ante Requerimientos",
        description:
          "Recibir una carta del IRS genera estrés. Analizamos cada aviso, te explicamos exactamente qué significa y redactamos la respuesta técnica adecuada para solucionar el requerimiento sin sanciones.",
        features: [
          "Análisis exhaustivo de notificaciones y cartas",
          "Redacción y envío de respuestas oficiales",
          "Aclaración de discrepancias y multas",
          "Defensa y seguimiento paso a paso",
        ],
      },
      {
        id: "itin-application",
        title: "Tramitación y Renovación de ITIN (Form W-7)",
        badge: "Gestión Segura",
        description:
          "Gestionamos la solicitud de tu Número de Identificación Personal del Contribuyente (ITIN) o su renovación, guiándote con los documentos requeridos sin riesgo de rechazo.",
        features: [
          "Solicitud por primera vez y renovación de ITIN",
          "Preparación del Formulario W-7 oficial",
          "Revisión y validación de documentos de identidad",
          "Seguimiento hasta la emisión del número oficial",
        ],
      },
      {
        id: "schedule-c",
        title: "Asistencia con Schedule C (Self-Employment & 1099)",
        badge: "Freelancers & Contratistas",
        description:
          "Para contratistas independientes, freelancers, choferes y trabajadores por cuenta propia. Organizamos tus ingresos y deducimos todos los gastos operativos legítimos para pagar solo lo justo por ley.",
        features: [
          "Preparación del Schedule C (Profit or Loss from Business)",
          "Deducción de kilometraje, herramientas y oficina en casa",
          "Cálculo y optimización del Self-Employment Tax",
          "Estrategia de deducciones para el próximo año",
        ],
      },
    ],
  },
  whyUs: {
    badge: "¿Por qué Intitax?",
    recommendedBadge: "Opción Recomendada",
    title: "La diferencia de tener a expertos de tu lado",
    subtitle:
      "Compara la experiencia de trabajar con Intitax frente a los métodos contables tradicionales lentos y confusos.",
    intitaxTitle: "Con Intitax",
    traditionalTitle: "Método Tradicional",
    points: [
      {
        feature: "Atención y Comunicación",
        intitax:
          "Asesor dedicado 1 a 1, citas directas y atención rápida cuando lo necesites.",
        traditional:
          "Citas presenciales lentas y falta de respuesta cuando tienes dudas.",
      },
      {
        feature: "Optimización de Deducciones",
        intitax:
          "Análisis minucioso de cada beneficio legal para maximizar tu ahorro o reembolso.",
        traditional:
          "Llenado automático y genérico sin revisar tus deducciones particulares.",
      },
      {
        feature: "Claridad y Precios",
        intitax:
          "Presupuesto transparente y sin costos ocultos antes de iniciar.",
        traditional:
          "Cobros sorpresa y tarifas imprevistas al momento de firmar.",
      },
      {
        feature: "Seguridad y Privacidad",
        intitax:
          "Gestión digital moderna, confidencial y 100% segura de tus documentos.",
        traditional:
          "Intercambio de documentos físicos en papel o métodos poco confiables.",
      },
    ],
  },
  faq: {
    badge: "Preguntas Frecuentes",
    title: "Resolvemos todas tus dudas sobre impuestos",
    subtitle:
      "Información clara y transparente para que tomes la mejor decisión con tus impuestos.",
    items: [
      {
        question: "¿Cómo funciona la cita gratuita inicial?",
        answer:
          "En la sesión inicial revisamos tu situación de impuestos (documentos de ingresos, gastos, cartas pendientes o estado de ITIN). Te explicamos qué opciones tienes y te damos un presupuesto claro antes de realizar cualquier trabajo.",
      },
      {
        question: "¿Qué documentos necesito para declarar con el Form 1040?",
        answer:
          "Generalmente necesitas tu identificación oficial, tu SSN o ITIN, comprobantes de ingresos (1099, estados de cuenta si eres independiente), y comprobantes de gastos deducibles o dependientes.",
      },
      {
        question:
          "¿Puedo tramitar un ITIN si aún no tengo estatus migratorio regular?",
        answer:
          "Sí. El IRS emite números ITIN para fines exclusivamente tributarios, independientemente de tu estatus migratorio. Te ayudamos a preparar el Formulario W-7 y validar los documentos de identidad requeridos.",
      },
      {
        question: "¿Qué debo hacer si recibí una carta del IRS?",
        answer:
          "Lo más importante es no ignorarla y actuar dentro del plazo indicado. Envíanos una copia de la carta de inmediato: la revisaremos a detalle, identificaremos qué solicita el IRS y redactaremos la respuesta técnica adecuada.",
      },
      {
        question:
          "¿Qué ventajas tiene declarar con Schedule C si trabajo por mi cuenta?",
        answer:
          "El Schedule C te permite descontar todos los gastos indispensables para tu actividad (gasolina, herramientas, teléfono, publicidad, insumos), reduciendo significativamente tus ingresos imponibles y pagando solo lo justo por ley.",
      },
    ],
  },
  cta: {
    badge: "Atención Inmediata",
    title: "¿Listo para poner tus impuestos en buenas manos?",
    subtitle:
      "Agenda tu consulta gratuita hoy mismo y permítenos maximizar tus deducciones con total tranquilidad y respaldo profesional.",
    buttonPrimary: "Agendar Cita Gratuita",
    buttonSecondary: "Explorar Servicios",
    phoneText: "O llámanos directamente al:",
  },
  footer: {
    description:
      "Intitax es tu aliado de confianza en preparación de impuestos personales, trámites de ITIN y resolución de cartas ante el IRS en Estados Unidos.",
    rights: "Todos los derechos reservados.",
    disclaimer:
      "Aviso: La información presentada en este sitio web tiene fines informativos y de orientación profesional. Intitax ofrece servicios contables y de preparación de declaraciones de impuestos conforme a las normativas del IRS.",
    sections: {
      servicesTitle: "Servicios",
      linksTitle: "Navegación",
      contactTitle: "Contacto & Soporte",
    },
  },
  common: {
    toggleTheme: "Alternar modo claro y oscuro",
    lightMode: "Cambiar a modo claro",
    darkMode: "Cambiar a modo oscuro",
  },
};
