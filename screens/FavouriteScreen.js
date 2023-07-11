import { TextInput, Image, SafeAreaView, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import CategoryMovie from '../components/CategoryMovie';
import Button from '../components/Button';
import Toast from 'react-native-toast-message';
import Loading from '../components/Loading';

const FavouriteScreen = () => {
    const [images, setImages] = useState([])
    const [search, setSearch] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)
    const [filtered, setFiltered] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    // JavaScript
    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            setLoading(true)
            const data = await response.json()
            setImages(data.results)
            setFiltered(data.results)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US&page=${page}`


    const searchMovie = async (value) => {
        const fetchApi = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US&query=${value}&page=1&include_adult=false`)
        const data = await fetchApi.json()
        if (searchItem.length) {
            setSearch(data)
        }
    }
    useEffect(() => {
        fetchData(URL)
    }, [page])

    useEffect(() => {
        searchMovie(searchItem)
    }, [searchItem])

    const [loaded] = useFonts({
        MontsRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontsSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        MontsBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    })


    const handleOnMore = () => {
        if (page < 10) {
            console.log(page)
            setPage(page + 1)
        }
    }


    if (!loaded) return null;
    return (
        <SafeAreaView className='px-5 mt-12 pb-[300px]'>
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
            {
                !loading ?
                    searchItem.length ?
                        <FlatList
                            data={search.results}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <Gallery data={item} />}
                            keyExtractor={(item) => item.id}
                        >
                        </FlatList>
                        : <FlatList
                            data={images}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <Gallery data={item} />}

                            keyExtractor={(item) => item.id}
                        />
                            ? <FlatList
                                data={filtered}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <Gallery data={item} />}

                                keyExtractor={(item) => item.id}
                            >
                            </FlatList>
                            : ''
                    : <Loading />

            }
            <TouchableOpacity className=' mt-5 w-auto text-center mx-auto' onPress={handleOnMore}>
                <Button title='Load More' ></Button>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default FavouriteScreen