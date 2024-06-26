import '../App.css';
import Postcards from '../components/Postcards';

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="overlay">
                <div className='hero-text'>
                    <h2>Welcome to <span className='rn-span'>Rogue Nomad!</span></h2>
                    <h4>A website <b> dedicated </b><br /> to those who love to
                        <b> travel</b> by immersing themselves into the 
                        <b> culture, people, and places</b> they’re visiting. 
                        </h4>
                    <h3><span>Follow along on our journey, and learn how to start yours.</span></h3>
                    <div className='hero-btn-bdr'><button className='hero-button'>Start Here</button></div>
                </div>
                </div>
            </div>
            <Postcards />
        </>
    )
};

export default Home;