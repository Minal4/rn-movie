import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const CategoryMovie = ({ images, setFiltered, activeGenre, setActiveGenre }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(images)
            return;
        }

        const filteredMovie = images.filter((item) => item.genre_ids.includes(activeGenre))
        setFiltered(filteredMovie)
    }, [activeGenre])



    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className='pb-5'
        >

            <TouchableOpacity onPress={() => setActiveGenre(0)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >All</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveGenre(35)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >Comedy</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveGenre(28)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >Action</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveGenre(16)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >Animation</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveGenre(14)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >Fantasy</Text>
                </View >
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveGenre(10402)}>
                <View className="mr-2 border py-2 px-4">
                    <Text >Music</Text>
                </View >
            </TouchableOpacity>
        </ScrollView>
    )
}

export default CategoryMovie
