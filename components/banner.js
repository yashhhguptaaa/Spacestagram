import Image from "next/image";
import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerImageText}>
        <div className={styles.heroImage}>
            <Image src="/static/nasa-image.png" width={140} height={140} />
        </div>
        <div className={styles.title}>
            <h6 >Spacestagram</h6>
        </div>
        
      </div>

    </div>
  );
};

export default Banner;