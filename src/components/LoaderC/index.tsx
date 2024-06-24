import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../../helpers';

export default () => {
  return (
    <View style={[styles.wrapper]}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    top: '50%',
    left: 0,
    right: 0,
  },
});
