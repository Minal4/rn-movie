import { TextInput, Image, SafeAreaView, View, Text, ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Gallery from '../components/Gallery';
import CategoryMovie from '../components/CategoryMovie';

const FavouriteScreen = () => {
    const [images, setImages] = useState([])
    const [search, setSearch] = useState([])
    const [genre, setGenre] = useState([])
    const [searchItem, setSearchItem] = useState('')
    // JavaScript
    const fetchData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setImages(data)
    }

    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`


    const searchMovie = async (value) => {
        const fetchApi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US&query=${value}&page=1&include_adult=false`)
        const data = await fetchApi.json()
        if (searchItem.length) {
            setSearch(data)
        }
    }

    const genreMovie = async () => {
        const fetchApi = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US&page=1&include_adult=false`)
        const data = await fetchApi.json()
        setGenre(data)
    }

    const handleOnCat = (value) => {
        alert('asd')
    }

    useEffect(() => {
        fetchData(URL)
        genreMovie()
    }, [])

    useEffect(() => {
        searchMovie(searchItem)
    }, [searchItem])

    const [loaded] = useFonts({
        MontsRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontsSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        MontsBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    })

    if (!loaded) return null;
    return (
        <SafeAreaView className='px-5 mt-12 pb-[145px]'>
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
                {
                    <FlatList
                        data={genre.genres}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) => <CategoryMovie data={item} images={images} setImages={setImages} />}
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>
                }
            </View>
            {
                searchItem.length ?
                    <FlatList
                        data={search.results}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Gallery data={item} />}
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>
                    : <FlatList
                        data={images.results}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Gallery data={item} />}

                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>

            }
        </SafeAreaView >
    )
}

export default FavouriteScreen