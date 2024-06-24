import auth from '@react-native-firebase/auth';
import {ScreenNames} from '../helpers';
import {useNavigation} from '@react-navigation/native';

export const useLogOut = () => {
  const navigation = useNavigation();
  const LogOut = async () => {
    navigation.navigate(ScreenNames.RegisterScreen as never);
    await auth().signOut();
  };

  return {LogOut};
};
