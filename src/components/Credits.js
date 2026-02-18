import styles from "../styles/Credits.module.css";
import FadeInSection from "./FadeInSection";

export default function Credits() {
  return (
    <FadeInSection>
      <div id="credits" className={styles.credits}>
        <div className={styles["ending-credits"]}>
          <div>Built by Shashank Bezgam. </div>
        </div>
      </div>
    </FadeInSection>
  );
}
