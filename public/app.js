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

document.addEventListener("DOMContentLoaded", () => {
  const payBtn1 = document.getElementById("payBasicBtn");
  const payBtn2 = document.getElementById("payBasicBtn2");

  if (payBtn1) payBtn1.addEventListener("click", startCheckout);
  if (payBtn2) payBtn2.addEventListener("click", startCheckout);

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const emailBtn = document.getElementById("emailBtn");

  if (emailBtn) {
    emailBtn.addEventListener("click", async () => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      try {
        emailBtn.disabled = true;
        emailBtn.textContent = "Sending...";

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

        alert("Message sent successfully!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } catch (err) {
        console.error(err);
        alert("Could not send message.");
      } finally {
        emailBtn.disabled = false;
        emailBtn.textContent = "Send message";
      }
    });
  }
});