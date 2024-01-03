/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text style={{color: '#FFFFFF', padding: 8,}} numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque sequi quis repudiandae, nulla cupiditate distinctio? Rem iusto in earum recusandae corrupti mollitia pariatur eligendi id, facilis esse dolorem nemo dolores eveniet voluptates consequuntur veritatis ipsa obcaecati consequatur aperiam sint?
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => openWebsite('https://reactnative.dev/docs/touchableopacity')}
            >
                <Text style={styles.footerContainer}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 370,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginLeft: 10,
  },
  cardElevated: {
    backgroundColor: '#2c3e50',
    color: '#FFFFFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    borderRadius: 6,
  },
  headingContainer: {},
  headerText: {
    color: '#FFFFFF',
    padding: 8,
  },
  bodyContainer: {},
  footerContainer: {
    color: '#f39c12',
    padding: 6,
  },

});
