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
app.get("/", (req, res) => {
    res.send("app working");
});
app.get("/api/weather", (req, res) => {
    node_fetch_1.default(process.env.WEATHER_API_URL)
        .then((data) => data.json())
        .then((data) => {
        return res.send(data);
    })
        .catch((err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
});
app.listen(4001, () => {
    // tslint:disable-next-line:no-console
    console.log("app running on port 4001");
});
//# sourceMappingURL=server.js.map