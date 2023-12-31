import { useNavigate } from 'react-router-dom';

export const Image = ({ imageUrl, id }) => {
    const navigate = useNavigate()

    const redirectToPage = () => {
        navigate(`${id}`);
    }
    return(
        <div>
            <img src={imageUrl} onClick={redirectToPage} alt="images"/>
        </div>
    )

}
export default Image;