import { Redis } from "ioredis";
import dotenv from "dotenv";
dotenv.config();
const redisUrl = process.env.REDIS_URL || "127.0.0.1:6379";
export const redis = new Redis(redisUrl, {
    tls: redisUrl.startsWith("rediss://") ? {} : undefined,
    maxRetriesPerRequest: null,
});
redis.on("connect", () => {
    console.log("✅ Connected to Upstash Redis successfully!");
});
redis.on("error", (err) => {
    console.error("❌ Redis Connection Error:", err.message);
});
// دالة مساعدة لجلب التوكينز (مستعملة في fcm.service)
export const getUserFcmTokensFromRedis = async (userId) => {
    try {
        const tokens = await redis.smembers(`fcm_tokens:${userId}`);
        return tokens;
    }
    catch (error) {
        console.error("Error fetching FCM tokens from Redis:", error);
        return [];
    }
};
//# sourceMappingURL=redis.service.js.map