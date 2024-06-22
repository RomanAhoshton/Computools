import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Photos} from '../../types';

interface PhotoProps {
  photo: Photos;
}

export default ({photo}: PhotoProps) => {
  return (
    <View style={styles.photoCard}>
      <Image source={{uri: photo.download_url}} style={styles.image} />
      <Text>{photo.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },

  photoCard: {},
});
