async function startCheckout() {
  try {
    const resp = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await resp.json();

    if (!resp.ok || !data.url) {
      throw new Error(data.error || "Checkout failed.");
    }

    window.location.href = data.url;
  } catch (err) {
    console.error(err);
    alert("Could not start payment.");
  }
}

const translations = {
  en: {
    navPhilosophy: "Birth Philosophy",
    navPackages: "Packages",
    navContact: "Contact",
    badge: "Knowledge • Empowerment • Your Choice • Support",
    heroTitle: "Calm, supportive doula care—rooted in advocacy and choice.",
    heroSubtitle: "Personalized support through pregnancy, birth, and postpartum—so you feel informed, grounded, and cared for.",
    bookBasicBtn: "Book Basic Package — $1,200",
    readPhilosophy: "Read our philosophy",
    paymentPlansNote: "Payment plans available — contact to set one up.",
    basicPackageTitle: "Basic Package",
    includes: "Includes:",
    prenatalVisits: "2 prenatal visits",
    birthSupport: "Birth support",
    postpartumVisit: "1 postpartum visit",
    payInFull: "Pay in Full",
    securePackage: "Secure your package today.",
    proceedPayment: "Proceed to payment",
    stripeRedirect: "You’ll be redirected to Stripe Checkout.",
    paymentPlansTitle: "Payment plans",
    paymentPlansText: "Plans are available. Send a message and we’ll set one up that works for you.",
    contactForPlan: "Contact for a plan",
    contactTitle: "Contact",
    contactSubtitle: "Send a message and we’ll get back to you soon.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendMessage: "Send message",
    sendingMessage: "Sending...",
    fillFieldsAlert: "Please fill out all fields.",
    messageSuccessAlert: "Message sent successfully!",
    messageFailAlert: "Could not send message.",
    paymentFailAlert: "Could not start payment.",
    formNote: "Sends your message directly.",
    keysNavHome: "Home",
keysTitle: "Our KEYS Birth Philosophy",
keysIntro: "At Overall Birth Services, every part of your care is guided by the KEYS philosophy — a simple, powerful framework that honors you, your culture, and your birth journey. These four pillars shape how we show up, how we support you, and how we help you step into parenthood with confidence and clarity.",
keysKnowledgeTitle: "Knowledge",
keysKnowledgeText: "You deserve information that is clear, evidence based, and culturally responsive. Knowledge is the foundation of confident decisionmaking, and we make sure you feel informed, prepared, and supported at every stage of pregnancy, birth, and postpartum.",
keysEmpowermentTitle: "Empowerment",
keysEmpowermentText: "You are the expert of your own body and your own story. Our role is to uplift you through advocacy, education, and compassionate guidance so you feel grounded, capable, and powerful throughout your birth experience.",
keysChoiceTitle: "Your Choice",
keysChoiceText: "Your voice leads the way. Your values, preferences, and cultural needs shape every decision. We honor your autonomy fully and ensure you have the space, information, and support to make choices that feel right for you and your family.",
keysSupportTitle: "Support",
keysSupportText: "Support is more than presence — it’s partnership. We offer continuous, traumainformed, communityrooted care that meets you where you are. From emotional grounding to practical assistance, we stand beside you through every step of your perinatal journey.",
keysCallout: "The KEYS philosophy is the heart of Overall Birth Services — ensuring every family feels informed, empowered, respected, and supported from pregnancy through postpartum.",
backHome: "Back to home"
    
  },
  es: {
    navPhilosophy: "Filosofía de nacimiento",
    navPackages: "Paquetes",
    navContact: "Contacto",
    badge: "Conocimiento • Empoderamiento • Tu elección • Apoyo",
    heroTitle: "Cuidado de doula tranquilo y de apoyo, basado en la defensa y la elección.",
    heroSubtitle: "Apoyo personalizado durante el embarazo, el parto y el posparto para que te sientas informada, segura y acompañada.",
    bookBasicBtn: "Reservar Paquete Básico — $1,200",
    readPhilosophy: "Leer nuestra filosofía",
    paymentPlansNote: "Planes de pago disponibles — contáctanos para configurarlo.",
    basicPackageTitle: "Paquete Básico",
    includes: "Incluye:",
    prenatalVisits: "2 visitas prenatales",
    birthSupport: "Apoyo durante el parto",
    postpartumVisit: "1 visita posparto",
    payInFull: "Pagar completo",
    securePackage: "Reserva tu paquete hoy.",
    proceedPayment: "Proceder al pago",
    stripeRedirect: "Serás redirigida a Stripe Checkout.",
    paymentPlansTitle: "Planes de pago",
    paymentPlansText: "Hay planes disponibles. Envíanos un mensaje y encontraremos una opción que funcione para ti.",
    contactForPlan: "Contactar para un plan",
    contactTitle: "Contacto",
    contactSubtitle: "Envía un mensaje y te responderemos pronto.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    sendMessage: "Enviar mensaje",
    sendingMessage: "Enviando...",
    fillFieldsAlert: "Por favor completa todos los campos.",
    messageSuccessAlert: "¡Mensaje enviado correctamente!",
    messageFailAlert: "No se pudo enviar el mensaje.",
    paymentFailAlert: "No se pudo iniciar el pago.",
    formNote: "Envía tu mensaje directamente.",
    keysNavHome: "Inicio",
keysTitle: "Nuestra filosofía de nacimiento KEYS",
keysIntro: "En Overall Birth Services, cada parte de tu cuidado está guiada por la filosofía KEYS: un marco simple y poderoso que honra quién eres, tu cultura y tu experiencia de nacimiento. Estos cuatro pilares guían cómo nos presentamos, cómo te apoyamos y cómo te ayudamos a entrar en la maternidad con confianza y claridad.",
keysKnowledgeTitle: "Conocimiento",
keysKnowledgeText: "Mereces información clara, basada en evidencia y culturalmente sensible. El conocimiento es la base para tomar decisiones con confianza, y nos aseguramos de que te sientas informada, preparada y apoyada en cada etapa del embarazo, el parto y el posparto.",
keysEmpowermentTitle: "Empoderamiento",
keysEmpowermentText: "Tú eres la experta de tu propio cuerpo y de tu propia historia. Nuestro papel es apoyarte mediante defensa, educación y guía compasiva para que te sientas segura, capaz y poderosa durante tu experiencia de parto.",
keysChoiceTitle: "Tu elección",
keysChoiceText: "Tu voz guía el camino. Tus valores, preferencias y necesidades culturales dan forma a cada decisión. Honramos plenamente tu autonomía y nos aseguramos de que tengas el espacio, la información y el apoyo para tomar decisiones que se sientan correctas para ti y tu familia.",
keysSupportTitle: "Apoyo",
keysSupportText: "El apoyo es más que estar presente; es una colaboración. Ofrecemos cuidado continuo, informado sobre el trauma y arraigado en la comunidad, encontrándote donde estás. Desde apoyo emocional hasta ayuda práctica, caminamos contigo en cada paso de tu camino perinatal.",
keysCallout: "La filosofía KEYS es el corazón de Overall Birth Services, asegurando que cada familia se sienta informada, empoderada, respetada y apoyada desde el embarazo hasta el posparto.",
backHome: "Volver al inicio"
  }
};

function getCurrentLanguage() {
  return localStorage.getItem("siteLanguage") || "en";
}

function t(key) {
  const lang = getCurrentLanguage();
  return translations[lang][key] || translations.en[key] || key;
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("siteLanguage", lang);

  document.getElementById("englishBtn")?.classList.toggle("active", lang === "en");
  document.getElementById("spanishBtn")?.classList.toggle("active", lang === "es");
}

document.addEventListener("DOMContentLoaded", () => {
  const payBtn1 = document.getElementById("payBasicBtn");
  const payBtn2 = document.getElementById("payBasicBtn2");

  if (payBtn1) payBtn1.addEventListener("click", startCheckout);
  if (payBtn2) payBtn2.addEventListener("click", startCheckout);

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const englishBtn = document.getElementById("englishBtn");
  const spanishBtn = document.getElementById("spanishBtn");

  if (englishBtn) englishBtn.addEventListener("click", () => setLanguage("en"));
  if (spanishBtn) spanishBtn.addEventListener("click", () => setLanguage("es"));

  setLanguage(getCurrentLanguage());

  const emailBtn = document.getElementById("emailBtn");

  if (emailBtn) {
    emailBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert(t("fillFieldsAlert"));
        return;
      }

      try {
        emailBtn.disabled = true;
        emailBtn.textContent = t("sendingMessage");

        const resp = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, message })
        });

        const data = await resp.json();

        if (!resp.ok) {
          throw new Error(data.error || "Failed.");
        }

        alert(t("messageSuccessAlert"));

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } catch (err) {
        console.error(err);
        alert(t("messageFailAlert"));
      } finally {
        emailBtn.disabled = false;
        emailBtn.textContent = t("sendMessage");
      }
    });
  }
});