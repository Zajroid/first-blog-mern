import dotenv from "dotenv";
import express from "express";


const app = express();
const PORT = process.env.PORT || 5100;


app.get("/", (req, res) => {
  res.send("<h1>Express</h1>");
});



app.listen(PORT, (err) => {
  if (err) {
    return console.log(`[-] ${err}`);
  }

  console.log(`[+] Server been started on port ${PORT}`);
});
