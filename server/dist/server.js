"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
app.use(cors_1.default({ origin: process.env.CLIENT_ORIGIN }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("app working");
});
app.get("/api/weather/:latlng", (req, res) => {
    node_fetch_1.default(`${process.env.WEATHER_API_URL}${req.params.latlng}`)
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
    node_fetch_1.default(url)
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
//# sourceMappingURL=server.js.map