const API_URL = import.meta.env.VITE_API_URL;

export interface TeacherData {
  id: number;
  name: string;
  position: string;
  bio?: string;
  photoUrl?: string;
  subjects?: string[];
}

export const getTeachers = async (): Promise<TeacherData[]> => {
  const res = await fetch(`${API_URL}/teachers`);
  if (!res.ok) {
    throw new Error('Failed to fetch teachers');
  }
  return res.json();
};

// ===== POST запрос для добавления преподавателя =====
export interface TeacherPayload {
  name: string;
  position: string;
  bio?: string;
  photoUrl?: string;
  subjects: string[];
}

export const createTeacher = async (
  payload: TeacherPayload,
  token: string
): Promise<TeacherData> => {
  const res = await fetch(`${API_URL}/teachers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Ошибка добавления преподавателя');

  return data; // возвращаем объект преподавателя
};

export const deleteTeacher = async (id: number, token: string) => {
  const res = await fetch(`${API_URL}/teachers/${id}`, {
    method: 'DELETE',
    headers: { Authorization: token }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Ошибка удаления преподавателя');
  return data;
};