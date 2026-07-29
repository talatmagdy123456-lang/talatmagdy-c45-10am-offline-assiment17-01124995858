import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_URL);
import app from "./app.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    console.log("1- Before DB");
    await connectDB();
    console.log("2- After DB");
    app.listen(PORT, () => {
        console.log(`🚀 Server Running On Port ${PORT}`);
    });
};
startServer();
//# sourceMappingURL=server.js.map