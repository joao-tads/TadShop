import React from 'react';
import { View, Text, TouchableOpacity, image } from 'react-native';

export default function Shoes() {
    return (
        <TouchableOpacity>
            <Image
                source={require('../../assets/img/1.png')}
                style={StyleSheet.ShoesImg}
            />
            <Text>Nike</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    ShoesImg: {

    },
    ShoesText: {

    }
});