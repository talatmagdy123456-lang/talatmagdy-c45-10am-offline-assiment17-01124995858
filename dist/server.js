import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js"; // استخدام .js أو بدون امتداد
const app = express();
// استخدام swagger بعد تعريف app
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//# sourceMappingURL=server.js.map