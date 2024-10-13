import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.image} className="img-item" alt="" width={100} />
            <p className="item-text">{product.name}</p>
            <p className="item-text">${product.price}</p>
            <Link to={"/detail/" + product.id} className="button-detail" >Ver más</Link>
        </div>
    )
}
export default Item