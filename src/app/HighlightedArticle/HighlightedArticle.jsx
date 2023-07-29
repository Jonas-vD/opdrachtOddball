import styles from "./highlighted-article.module.scss";
import BtnClickMe from "../Buttons/BtnClickMe";
import Image from "next/image";

export default function HighlightedArticle() {
  const imgUrl =
    "data:image/png;base64,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";
  return (
    <div className={styles.article}>
      <div className={styles.article__content}>
        <p className={styles.article__content__stitle}>Working add Oddball</p>
        <h2>
          At oddball, this is a very long title which extends to the second line
        </h2>
        <p>
          We’ve created a very long description that extends to 2 lines. So long
          that I need to type more text than I thought.
        </p>
        <BtnClickMe text="Click me!" />
      </div>
      <div className={styles.article__img}>
        <Image
          src={imgUrl}
          fill
          alt="Logo Oddball"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}