// Array de productos
const products = [
    {
        id: 'prod1',
        name: 'Bolsito de tortuga',
        description: '',
        price: 12,
        stock: 5,
        image: '',
        category: 'bolsos'
    },
    {
        id: 'prod2',
        name: 'Bolsito de oso',
        description: '',
        price: 12,
        stock: 5,
        image: '',
        category: 'bolsos'
    },
    {
        id: 'prod3',
        name: 'Bolsito de abeja',
        description: '',
        price: 15,
        stock: 5,
        image: '',
        category: 'bolsos'
    },
    {
        id: 'prod4',
        name: 'Pechera táctica',
        description: '',
        price: 18,
        stock: 5,
        image: '',
        category: 'pecheras'
    },
    {
        id: 'prod5',
        name: 'Pechera táctica colorida',
        description: '',
        price: 18,
        stock: 5,
        image: '',
        category: 'pecheras'
    },
    {
        id: 'prod6',
        name: 'Pechera malla sencilla con correa',
        description: '',
        price: 12,
        stock: 5,
        image: '',
        category: 'pecheras'
    },
    {
        id: 'prod7',
        name: 'Pechera malla colorida con correa',
        description: '',
        price: 15,
        stock: 5,
        image: '',
        category: 'pecheras'
    },
    {
        id: 'prod8',
        name: 'Hoodie con capucha',
        description: '',
        price: 15,
        stock: 5,
        image: '',
        category: 'basicos'
    },
    {
        id: 'prod9',
        name: 'Camisa sencilla',
        description: '',
        price: 8,
        stock: 5,
        image: '',
        category: 'basicos'
    },
    {
        id: 'prod10',
        name: 'Hoodie sencillo',
        description: '',
        price: 12,
        stock: 5,
        image: '',
        category: 'basicos'
    },
];

// Obtiene los productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
// Simula un retraso de red
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

const getProduct = (idProduct) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === idProduct)
            resolve(product)
        }, 2000)
    })
}

export { getProducts, getProduct }