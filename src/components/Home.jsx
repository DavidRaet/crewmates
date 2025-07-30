import { useNavigate } from "react-router-dom";
import './pageCSS/Home.css';
const Home = () => {
    const navigate = useNavigate();

    const navigateToCreate = () => {
        navigate('/create');
    }

    return (
        <div className="home-page">
            <h1>
                Blue Lock Creator
            </h1>
            <img className="home-image" src="/images/home-image.jpg" alt="" />
            <p className="home-desc">
                Welcome to the Blue Lock Creator Page. Just like how characters
                in Blue Lock were to choose their own team based on their quirks,
                you can also choose your destiny by creating a set of characters 
                with their own unique background.
            </p>
            <button className="navigate-btn" onClick={navigateToCreate}>Create</button>
        </div>
    )
}

export default Home;