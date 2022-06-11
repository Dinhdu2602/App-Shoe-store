import React, { useContext, useState } from 'react'; 7.4K (gzipped: 3K)
import { View, Text } from 'react-native';
import { Cart } from 'scr/Interface';
import { LogiContext } from '_utils/LoginProvider';
import { getPrice } from '../../utils/CommonUtil';
import { getCombineCart, getProducts, getUpdateCart, subscribeToCartUpdate } from '../../utils/FirestoreUtil';

export default function UseCart() {
    let subcriber : () => void;
    const {user} = useContext(LoginContext);
    const [list, setList] = useState<Cart[]>([]);
    const [price, setPrice] = useState<number>()
    const [cartLoading, setCartLoading] = useState(true);
    const isMounted = UseMounted();

    const updateToCart = async (
        change: FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>
    ) => {
        const Products = (await getProducts([change.doc.data().id])) as Product[];
        setList((old) => {
            const cart = getUpdateCart(old, change, Products);
            setPrice(getPrice(cart));
            return cart;
        });
    };

    async function getCart() {
        if(!user) return;

        try {
            const cart = await getCombineCart(user);
            isMounted && setList(cart);

            isMounted &&setPrice(getPrice(cart))
            
            //Get the real time update on cart
            subscribe = subscribeToCartUpdate(user, updateToCart)
        }catch(e){
            console.log(e);
            alert.alert("Something went wrong")
        }

    }

    useEffect(() => {
        getCart();
        
        return () =>{
            subscriber && subscriber();
        }
    },[])
    return {list, setList, price, cartLoading};
}