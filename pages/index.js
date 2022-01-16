import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'
import { fetchNasaData } from '../lib/fetch_nasa_data'
import styles from '../styles/Home.module.css'


export async function getStaticProps(context) {
  const nasaData = await fetchNasaData()
  console.log({nasaData})

  return {
    props: {
      nasaData,
    },
  };
}

export default function Home(props) {
  const {nasaData} = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner
        
      />

      <main className={styles.main}>
      {nasaData.length > 0 && (

            <div className={styles.cardLayout}>
              {nasaData.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  content={coffeeStore.content}
                  date={coffeeStore.date}
                  className={styles.card}
                />
              ))}
            </div>
        )}
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
