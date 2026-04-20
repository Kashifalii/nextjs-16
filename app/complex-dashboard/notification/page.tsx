"use client";
import { useEffect, useState } from "react";

export default function Notification() {
  const messages = [
    "📩 New message received",
    "⚙️ Server updated",
    "👥 New friend request",
    "🔔 Reminder: Meeting at 5 PM",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentMessage(messages[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-md border">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Notifications
      </h2>

      <div className="text-lg font-medium text-green-600 mb-4">
        {currentMessage}
      </div>

      <p className="text-sm text-gray-500">
        Updates every 3 seconds independently
      </p>
    </div>
  );
}
