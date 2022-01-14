
import { useParams } from "react-router-dom";
import FormCard from "../../FormCard";

function Form() {

    const params = useParams();
    return (
        <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;