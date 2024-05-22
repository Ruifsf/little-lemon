import heroBanner from "./assets/heroBanner.jpg"
function Hero () {
    return (
        <section className="hero">
            <div className="maxWidth heroContainer">
                <div className="heroLeftColumn">
                    <h1>Little Lemon</h1>
                    <h2>The best restaurant in town!</h2>
                    <a href="/" className="heroLink">Reserve a table now!</a>
                </div>
                <div className="heroRightColumn">
                    <img src={heroBanner} height="300px" alt="Banner" className="heroBanner"/>
                </div>
            </div>
        </section>
    );
}
export default Hero;