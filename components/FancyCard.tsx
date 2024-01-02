import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Icon</Text>
          <Text style={styles.cardLabel}>Dhaka, Bangladesh</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            possimus?
          </Text>
          <Text style={styles.cardFooter}>12 mins ago</Text>
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
    backgroundColor: 'lightgray',
    color: '#FFFFFF',
    shadowOffset: {
        width: 1,
        height: 1,
    }
  },
  cardImage: {
    height: 180,
    borderRadius: 5,
    marginBottom: 8,
  },
  cardBody: {
    margin: 8,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
  },
  cardDescription: {
    color: '#000000',
    fontSize: 14,
  },
  cardFooter: {
    color: '#000000',
  },
});
