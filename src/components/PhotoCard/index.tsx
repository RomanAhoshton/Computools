import React, {memo} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Photos} from '../../types';
import {colors} from '../../helpers';

interface PhotoProps {
  photo: Photos;
}

export default memo(({photo}: PhotoProps) => {
  return (
    <View style={styles.photoCard}>
      <Image source={{uri: photo.download_url}} style={styles.image} />

      <Text style={styles.author}>{photo.author}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  photoCard: {
    borderRadius: 20,
    borderColor: colors.blue,
    borderWidth: 2,
    height: 250,
    marginBottom: 20,
  },

  author: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 15,
  },
});
