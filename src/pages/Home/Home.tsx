import styles from './Home.module.css';
import s from '../../assets/s.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topBlock}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>Миссия школы:</h2>
          <p className={styles.subtitle}>Мы даем уверенность в будущем, обеспечивая качественное образование в настоящем.</p>
        </div>
        <div className={styles.imgBox}>
          <img 
            className={styles.img}
            src={s}
          />
          <div className={styles.textBox}>
            <div className={styles.one}>
              <p className={styles.text}><span>МАОУ</span> СОШ №28 основана в 1993 году. </p>
              <p className={styles.text}>
                <span>На</span> сегодняшний день в школе обучается более двух тысяч детей в 66 классах, 
                преподают 94 педагогических работника. 
              </p>
              <p className={styles.text}>
                <span>В</span> школе создана комфортная среда для получения обучающимися качественного современного 
                образования, сформирован творческий высококвалифицированный педагогический коллектив, 
                успешно решающий образовательно-воспитательные задачи.
              </p>
            </div>
            <div className={styles.two}>
              <p className={styles.text}>В 2025 наши выпускники поступили в</p>
              <p className={styles.text}>
                НГПУ им. К. Минина, ПГУПС, КГЭУ, ГУАП, СНИУ им. ак. 
                С.П. Королева, СПБГЭУ, УЛГУ, РГПУ им. А.И. Герцена, ИУЭС ЮФУ, СПбГУПТД, МарГУ, СПХФУ, ЧувГУ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.problem}>
        <div className={styles.div}>
          <h3>Есть предложения по организации учебного процесса или знаете, как сделать школу лучше?</h3>
          <Link to="/feedback">
            <button className={styles.button}>Начать с проблемы</button>
          </Link>
        </div>
        <img src="https://pos.gosuslugi.ru/bin/banner-fluid/18/banner-fluid-bg-18-2.svg"/>
      </section>
      <section className={styles.imgGos}>
        <img 
          src="https://media.gosweb.gosuslugi.ru/gwb/year-of-defender-2025-school_desktop.png" 
          alt="Год Защитника Отечества — 2025." 
          title="Год Защитника Отечества — 2025.">
        </img>
        <img 
          src="https://media.gosweb.gosuslugi.ru/gwb/min-education-ru-news-school_desktop.png" 
          alt="Новости министерства просвещения Российской Федерации." 
          title="Новости министерства просвещения Российской Федерации.">
        </img>
      </section>
      <section className={styles.imgGosBox}>
        <a 
          href="https://4609852.redirect.appmetrica.yandex.com?appmetrica_tracking_id=1182488767957576876&amp;referrer=reattribution%3D1" 
          title=""
        >
          <img src="https://sh28bal.gosuslugi.ru/netcat_files/20/3433/1200h200_1.png"/>    
        </a> 
        <img src="https://sh28bal.gosuslugi.ru/netcat_files/20/3416/Tsvetnoy_gorizontal_nyy_1024x628.png"></img>
        <img src="https://sh28bal.gosuslugi.ru/netcat_files/20/3430/Takzdorovo.jpg"></img>
        <img alt="" title="" src="https://sh28bal.gosuslugi.ru/netcat_files/20/3428/A4.png"></img>
      </section>
    </div>
  );
}
