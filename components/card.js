import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import cls from 'classnames';

const Card = (props) => {
    console.log({props})
  return (
    <div >
        <div className={cls("glass", styles.container)}>
          
          <div >
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={307}
              height={256}
            />
          </div>

          <div >
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>

          <div >
            <h2 >{props.content}</h2>
          </div>

        </div>
    </div>
  );
};

export default Card;