import {Link} from "react-router-dom";

const BackButton = ({url}) => {
    return <Link to={url} className="back-button">Back</Link>;
}

export default BackButton;