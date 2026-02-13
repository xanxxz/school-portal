const API_URL = import.meta.env.VITE_API_URL;

export interface CardData {
  id: number;
  category: string[];
  date: string; // строка!
  title: string;
  description: string;
  imageUrl?: string;
}

export const getNews = async (): Promise<CardData[]> => {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) throw new Error('Failed to fetch news');

  return res.json();
};
