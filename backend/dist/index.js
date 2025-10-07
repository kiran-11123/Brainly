"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const Contents_1 = __importDefault(require("./routes/Contents"));
const Authentication_routes_1 = __importDefault(require("./routes/Authentication_routes"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use("/api/v1/users", Authentication_routes_1.default);
app.use("/api/v1/data", Contents_1.default);
app.listen(5000, () => {
    console.log("Server is running");
});
