import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {usePhotos} from '../../hooks/usePhotos';
import PhotoCard from '../../components/PhotoCard';

export default () => {
  const {photos} = usePhotos();

  return (
    <View style={styles.wrapper}>
      {photos?.length > 0 && (
        <FlatList
          data={photos}
          renderItem={({item}) => <PhotoCard photo={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
});
