import * as React from 'react'; 8K (gzipped: 3.2K)
import { Button } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import FirebaseUtil from '_utils/FirebaseUtil'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 36.2K (gzipped: 3K)
import HomeScreen from 'screens/HomeScreen';

interface MainStackProps {}

const Tabs = createBottomTabNavigator();

const MainStack = (props: MainStackProps) => {
    const ProfileScreen = () => {
        return (
            <View>
                <Text>Hi There</Text>
                <Button title="SIGN OUT" onPress={FirebaseUtil.signOut} />
            </View>
        );
    };

    const TabIcon = ({route}) => ({
        tabBarIcon : ({focused, color, size}) => {
            let iconName = 'home-outline';
            if(route.name == "HOme"){
                iconName = focused ? 'home' : 'home-outline';
            
            }else if(route.name == "Checkout"){
                iconName = focused ? 'cart' : 'cart-outline';
            
            }else {
                iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
        },
    });
    return (
       <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        screenOption={TabIcon}
        tabBarOption={{
            activeTintColor: '#FFDB47',
            inactiveTintColor: 'black',
            showLabel: false,
        }}>
           <Tabs.Screen name="Profile" component={ProfileScreen} />
           <Tabs.Screen name="Home" component={HomeScreen} />
       </Tab.Navigator>
    );
};

export default MainStack;

const styles = StyleSheet.create({
    container: {},
});