import styles from './PdfList.module.css';

interface PdfItem {
  id: number;
  title: string;
  url: string;
}

interface PdfListProps {
  files: PdfItem[];
  onDelete?: (id: number) => void;
}

export default function PdfList({ files, onDelete }: PdfListProps) {
  const token = localStorage.getItem("token");

  const handleDelete = (id: number) => {
    if (!token || token !== "admin") return;
    if (!window.confirm("Вы уверены, что хотите удалить этот файл?")) return;
    if (onDelete) onDelete(id);
  };

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
              {token === "admin" && (
                <button onClick={() => handleDelete(file.id)} className={styles.deleteBtn}>
                  Удалить
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
