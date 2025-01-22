"use client";

import { useState, useEffect } from "react";
import { fetchMessage } from "../app/utils/api";

export default function Home() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessage()
      .then((data) => setMessage(data.message)) // Access the message property
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return <div>{message}</div>;
}
