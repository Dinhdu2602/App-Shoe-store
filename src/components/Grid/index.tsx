import * as React from 'react'; 8K (gzipped: 3.2K)
import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Product } from 'src/Interface';
import gridStyles from './style';

interface GridProps {
    products: Product[];
}

const Grid = (props: GridProps) => {
    const navigation = useNavigation();


    const renderItem: React.FC<{ item: Product; index: number }> = ({
        item,
        index,
    }) => {
        const handlePress = () => {
            navigation.navigate('Product', {
                product: item,
            });
        };
        return (
          <TouchableOpacity style={gridStyles.card} onPress={handlePress}>
              <Image source={{ uri: item.image}} style={gridStyles.image} />
              <View>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>
              </View>
          </TouchableOpacity>  
        );
    };
    
    return (
      <SafeAreaView>
          <FlatList style={gridStyles.grid} data={props.products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>  
    );
};

export default Grid;