import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  // if (!type) {
  //   throw new Error("Type is required");
  // }

  // if (!comment) {
  //   throw new Error("Comment is required");
  // }

  // if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
  //   throw new Error("Invalid screenshot format");
  // }

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTPP server running!!");
});
