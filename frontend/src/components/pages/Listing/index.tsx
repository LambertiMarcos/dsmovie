import axios from "axios";
import { BASE_URL } from "../../../utils/requests";
import MovieCards from "../../MovieCards";
import Pagination from "../../Pagination";


function Listing(){

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    });

    return (
        <>
        <Pagination />

        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCards />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>   
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCards />
                </div>                                     
            </div>
        </div>
        </>
    );
}

export default Listing;