import Head from 'next/head'
import requests from "../utils/requests"
import Rows from '../components/Rows';
import Header from '../components/Header';

export default function Home({genres}) {
  return (
    <div>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#040714] text-white'>
        <Header />
        {genres.map((genre) => (
          <Rows key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const fetchTrending = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending}`);
  // const fetchNetflixOriginals = await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
  const fetchTopRated = await fetch(`https://api.themoviedb.org/3${requests.fetchTopRated}`);
  const fetchActionMovies = await fetch(`https://api.themoviedb.org/3${requests.fetchActionMovies}`);
  const fetchComedyMovies = await fetch(`https://api.themoviedb.org/3${requests.fetchComedyMovies}`);
  const fetchHorrorMovies = await fetch(`https://api.themoviedb.org/3${requests.fetchHorrorMovies}`);
  const fetchRomanceMovies = await fetch(`https://api.themoviedb.org/3${requests.fetchRomanceMovies}`);
  const fetchDocumentaries = await fetch(`https://api.themoviedb.org/3${requests.fetchDocumentaries}`);

  var fetchTrendingData = await fetchTrending.json();
  // var fetchNetflixOriginalsData = await fetchNetflixOriginals.json();
  var fetchTopRatedData = await fetchTopRated.json();
  var fetchActionMoviesData = await fetchActionMovies.json();
  var fetchComedyMoviesData = await fetchComedyMovies.json();
  var fetchHorrorMoviesData = await fetchHorrorMovies.json();
  var fetchRomanceMoviesData = await fetchRomanceMovies.json();
  var fetchDocumentariesData = await fetchDocumentaries.json();

  return {
    props : {
      genres: [
        fetchTrendingData, 
        // fetchNetflixOriginalsData,
        fetchTopRatedData, fetchActionMoviesData,
        fetchComedyMoviesData, fetchHorrorMoviesData,
        fetchRomanceMoviesData, fetchDocumentariesData,
      ]
    }
  }
}
