import CartWidget from './CartWidget'
import logo from '../../assets/garra_urbana_remove.png'
import { Link, NavLink } from "react-router-dom"
import './navbar.scss'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='brand'>
                <img src={logo} alt="" width={130}/>
            </Link>

            <ul className='categories'>
                <li className='category'>
                    <NavLink to='/category/bolsos' className= { ({isActive})=> ( isActive ? 'active-link' : '') + ' base-link' } >Bolsitos</NavLink>
                </li>
                <li className='category'>
                    <NavLink to='/category/pecheras' className= { ({isActive})=> ( isActive ? 'active-link' : '') + ' base-link' } >Pecheras</NavLink>
                </li>
                <li className='category'>
                    <NavLink to='/category/basicos' className= { ({isActive})=> ( isActive ? 'active-link' : '') + ' base-link' } >Básicos</NavLink>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar