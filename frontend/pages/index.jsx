import Head from 'next/head';

import styles from '../styles/Home.module.css';

//IMPORTS OF COMPONENTS
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import CardP from '../components/cardP';

export async function getStaticProps() {
  const urlGetFeed = `http://localhost:8080/`;
  const data = await fetch(urlGetFeed);
  const dataPosts = await data.json();

  const urlGetFakePosts = `http://localhost:8080/fakeposts`;
  const dataFakePost = await fetch(urlGetFakePosts);
  const dataFakePosts = await dataFakePost.json();
  return {
    props: { dataPosts, dataFakePosts },
  }
}

export default function Home({ dataPosts, dataFakePosts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preview Insta Feed</title>
        <meta name="description" content="Utilize nosso preview de feed do insta para organizar suas fotos antes de postar." />
        <link rel="icon" href="" />
      </Head>

      <Header />

      <main className={styles.main}>
        {
          dataFakePosts.map(p => (
            <CardP key={p._id} photoP={p.image} id={p._id} />
          ))
        }
        {
          dataPosts ?
            dataPosts.data.map(p => (
              <Card key={p.permalink} photo={p.media_url} />
            ))
            :
            <h4>Sua conta não possui nenhuma foto ainda, carregue uma foto!</h4>
        }
      </main>

      <Footer />

    </div>
  )
}
