import Head from 'next/head'
import Header from '../components/Header'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div className='bg-[#02040e]'>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Results results={results.results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  var data = await request.json();
  return {
    props: {
      results: data,
    }
  }
}