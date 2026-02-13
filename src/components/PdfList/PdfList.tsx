import styles from './PdfList.module.css';

interface PdfItem {
  id: number;
  title: string;
  url: string;
}

interface PdfListProps {
  files: PdfItem[];
}

export default function PdfList({ files }: PdfListProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {files.map(file => (
          <li key={file.id} className={styles.item}>
            <span className={styles.name}>{file.title}</span>
            <div className={styles.actions}>
              <a href={file.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Открыть
              </a>
              <a href={file.url} download className={styles.link}>
                Скачать
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
