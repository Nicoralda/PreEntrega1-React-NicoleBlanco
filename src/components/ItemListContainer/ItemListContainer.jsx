import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (idCategory) {
                    // Filtrar la data por la categoría
                    const filterProducts = data.filter((product) => product.category === idCategory)
                    setProducts(filterProducts)
                } else {
                    // Guardar la lista completa
                    setProducts(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                console.log("Finalizó la promesa")
            })
    }, [idCategory])


    return (
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer