import '../App.css';
import Postcards from '../components/Postcards';

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className='hero-text'>
                    <h2><span>Welcome to Rogue Nomad!</span></h2>
                    <h4>A website dedicated to those who love to<br />
                        travel by immersing themselves into the<br /> 
                        culture, people, and places they’re visiting. 
                        </h4>
                    <h3><span>Please follow along on our journey, and learn how to start yours.</span></h3>
                </div>
                <div className='hero-btn-bdr'><button className='hero-button'>Start Here</button></div>
                <div className='hero-img'></div>
            </div>
            <Postcards />
        </>
    )
};

export default Home;