import styles from "./page.module.scss";
import HighlightedArticle from "./HighlightedArticle/HighlightedArticle";

export default function Home() {
  return (
    <main className={styles.main}>
      <HighlightedArticle />
    </main>
  );
}
