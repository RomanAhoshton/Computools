import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {fontSizes} from '../../helpers';

interface ButtonProps {
  text: string;
  handleSubmit: () => void;
  color?: string;
}

export default ({text, handleSubmit, color}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, {borderColor: color}]}
      onPress={handleSubmit}>
      <Text style={[styles.textButton, {color: color}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: fontSizes.medium,
    fontWeight: '500',
  },
});
