import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryMovie = ({ data, images, setImages }) => {
    console.log(images)
    const handleOnCat = (id) => {
        images.results.map((item, index) => console.log(item))
    }

    return (
        <TouchableOpacity onPress={() => handleOnCat(data.id)}>
            <View className="mr-2 border py-2 px-4">
                <Text>{data.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryMovie