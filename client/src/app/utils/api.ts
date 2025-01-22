const BASE_URL = "/api";

export const fetchMessage = async (): Promise<{ message: string }> => {
  const response = await fetch(`${BASE_URL}/hello`);
  if (!response.ok) {
    throw new Error("Failed to fetch message");
  }
  return response.json();
};
