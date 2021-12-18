import Image from "next/image"

function Rows({genre}) {
    console.log(genre)
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                {genre.results.map((movie) => (
                    <div className=" group p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
                        <Image layout="responsive" width={1980} height={1080} src={
                            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`
                        } />
                        <div className="opacity-0 group-hover:opacity-100 text-white">
                            <h1>{movie.title}</h1>
                            <p>{movie.release_date}</p>
                            <p>{movie.vote_average}</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Rows
