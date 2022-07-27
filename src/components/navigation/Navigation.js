import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
        <nav className="navi-container">
            
                <Link to="/">
                    <img src="/images/logo.png" alt="logo" />
                </Link>

            <ul className="bottom-Ul">
                <li className='spac'> <Link className="underline" to="/">Home</Link> </li>
                <li className='spac'> <Link className="underline" to="/products">Products</Link> </li>
                {/* <li className='spac'> <Link className="underline" to="/cart">Cart</Link> </li> */}
                <li className='spac'> <Link className="underline" to="/about">About</Link> </li>

                <li className='spac'>
                    <Link to="/cart" className="underline">
                        <div className='cartStyle'>
                            <span >10</span>
                            <img src="/images/cart.png" alt="cart-icon" />    
                        </div>    
                    </Link>
                </li>
                
            </ul>
        </nav>
    </>
  )
}

export default Navigation