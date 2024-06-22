import {FormData} from '../types';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useLogin} from './useLogin';

interface Props {
  reset: () => void;
}

export const useCreateUser = ({reset}: Props) => {
  const {Login} = useLogin({reset});

  const [isLoading, setIsLoading] = useState(false);

  const createUser = async (data: FormData) => {
    setIsLoading(true);

    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (user) {
        await user.updateProfile({
          displayName: data.name,
        });

        Alert.alert(
          '',
          'Your account has been created. Do you want to Login?',
          [
            {
              text: 'Yes',
              onPress: () => Login(data),
              style: 'cancel',
            },
            {text: 'No', onPress: () => null},
          ],
        );
        setIsLoading(false);
        reset();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return {createUser, isLoading};
};
