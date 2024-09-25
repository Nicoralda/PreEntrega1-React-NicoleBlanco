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
                <li>Pecheras</li>
                <li>Bolsitos</li>
                <li>Juguetes</li>
                <li>Accesorios</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar