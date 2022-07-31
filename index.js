import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://kloveaz:1251@cluster0.a4ddwb9.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log(`[+] DB OK`))
  .catch((err) => console.log(`[-] DB ERROR: ${err}`));

const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect('/auth/register')
});

app.post("/auth/register", (req, res) => {
  
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`[-] ${err}`);
  }

  console.log(`[+] Server been started on port ${PORT}`);
});
