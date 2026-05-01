import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve frontend
const publicDir = path.join(__dirname, "..", "public");
app.use(express.static(publicDir));
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL || "http://localhost:4242";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Basic Doula Package",
              description: "2 prenatal visits, birth support, 1 postpartum visit"
            },
            unit_amount: 120000
          },
          quantity: 1
        }
      ],
      success_url: `${baseUrl}/success.html`,
      cancel_url: `${baseUrl}/cancel.html`
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe session failed" });
  }
});

const PORT = 4242;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
