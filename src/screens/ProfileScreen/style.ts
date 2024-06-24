import {StyleSheet} from 'react-native';
import {colors} from '../../helpers';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  avatar: {
    width: 150,
    borderRadius: 75,
    height: 150,
    overflow: 'hidden',
  },
  noImageAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: 150,
    borderRadius: 75,
    height: 150,
    overflow: 'hidden',
    backgroundColor: colors.dark,
    borderWidth: 2,
    borderColor: colors.blue,
    color: colors.blue,
  },
  avatarContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },

  container: {
    padding: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  text: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.blue,
  },
  textLogo: {
    fontWeight: '500',
    fontSize: 50,
    color: colors.blue,
  },
  name: {
    marginTop: 25,
    fontSize: 30,
    color: colors.blue,
  },
  email: {
    marginTop: 25,
    fontSize: 20,
    color: colors.blue,
    marginBottom: 30,
  },

  upload: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.blue,
  },
});
