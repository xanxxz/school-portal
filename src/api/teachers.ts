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
