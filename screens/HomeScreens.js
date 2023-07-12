import { useFonts } from 'expo-font';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import * as Animatable from 'react-native-animatable';

export default function HomeScreens({ navigation }) {
    const [loaded] = useFonts({
        MontsRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontsSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        MontsBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    })

    if (!loaded) return null;
    return (
        <SafeAreaView>
            <View className='relative h-full justify-end pb-8'>
                <Text
                    className='bg-black opacity-60 absolute top-0 bottom-0 h-full w-full z-10'
                ></Text>
                <Image
                    className="h-screen absolute w-full"
                    source={require('../assets/images/home-image.jpg')}
                />
                <View className='bottom-0 flex-2 mb-5 px-5 z-20'>
                    <Animatable.Text
                        animation='slideInDown'
                        style={{ fontFamily: 'MontsSemiBold' }}
                        className='text-5xl text-white font-semibold'>Explore the thrill of the movie with us</Animatable.Text>
                    <Animatable.Text
                        animation='slideInUp'
                        style={{ fontFamily: 'MontsRegular' }}
                        className='text-white
                    '>If you like to enjoy, this is your place! Here you can watch without hassle and enjoy it.</Animatable.Text>
                </View>
                <Animatable.View className='px-5 z-20'
                    animation='slideInUp'>
                    <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
                        <Button title='Get Started' />
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </SafeAreaView>
    )
}