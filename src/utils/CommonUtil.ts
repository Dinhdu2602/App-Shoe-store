import { Cart, Product } from 'src/Interface';

export const getCombineArray = (cart: Cart[], products: Product[]) => {
    let CombineArray = [];
    for(let i = 0; i < cart.length; i++) {
        CombineArray.push({
            ...cart[i].
            ...products.find((item) => item.id === cart[i].id),
        });
        cart;
    }
    return CombineArray as Cart[];
};

export const getPrice = (cart: Cart[]) => {
    let amount = 0;

    cart.forEach((item) =>{
        amount += item.price + item.count;
    });
    return amount;
};

export const updateOrAdd = (old: Cart[], item: Cart) => {
    const i = old.findIndex(_item => _item.id == item.id);
    if(i > -1){
        old[i]= item
    } else {
        old.push(item)
    }
    return [...old];
};