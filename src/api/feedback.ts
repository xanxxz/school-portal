const API_URL = import.meta.env.VITE_API_URL;

export interface FeedbackData {
  name: string;
  email: string;
  message: string;
}

export const sendFeedback = async (data: FeedbackData) => {
  const res = await fetch(`${API_URL}/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Ошибка отправки');
  }

  return res.json();
};
