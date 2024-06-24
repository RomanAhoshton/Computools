import React, {memo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {usePhotos} from '../../hooks/usePhotos';
import PhotoCard from '../../components/PhotoCard';
import {colors} from '../../helpers';
import {Photos} from '../../types';

interface Photo {
  item: Photos;
}

export default memo(() => {
  const {photos, refreshPhotos, loadMorePhotos, isRefreshing, isLoadingMore} =
    usePhotos();

  const renderItem = useCallback(
    ({item}: Photo) => <PhotoCard photo={item} />,
    [],
  );

  return (
    <View style={styles.wrapper}>
      {photos?.length > 0 && (
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={refreshPhotos}
            />
          }
          onEndReached={loadMorePhotos}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoadingMore ? (
              <ActivityIndicator size="large" color={colors.blue} />
            ) : null
          }
          ListFooterComponentStyle={styles.footerComponentStyle}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.dark,
    position: 'relative',
  },

  footerComponentStyle: {
    paddingBottom: 30,
  },
});
