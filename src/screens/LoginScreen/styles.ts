import {StyleSheet} from 'react-native';
import {colors, space} from '../../helpers';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.dark,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: space.large,
  },

  textBlock: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.blue,
    marginVertical: space.small,
  },

  title: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.blue,
    marginVertical: space.large,
    textTransform: 'uppercase',
  },
  keyboardAvoiding: {
    flex: 1,
  },

  actions: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
});
