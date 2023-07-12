import { TextInput, Image, SafeAreaView, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import Button from '../components/Button';
import Toast from 'react-native-toast-message';
import Loading from '../components/Loading';
import FavouriteHeader from '../components/FavouriteHeader';

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
        <SafeAreaView className='px-5 mt-12 pb-[10px]'>
            <View>
                {
                    !loading ?
                        searchItem.length ?
                            <FlatList
                                ListFooterComponent={
                                    !searchItem &&
                                    <TouchableOpacity onPress={handleOnMore} className='mt-5 text-center'>
                                        <Button title='Load More' />
                                    </TouchableOpacity>
                                }
                                data={search.results}
                                ListHeaderComponent={
                                    <FavouriteHeader
                                        searchItem={searchItem}
                                        setSearchItem={setSearchItem}
                                        images={images}
                                        activeGenre={activeGenre}
                                        setActiveGenre={setActiveGenre}
                                        setImages={setImages}
                                        filtered={filtered}
                                        setFiltered={setFiltered}
                                        page={page} />
                                }

                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <Gallery data={item} />}
                                keyExtractor={(item) => item.id}
                            >
                            </FlatList>
                            : <FlatList
                                ListFooterComponent={
                                    !searchItem &&
                                    <TouchableOpacity onPress={handleOnMore} className='mt-5 text-center'>
                                        <Button title='Load More' />
                                    </TouchableOpacity>
                                }
                                data={images}
                                ListHeaderComponent={
                                    <FavouriteHeader
                                        searchItem={searchItem}
                                        setSearchItem={setSearchItem}
                                        images={images}
                                        activeGenre={activeGenre}
                                        setActiveGenre={setActiveGenre}
                                        setImages={setImages}
                                        filtered={filtered}
                                        setFiltered={setFiltered}
                                        page={page} />
                                }
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <Gallery data={item} />}

                                keyExtractor={(item) => item.id}
                            />
                                ? <FlatList
                                    ListFooterComponent={
                                        !searchItem &&
                                        <TouchableOpacity onPress={handleOnMore} className='mt-5 text-center'>
                                            <Button title='Load More' />
                                        </TouchableOpacity>
                                    }
                                    ListHeaderComponent={
                                        <FavouriteHeader
                                            searchItem={searchItem}
                                            setSearchItem={setSearchItem}
                                            images={images}
                                            activeGenre={activeGenre}
                                            setActiveGenre={setActiveGenre}
                                            setImages={setImages}
                                            filtered={filtered}
                                            setFiltered={setFiltered}
                                            page={page} />
                                    }
                                    data={filtered}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => <Gallery data={item} />}

                                    keyExtractor={(item) => item.id}
                                >
                                </FlatList>
                                : ''
                        : <Loading />

                }
            </View >
        </SafeAreaView >
    )
}

export default FavouriteScreen