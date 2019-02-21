import cors from "cors";
import express from "express";
import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

app.get("/", (req, res) => {
    res.send("app working");
});

app.get("/api/weather", (req, res) => {
    fetch(process.env.WEATHER_API_URL)
        .then((data) => data.json())
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
        });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`app running on port ${PORT}`);
});
