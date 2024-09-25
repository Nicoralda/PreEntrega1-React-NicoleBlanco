import CartWidget from './CartWidget'
import logo from '../../assets/logotipo-amazon.webp'
import './navbar.scss'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <img src={logo} alt="" width={130}/>
            </div>

            <ul className='categories'>
                <li><a href="#">Pecheras</a></li>
                <li><a href="#">Bolsitos</a></li>
                <li><a href="#">Juguetes</a></li>
                <li><a href="#">Accesorios</a></li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar