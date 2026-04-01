const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-subscription", async (req, res) => {
  try {
    // Créer une session d'abonnement sans client pré-créé, l'utilisateur saisira son email sur Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1TFOKhAhKhzGwXlAd4YN36k0",
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5500/success.html",
      cancel_url: "http://localhost:5500/cancel.html",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur abonnement");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));