const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export const apiClient = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }

  return response.json() as Promise<T>;
};
