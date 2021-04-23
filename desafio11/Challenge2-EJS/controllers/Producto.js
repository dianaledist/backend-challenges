let PRODUCTS_DB = [];
let PRODUCT_SINGLE = {
    title: '',
    price: '',
    thumbnail: ''
  };


class ProductoController {
    constructor() {
    }

    add(data){
        if(data.title==="" || typeof data.title==="undefined") return false;
        if(data.price==="" || typeof data.price==="undefined") return false;

        PRODUCT_SINGLE = { 
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail,
            id: PRODUCTS_DB.length + 1
        };
        PRODUCTS_DB.push(PRODUCT_SINGLE);
        return PRODUCTS_DB
    }

    get(){
        if(PRODUCTS_DB.length===0) return false;
        return PRODUCTS_DB;
    }

    getById(id){
        return PRODUCTS_DB.find(producto => producto.id === parseInt(id))
    }

    update(id, data){
        PRODUCTS_DB= PRODUCTS_DB.map((producto) => {
            if(producto.id === parseInt(id)){
                producto.title=data.title;
                producto.price=data.price;
                producto.thumbnail=data.thumbnail;
                producto.id=data.id;
            }
            return producto;
        });
    }

    remove(id){
        PRODUCTS_DB=  PRODUCTS_DB.filter((producto) => producto.id !== parseInt(id))
    }
}

export default ProductoController;