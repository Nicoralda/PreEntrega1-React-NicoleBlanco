import CartWidget from './CartWidget'
import logo from '../../assets/logotipo-amazon.webp'
import { Link } from "react-router-dom"
import './navbar.scss'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <img src={logo} alt="" width={130}/>
            </div>

            <ul className='categories'>
                <li className='category'>
                    <Link to='/category/bolsos' className='link-text'>Bolsitos</Link>
                </li>
                <li className='category'>
                    <Link to='/category/pecheras' className='link-text'>Pecheras</Link>
                </li>
                <li className='category'>
                    <Link to='/category/basicos' className='link-text'>Básicos</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar