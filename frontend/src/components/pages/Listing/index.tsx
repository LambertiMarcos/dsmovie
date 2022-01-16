import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/requests";
import MovieCards from "../../MovieCards";
import Pagination from "../../Pagination";
import { MoviePage } from '../../../types/movie';


function Listing() {

    const [pageNamber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
            content: [],
            last: true,
            totalPages: 0,
            totalElements: 0,
            size: 12,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: true
        }
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNamber}`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                //console.log(data);
                //setPageNumber(data.number);
            });

    }, [pageNamber]);

    const handlePageChange = (newNumber: number) => {
        setPageNumber(newNumber);
    }


    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(movie =>(
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3">
                            <MovieCards movie = {movie} />
                        </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;