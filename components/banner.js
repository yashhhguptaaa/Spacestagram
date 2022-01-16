import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerImageText}>
        
        <div>
            <h6 className={styles.title}>Spacestagram</h6>
        </div>
        <div className={styles.heroImage}>
            <Link href="https://github.com/yashhhguptaaa/Spacestagram"><a target="_blank"><Image src="/static/spacesuit.png" width={140} height={140} /></a></Link>
        </div>
        
      </div>

    </div>
  );
};

export default Banner;
