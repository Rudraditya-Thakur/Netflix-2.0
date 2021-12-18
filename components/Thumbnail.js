import Image from "next/image"
import { forwardRef } from "react";

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 easi-in transform sm:hover:scale-105 hover:z-50">
            <Image layout="responsive" width={1980} height={1080} src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
            } />
            <div>
                <h2 className="text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="truncate max-w-md">{result.overview}</p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">{" "}{result.release_date || result.first_air_date}{" "}</p>
            </div>
        </div>
    )
})

export default Thumbnail
