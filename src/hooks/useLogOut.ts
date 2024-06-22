import auth from '@react-native-firebase/auth';
import {ScreenNames} from '../helpers';
import {useNavigation} from '@react-navigation/native';

export const useLogOut = () => {
  const navigation = useNavigation();
  const LogOut = async () => {
    await auth().signOut();
    navigation.navigate(ScreenNames.RegisterScreen as never);
  };

  return {LogOut};
};
