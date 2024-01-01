/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


export default function ElevatedCards() {
    return (
        <View>
           <Text style={styles.headingText}> Elevated Cards </Text>
           <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>Horizontally</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCards]}>
                    <Text>...</Text>
                </View>
           </ScrollView>
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
        padding: 8,
    },
    card:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    ElevatedCards: {
        backgroundColor: 'goldenrod',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: 'grey',
        shadowOpacity: 0.6,
        shadowRadius: 2,
    },
})