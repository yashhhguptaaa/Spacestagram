import { useState } from "react";
import { AiOutlineCalendar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiFileCopyLine } from "react-icons/ri";
import { BsCheckAll } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import cls from "classnames";

const Card = (props) => {
  const [isLiked, setLiked] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const likeHandler = () => {
    console.log("Liked", isLiked);
    setLiked(!isLiked);

    // if (!isLiked) {
    //   setShowLikeIcon(true);
    //   likeIconTimer = setTimeout(() => setShowLikeIcon(false), 1000);
    // }
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(props.imgUrl);
    setLinkCopied(true);
  };

  return (
    <div>
      <div className={cls("glass", styles.container)}>
        <div>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            width={307}
            height={256}
          />
        </div>

        <div>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.iconWrapper}>
          <Image src="/icon/calendar.svg" width="24" height="24" />
          <p className={styles.text}>{props.date}</p>
        </div>
        <div className={styles.cardContent}>
          <p>{props.content}</p>
        </div>

        <div>
          <button className={styles.likeButton} onClick={() => likeHandler()}>
            {isLiked ? (
              <AiFillHeart
                size={24}
                color="red"
                style={{
                  marginTop: -2,
                }}
              />
            ) : (
              <AiOutlineHeart size={24} style={{ marginTop: -2 }} />
            )}
          </button>

          <button
            className={styles.copyButton}
            aria-label="copy button"
            onClick={() => copyHandler()}
          >
            {linkCopied ? (
              <BsCheckAll size={25} color="black"   />
            ) : (
              <RiFileCopyLine size={22} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
