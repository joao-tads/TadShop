import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../components/Shoes';

export default function Home() {

    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.ImageTop} >
                <Image
                    source={require('../../assets/img/Title.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.header}>
                <View style={styles.textSerarch}>
                    <TextInput name='pesquisa' style={[styles.serarch, { paddingLeft: 10 }]} placeholder='Pesquisar' />
                    <TouchableOpacity style={{ position: 'relative', left: '42%' }}>
                        <FontAwesome
                            name="search"
                            size={15}
                            color="#D8d8d8"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={{ position: 'absolute', right: '0%', alignSelf: 'center' }}>
                        <FontAwesome
                            name="user"
                            size={24}
                            color="#0c185c"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: '9%', alignSelf: 'center' }}>
                        <Ionicons
                            name="notifications"
                            size={24}
                            color="#0c185c"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: '20%', alignSelf: 'center' }}>
                        <FontAwesome
                            name="shopping-cart"
                            size={24}
                            color="#0c185c"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/img/1.png')} cost="R$ 140,90" onClick={() => navigator.navigate('Detail')}>
                        Nike Air Die
                    </Shoes>
                    <Shoes img={require('../../assets/img/2.png')} cost="R$  280,90" onClick={() => navigator.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/img/3.png')} cost="R$ 140,90" onClick={() => alert('CLICOU!')}>
                        Nike Air Die
                    </Shoes>
                    <Shoes img={require('../../assets/img/4.png')} cost="R$  280,90" onClick={() => alert('CLICOU!')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/img/5.png')} cost="R$ 140,90" onClick={() => alert('CLICOU!')}>
                        Nike Air Die
                    </Shoes>
                    <Shoes img={require('../../assets/img/6.png')} cost="R$  280,90" onClick={() => alert('CLICOU!')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fc752b',
    },
    ImageTop: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: '5%',
        width: 300,
        height: 100,
    },
    imageContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton',
        fontSize: 26,
        marginHorizontal: '1%',
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    },
    textSerarch: {
        position: 'absolute',
        top: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c185c',
        left: '15%',
        borderRadius: 4,
        width: 160,
        height: 22,
    },
    serarch: {
        position: 'absolute',
        borderRadius: 3,
        left: '1.2%',
        width: 130,
        height: 18,
        backgroundColor: '#d9d9d9',
        color: 'black',
    },
});