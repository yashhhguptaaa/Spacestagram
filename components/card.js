import { useState, useEffect } from "react";
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
    
    
    if(!JSON.parse(localStorage.getItem("userLiked"))){
        let likedIds = []
      localStorage.setItem("userLiked",JSON.stringify(likedIds))
    }
    let likedIds = JSON.parse(localStorage.getItem("userLiked"))

    likedIds = likedIds? likedIds :[]
  
    if(!isLiked) {
        likedIds.push(props.name)
        localStorage.setItem("userLiked",JSON.stringify(likedIds))

        setLiked(!isLiked);
    }
    else{
        likedIds = likedIds.filter(id => id !== props.name)
        localStorage.setItem("userLiked",likedIds)
 
        setLiked(!isLiked);
    }
  };

  useEffect(() => {
      let likedIds = JSON.parse(localStorage.getItem("userLiked"))
     
      if(likedIds){
          console.log("likedIds:",likedIds)
          let id = likedIds.find(name => name === props.name)
    
          if(id) {
              setLiked(true)
          }
      }else {

        localStorage.setItem("userLiked",JSON.stringify([]))
      }
  }, [props.id])

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
            width={344}
            height={350}
          />
        </div>

        <div className={styles.iconWrapper}>
          <Image src="/icon/calendar.svg" width="30" height="30" />
          <p className={styles.text}>{props.date}</p>
        </div>

        <div className={styles.cardHeader}>
          <p >{props.name}</p>
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
