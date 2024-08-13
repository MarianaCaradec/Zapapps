
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);

    }) 
}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id.toString() === id))
        }, 1000);
    })
}

export const getProductByCategory = (cat) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.filter(e => e.category === cat))
        }, 1000);
    })
}