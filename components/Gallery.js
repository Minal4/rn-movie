import { TouchableOpacity } from 'react-native';
import { Image, View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'



const Gallery = ({ data }) => {
    const navigation = useNavigation();

    return (
        <Animatable.View
            animation='slideInDown'
            className='relative mt-5'>
            <TouchableOpacity onPress={() => navigation.navigate("Movie", { data })}>
                <Image
                    className='rounded-lg'
                    style={styles.thumb}
                    source={{ uri: `https://image.tmdb.org/t/p/original${data.backdrop_path}` }}
                />
            </TouchableOpacity>
            <View className='absolute bottom-5 left-4 p-5 w-11/12 rounded-md opacity-75 focus:scale-105 touch-pinch-zoom bg-white'>
                <Text className='text-black font-bold'>{data.title} <Text className='ml-3 text-sm font-bold'>{`'${data.original_language.toUpperCase()}'`}</Text></Text>
            </View>
            <Text className={`rounded-full absolute top-3 right-3 ${data.media_type ? 'bg-white text-black px-5 py-2' : ''} font-bold`}>{data.media_type ? data.media_type.toUpperCase() : null}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    thumb: {
        width: '100%',
        height: 300,
    }
})

export default Gallery