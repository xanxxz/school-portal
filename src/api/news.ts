const API_URL = import.meta.env.VITE_API_URL;

export interface CardData {
  id: number;
  category: string[];
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const getNews = async (): Promise<CardData[]> => {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) throw new Error('Failed to fetch news');

  return res.json();
};

// ===== добавляем POST для админа =====
export interface CreateNewsPayload {
  title: string;
  description: string;
  category: string[];
  imageUrl?: string;
}

export const createNews = async (payload: CreateNewsPayload, token: string): Promise<{ message: string }> => {
  const res = await fetch(`${API_URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Ошибка добавления новости');

  return data;
};

export const deleteNews = async (id: number, token: string) => {
  const res = await fetch(`${API_URL}/news/${id}`, {
    method: 'DELETE',
    headers: { Authorization: token }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Ошибка удаления новости');
  return data;
};