import cors from "cors";
import express from "express";
import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("app working");
});

app.get("/api/weather/:latlng", (req, res) => {
    fetch(`${process.env.WEATHER_API_URL}${req.params.latlng}`)
        .then((data) => data.json())
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
        });
});

app.get("/api/location/:address", (req, res) => {
    const url = `${process.env.LOCATION_API_URL}&address=${req.params.address}`;
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
        })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`app running on port ${PORT}`);
});
