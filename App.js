import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import FavouriteScreen from './screens/FavouriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Favourite'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomeScreens} />
        <Stack.Screen name='Favourite' component={FavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
