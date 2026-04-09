import express from "express";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

let stripe: Stripe | null = null;

function getStripe() {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return null;
    stripe = new Stripe(key);
  }
  return stripe;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Routes
app.post("/api/create-checkout-session", async (req, res) => {
  const { planId, planName, price } = req.body;
  const stripeClient = getStripe();

  if (!stripeClient) {
    return res.status(500).json({ error: "Stripe is not configured." });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planName,
              description: `Subscription to ${planName} at g2m.xyz`,
            },
            unit_amount: price * 100,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
    });

    res.json({ id: session.id });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/send-confirmation", async (req, res) => {
  const { email, planName } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"g2m.xyz" <noreply@g2m.xyz>',
      to: email,
      subject: `Welcome to g2m.xyz - Your ${planName} Subscription`,
      text: `Hi there! Thank you for subscribing to ${planName}. We're excited to help you scale.`,
      html: `<h1>Welcome to g2m.xyz</h1><p>Thank you for subscribing to <strong>${planName}</strong>.</p>`,
    });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to send confirmation email." });
  }
});

export default app;
