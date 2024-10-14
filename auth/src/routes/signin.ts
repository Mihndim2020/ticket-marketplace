import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.json({ message: "Welcome to the world of Mih" });
});

export { router as signinRouter };
