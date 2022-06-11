import  {RouteProp } from '@react-navigation/native'; 9.3K (gzipped:3.3K)
import * as React from 'react'; 8K (gzipped: 3.2K)
import { useContext } from 'react'; 3K (gzipped: 1.3K)
import { Alert } from 'react-native'; 
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { Product } from 'src/Interface';
import { LoginContext } from '_utils/LoginProvider'; 
import { addToCart } from '../../utils/FirestoreUtil';


type ParamList = {
    detail: {
        product: Product;
    };
};
interface ProductScreenProps {
    route: RouteProp<ParamList, 'detail'>;
    navigation: any;
}

const ProductScreen = ({route, navigation}: ProductScreenProps) => {
    const {user} = useContext(LoginContext);
    const product = route.params.product;

    const handlePress = () => {
        try {
           addToCart(user, product.id);
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong');
        }
    };
    
    return (
       <ScrollView>
           <View>
               <Image source={{ uri: product.image}} style={productStyles.image}/> 
           </View>
           <View>
               <Text>{product.title}</Text>
               <Text>{product.title}</Text>
               <Button title="ADD TO CART" onPress={handlePress} />
               <Text>{product.description}</Text>
           </View>
       </ScrollView>
    );
};

export default ProductScreen;