import React, { useContext } from 'react';  7.4K (gzipped: 3K)
import { useEffect } from 'react'; 3K (gzipped: 1.3K)
import { Button, StyleSheet, Text, View } from 'react-native';
import { Product } from '../Interface';
import { UseMounted } from '../hooks/UseMounted';
import FirebaseUtil from '_utils/FirebaseUtil';
import { LoginContext } from '_utils/LoginProvider';
import { getProducts } from '../utils/FirestoreUtil';
import LoadingScreen from './LoadingScreen';

export default function Homescreen() {
    const [data, setData] = useState<Products[]>([]);
    const isMounted = UseMounted();

    useEffect(() => {
        async function init() {
            const products = await getProducts();
            isMounted && setData(products);
        }
        init();
      }, []);

      if (!data || data.length <= 0) {
          return <LoadingScreen />;
      } else 
      return (
        <View>
            <Grid products={data} />
        </View>; 
      ) 
}