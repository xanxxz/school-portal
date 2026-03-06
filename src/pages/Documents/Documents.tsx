import PdfList from "../../components/PdfList/PdfList";
import styles from './Documents.module.css';

export default function Documents() {

   const files = [
    { id: 1, title: 'Устав образовательной организации', url: '/docs/Ustav.pdf' },
    { id: 2, title: 'План ФХД на 2026 год (на 2026 год и плановый период 2027 и 2028 годов)', url: '/docs/Plan.pdf' },
    { id: 3, title: 'Свидетельство о государственной аккредитации (с приложениями)', url: '/docs/Akr.pdf' },
    { id: 4, title: 'Правила внутреннего распорядка обучающихся', url: '/docs/Pravila1.pdf' },
    { id: 5, title: 'Правила внутреннего трудового распорядка для работников МАОУ СОШ №28', url: '/docs/Pravila2.pdf' },

    { id: 6, title: 'Положение о языке обучения', url: '/docs/n6.pdf' },
    { id: 7, title: 'Политика обработки персональных данных', url: '/docs/n7.pdf' },
    { id: 8, title: 'Положение о комиссии по контролю за организацией и качеством питания обучающихся', url: '/docs/n8.pdf' },
    { id: 9, title: 'Учебный план начального общего образования (2025-2026 уч.г.)', url: '/docs/n9.pdf' },
    { id: 10, title: 'Учебный план основного общего образования (2025-2026 уч.г.)', url: '/docs/n10.pdf' },
  ];
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Документы</h1>
      <PdfList files={files} />
    </div>
  );
}
