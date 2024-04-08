import '../App.css';
import heroImg from '../images/rice-fields-ind.jpeg'

const Home = () => {
    return (
        <div className="hero">
            <div className="hero-bg"></div>
            <div>
                <img className='hero-img' src={ heroImg } />
            </div>
        </div>
    )
};

export default Home;