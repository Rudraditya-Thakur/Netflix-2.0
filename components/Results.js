import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

function Results({results}) {
    return (
        <FlipMove className="bg-gradient-to-b from-black to-[#040714] px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}

export default Results
