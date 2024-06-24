import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useLogOut} from '../../hooks/useLogOut';
import {colors} from '../../helpers';
import {useAvatar} from '../../hooks/useAvatar';
import auth from '@react-native-firebase/auth';
import {styles} from './style';
import ButtonC from '../../components/ButtonC';
import LoaderC from '../../components/LoaderC';

export default () => {
  const [currentUser, setCurrentUser] = useState(auth().currentUser);

  const {LogOut} = useLogOut();
  const {selectImage, isUploading} = useAvatar();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [isUploading]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {currentUser?.photoURL ? (
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: currentUser.photoURL,
              }}
            />
          </View>
        ) : (
          <View style={styles.avatarContainer}>
            <View style={[styles.noImageAvatar]}>
              <Text style={styles.textLogo}>
                {currentUser?.displayName?.charAt(0)}
              </Text>
            </View>
          </View>
        )}

        <Pressable onPress={selectImage} style={{marginTop: 20}}>
          <Text style={styles.upload}>Upload avatar</Text>
        </Pressable>
        {isUploading && <LoaderC />}

        <Text style={styles.name}>{currentUser?.displayName}</Text>

        <Text style={styles.email}>{currentUser?.email}</Text>
        <ButtonC color={colors.blue} text="Log Out" handleSubmit={LogOut} />
      </View>
    </View>
  );
};
