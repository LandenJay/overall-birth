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
      throw new Error(data.error || "No checkout URL returned.");
    }

    window.location.href = data.url;
  } catch (err) {
    console.error("Checkout error:", err);
    alert("Couldn’t start payment. Please try again.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("payBasicBtn");
  const btn2 = document.getElementById("payBasicBtn2");

  if (btn1) btn1.addEventListener("click", startCheckout);
  if (btn2) btn2.addEventListener("click", startCheckout);

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

function goToPayment() {
  window.location.href = STRIPE_PAYMENT_LINK_URL;
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("payDeposit").addEventListener("click", goToPayment);
document.getElementById("payDeposit2").addEventListener("click", goToPayment);

document.getElementById("bookTop").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("bookCard").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("emailBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Doula inquiry");
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
  );

  window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
});
async function startCheckout() {
  try {
    const resp = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const data = await resp.json();

    if (!resp.ok || !data.url) {
      throw new Error(data.error || "No checkout URL returned.");
    }

    window.location.href = data.url;
  } catch (err) {
    console.error("Checkout error:", err);
    alert("Couldn’t start payment. Please try again.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const pay1 = document.getElementById("payBasicBtn");
  const pay2 = document.getElementById("payBasicBtn2");

  if (pay1) pay1.addEventListener("click", startCheckout);
  if (pay2) pay2.addEventListener("click", startCheckout);
});