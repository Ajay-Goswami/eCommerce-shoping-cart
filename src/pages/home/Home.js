import Products from "../product/Products";
import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="hero">
            <div className="Container">
                <div className="wid">
                    <h6 className="textlong"><em>Are you hungry?</em></h6>
                    <h1 className="textlarge">Don't wait !</h1>
                    <button className="order">Order Now</button>
                </div>
                <div className="wid">
                    <img className="wid" src="/images/pizza.png" alt="pizza" />
                </div>
            </div>
        </div>
        <div className="pro">
            <Products />
        </div>
       </>
    )
}

export default Home;