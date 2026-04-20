"use client";
import { useEffect, useState } from "react";

export default function User() {
  const users = ["Alice", "Bob", "Charlie", "Diana"];
  const [currentUser, setCurrentUser] = useState(users[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % users.length;
      setCurrentUser(users[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-md border">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Users Panel</h2>

      <div className="text-2xl font-bold text-blue-600 mb-4">{currentUser}</div>

      <p className="text-sm text-gray-500">
        Auto-switching active user every 2 seconds
      </p>
    </div>
  );
}
