import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import HomeScreen from '_screens/HomeScreen';
import LoadingScreen from '_screens/LoadingScreen';
import LoginScreen from '_screens/LoginScreen';
import {LoginContext} from '_utils/LoginProvider';
import ProductScreen from '../../screens/ProductScreen';

const Stack = createStackNavigator();
export default function AppStack() {
  const {user, isLoading} = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{headerShown: false}}
            component={LoadingScreen}
          />
        ) : user ? (
          <>
            <Stack.Screen
              name="Shoppers"
              component={MainStack}
              options={{
                title: 'SHOPPERS',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
