import { initializeApp, getApps } from "firebase-admin/app";
import { getMessaging, MulticastMessage } from "firebase-admin/messaging";
import { getUserFcmTokensFromRedis } from "./redis.service.js";

if (!getApps().length) {
  initializeApp();
}

export const sendPushNotification = async (
  recipientId: string,
  title: string,
  body: string,
  data?: Record<string, string>
) => {
  try {
    const tokens = await getUserFcmTokensFromRedis(recipientId);
    if (!tokens || tokens.length === 0) return;

    const message: MulticastMessage = {
      tokens,
      notification: { title, body },
      data,
    };

    const response = await getMessaging().sendEachForMulticast(message);
    console.log(`Sent ${response.successCount} notifications`);
  } catch (error) {
    console.error("Error sending FCM notification:", error);
  }
};