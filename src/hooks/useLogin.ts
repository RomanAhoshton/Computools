import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {ScreenNames} from '../helpers';
import {FormData} from '../types';

interface Props {
  reset: () => void;
}

export const useLogin = ({reset}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const Login = async (data: FormData) => {
    setIsLoading(true);

    try {
      const {user} = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (user.uid) {
        setIsLoading(false);
        reset();
        navigation.navigate(ScreenNames.TopTabs as never);
      }
    } catch (error) {
      if (error) {
        setIsLoading(false);
        console.error(error);
        reset();
      }
    }
  };
  return {
    Login,
    isLoading,
  };
};
