import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.json({ message: "Welcome to the world of Mih" });
});

export { router as currentUserRouter }; // This is because we are going to have many routers in our application.
