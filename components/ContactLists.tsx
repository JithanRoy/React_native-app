/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactLists() {
    let contactList = [
        {
          uid: 1,
          name: "John Doe",
          status: "Online",
          demoImgUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          uid: 2,
          name: "Jane Smith",
          status: "Away",
          demoImgUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          uid: 3,
          name: "Bob Johnson",
          status: "Offline",
          demoImgUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          uid: 4,
          name: "Alice Williams",
          status: "Online",
          demoImgUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          uid: 5,
          name: "Mark Davis",
          status: "Away",
          demoImgUrl: "https://via.placeholder.com/150/92c952"
        }
        // Add more contacts as needed-
      ];
      
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView 
                style={styles.container}
                scrollEnabled={false}
            >
                {contactList.map(({uid, name, status, demoImgUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: demoImgUrl,
                            }}
                            style = {styles.userImage}
                        />
                        <View style={styles.textPart}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
        paddingLeft: 10,
    },
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#2980b9',
        margin: 6,
        borderRadius: 5,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
    },
    textPart: {
        flex: 1,
        justifyContent: 'center',
    },
    userStatus: {},
    userName: {},
})