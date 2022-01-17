import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import { fetchNasaData } from "../lib/fetch_nasa_data";
import styles from "../styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";

export async function getStaticProps(context) {
  const nasaData = await fetchNasaData();

  return {
    props: {
      nasaData,
    },
  };
}

export default function Home(props) {
  
  const [handleError, setHandleError] = useState("")
  
  if(typeof(props.nasaData)== String){
    setHandleError(props.nasaData)
    window.alert(`${props.nasaData}`)
  }

  const [nasaData, setNasaData] = useState(props.nasaData);
  const [pageAndLimit, setPageAndLimit] = useState({ page: 2, limit: 2 });
  const loadMore = async () => {
    if (pageAndLimit.page * pageAndLimit.limit <= 30) {
      const response = await fetchNasaData(
        pageAndLimit.page,
        pageAndLimit.limit
      );
      setPageAndLimit({
        page: pageAndLimit.page + 1,
        limit: pageAndLimit.limit,
      });
      let newData = nasaData.concat(response);
      
      setNasaData(newData);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Spacestagram</title>
        <meta name="description" content="NASA Generated Content" />
        <link rel="icon" href="/static/nasa-image.png" />
      </Head>

      <div className={styles.bannerComponent}>
        <Banner />
      </div>

      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={pageAndLimit.page * pageAndLimit.limit <= 30}
        loader={
          <img
            key={0}
            height={60}
            style={{marginLeft:"46%",marginTop:"4rem"}}
            width={60}
            src="/static/loader.gif"
            alt="loading"
          />
        }
      >
        <main className={styles.main}>
          {(handleError=="" && nasaData && nasaData.length > 0 )? (
            <div className={styles.cardLayout}>
              {nasaData && nasaData.map((coffeeStore,idx) => (
                <Card
                  key={idx}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  content={coffeeStore.content}
                  date={coffeeStore.date}
                  className={styles.card}
                />
              ))}
            </div>
          ) : (
            <div className={styles.main}>
              {handleError}
            </div>
          )}
        </main>
      </InfiniteScroll>
    </div>
  );
}
