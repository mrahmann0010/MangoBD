import { NavLink, Link } from "react-router-dom";

// Icons
import { CiShoppingCart } from "react-icons/ci";
import { BsCartCheckFill } from "react-icons/bs";


export default function PageNav({orderProduct}) {

    const cartItemNum = orderProduct.reduce((acc, item)=> {
        return acc + item.prodQuan;
    }, 0);

    const cartHasItem = cartItemNum > 0? true : false;

        return (
        <nav className="grid grid-cols-1 md:grid-cols-2 md:justify-around md:px-16 md:items-center md:content-center">
            <Link className='link logo-link' to='/'>
                <h1 className="logo justify-self-center pt-4 pb-2">MangoBD</h1>
            </Link>
            
            <ul className="flex justify-self-center">
                <li><NavLink className='link' to='/'>Home</NavLink></li>
                <li><NavLink className='link' to='/products'>Products</NavLink></li>
                <li><NavLink className='link' to='/user'>Profile</NavLink></li>
                <li><NavLink className='link' to='/cart'>
                    
                    {cartHasItem? <span className="nav-icon">
                        <BsCartCheckFill />
                        <span className="nav-icon-cart-num">{cartItemNum}</span>
                        </span>
                    :
                    <span className="nav-icon"><CiShoppingCart /></span>
                    }    
                    </NavLink>
                </li>
                
            </ul>
            
        </nav>
    );
};