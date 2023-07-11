import { View, Text } from 'react-native'
import React from 'react'

const Button = ({ title }) => {
    return (
        <View className='flex justify-between flex-row'>
            <Text className='bg-[#d4ffb2] rounded-full text-lg font-bold text-black py-3 px-5 text-center'>{title}</Text>
        </View>
    )
}

export default Button