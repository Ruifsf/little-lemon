import Restaurant from "./assets/restaurant.jpg";
function RestaurantDescription (){
    return (
        <section className="descriptionSection">
            <div className="maxWidth descriptionContainer">
                <div className="descriptionText">
                    <h5>Our restaurant</h5>
                    <p>Welcome to our family-owned restaurant, where tradition meets taste. For generations, we have been dedicated to serving delicious, home-cooked meals made from the finest organic ingredients. Our commitment to quality ensures that every dish is crafted with care, using only sustainably sourced produce and meats. Experience the warmth of our hospitality and the freshness of our farm-to-table cuisine. Join us for a meal that nourishes the body and delights the senses, all in a cozy, welcoming atmosphere. Come taste the difference that family dedication and organic ingredients make.</p>
                </div>
                <img src={Restaurant} alt="restaurant" className="descriptionImage"/>
            </div>
        </section>
    )
}
export default RestaurantDescription;