import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import CategoryMovie from './CategoryMovie'

const FavouriteHeader = ({ images, activeGenre, setActiveGenre, setImages, filtered, setFiltered, page, setSearchItem, searchItem }) => {
    return (
        <>
            <View className="flex-row items-center justify-between">
                <View>
                    <Text
                        style={{ fontFamily: 'MontsBold' }}
                        className="text-2xl w-3/4">Find Your </Text>
                    <Text
                        style={{ fontFamily: 'MontsBold' }}
                        className="text-2xl w-4/4"
                    >Favourite Movie</Text>
                </View>
                <Image
                    className="w-14 h-14 rounded-full"
                    source={require('../assets/images/profile.png')}
                />
            </View>
            <View className='mt-4'>
                <TextInput
                    placeholder='Your Destination...'
                    value={searchItem}
                    onChangeText={(newText) => setSearchItem(newText)}
                    className="bg-[#333] p-4 rounded-lg text-white placeholder-white"
                >

                </TextInput>
            </View>
            <View
                className='mt-5'
            >
                <CategoryMovie images={images} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setImages={setImages} filtered={filtered} setFiltered={setFiltered} page={page} />
            </View>
        </>
    )
}

export default FavouriteHeader