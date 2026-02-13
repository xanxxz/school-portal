const API_URL = import.meta.env.VITE_API_URL;

export interface Lesson {
  number: number;
  subject: string;
}

export interface ClassSchedule {
  class: string;
  cabinet: string;
  lessons: Lesson[];
}

export interface DaySchedule {
  weekday: string;
  classes: ClassSchedule[];
}

export const getSchedule = async (): Promise<DaySchedule[]> => {
  const response = await fetch(`${API_URL}/schedule`);

  if (!response.ok) {
    throw new Error('Ошибка загрузки расписания');
  }

  const data = await response.json();

  // Приводим формат к твоим интерфейсам
  return data.map((day: any) => ({
    weekday: day.weekday,
    classes: day.classes.map((cls: any) => ({
      class: cls.name, // <-- преобразование
      cabinet: cls.cabinet,
      lessons: cls.lessons,
    })),
  }));
};
