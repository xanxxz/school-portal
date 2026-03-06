const API_URL = import.meta.env.VITE_API_URL;

export interface LoginResponse {
  token: string;
  message?: string;
}

export const loginUser = async (login: string, password: string): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });

  const data: LoginResponse = await res.json();

  if (!res.ok) throw new Error(data.message || 'Ошибка авторизации');

  return data;
};