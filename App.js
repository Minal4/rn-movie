import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import FavouriteScreen from './screens/FavouriteScreen';
import Movie from './screens/Movie';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomeScreens} />
        <Stack.Screen name='Favourite' component={FavouriteScreen} />
        <Stack.Screen name='Movie' component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
