import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/storage';

export const useAvatar = () => {
  const [isUploading, setIsUploading] = useState(false);
  const currentUser = auth().currentUser;

  const selectImage = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});

      if (response.assets?.length) {
        const imageUri = response.assets[0].uri as string;

        if (imageUri !== null) {
          await updateProfilePhoto(imageUri);
        }
      }
    } catch (error) {
      Alert.alert('', error as string);
    }
  };

  const updateProfilePhoto = async (imageUri: string) => {
    setIsUploading(true);
    try {
      if (currentUser?.uid) {
        const storageRef = firebase
          .storage()
          .ref('avatars')
          .child(currentUser.uid);
        await storageRef.putFile(imageUri);

        const downloadURL = await storageRef.getDownloadURL();

        await currentUser.updateProfile({
          photoURL: downloadURL,
        });
      }
    } catch (error) {
      setIsUploading(false);
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return {selectImage, isUploading};
};
