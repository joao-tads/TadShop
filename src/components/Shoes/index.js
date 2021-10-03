import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

    function filterDesc(desc) {
        if (desc.length < 25) {
            return desc;
        }
        return `${desc.substring(0, 22)}...`;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={StyleSheet.ShoesImg}
            />
            <Text style={styles.ShoesText}>
                {filterDesc(props.children)}
            </Text>
            <View opaciy={4.0}>
                <Text style={styles.ShoesText}>
                    R$ 199,90
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ShoesImg: {
        width: 175,
        height: 175,
    },
    ShoesText: {
        fontSize: 16
    }
});