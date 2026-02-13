import { useEffect, useState } from 'react';
import styles from './Schedule.module.css';
import { getSchedule } from '../../api/schedule';
import type { DaySchedule } from '../../api/schedule';
import ScheduleComponent from '../../components/Schedule/Schedule';
import Loader from '../../components/Loader/Loader';

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchedule()
      .then(setSchedule)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Расписание</h1>

      {loading ? (
        <Loader size={80} />
      ) : (
        <ScheduleComponent data={schedule} />
      )}
    </div>
  );
}
