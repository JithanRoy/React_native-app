/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}> Flat Cards </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Bluee</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
    },
    card:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne:{
        backgroundColor: 'red',
    },
    cardTwo:{
        backgroundColor: 'green',
    },
    cardThree:{
        backgroundColor: 'blue',
    }
})