function MainDishes () {
    return(
        <section>
            <div className="maxWidth">
                <h3 className="mainDishesTitle">Our Main Dishes</h3>
                <div className="mainDishesContainer">
                    <div className="dishContainer">
                        <div className="littleFingers"></div>
                        <h4>Little Fingers</h4>
                        <p>Our special recipe. Amazing bread, with our blend of bacon, cheese and the freshest spices</p>
                    </div>
                    <div className="dishContainer">
                        <div className="greekSalad"></div>
                        <h4>Greek Salad</h4>
                        <p>Amazing. Light. Classic. Can't go wrong with a delicious Greek Salad</p>
                    </div>
                    <div className="dishContainer">
                        <div className="lemonPie"></div>
                        <h4>Lemon Pie</h4>
                        <p>Our Homemade Lemon Pie is the best in the area. Made with organic Lemons from the trees on our backyard!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainDishes;