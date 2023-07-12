import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';


const Movie = ({ route, navigation }) => {
    const { data } = route.params
    return (
        <Animatable.View
            animation='slideInDown'
        >
            <TouchableOpacity onPress={() => navigation.push('Favourite')} style={{ position: 'absolute', left: 15, zIndex: 2, top: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    name='chevron-left'
                    data
                    size={26}
                >Back</Icon>
            </TouchableOpacity>
            <View>
                <Image
                    className='h-80 w-full rounded-b-full'
                    source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }}
                    resizeMode='contain'
                />
            </View>
            <View className=" px-4">
                <Text className='text-center mt-5 font-bold'>{data.release_date}</Text>
                <Text className='text-center mt-5 text-xl font-bold'>{data.original_title}</Text>
                <Text className='text-center mt-5'>{data.overview}</Text>
            </View>
        </Animatable.View>
    )
}

export default Movie