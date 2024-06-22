import React, {useEffect} from 'react';
import {View} from 'react-native';
import ButtonC from '../../components/ButtonC';
import {colors} from '../../helpers';
import {useLogOut} from '../../hooks/useLogOut';

export default () => {
  const {LogOut} = useLogOut();

  useEffect(() => {
    fetchAvatar();
  }, []);

  const fetchAvatar = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    console.log(data, 'data');
  };

  return (
    <View>
      <ButtonC color={colors.blue} text="Log Out" handleSubmit={LogOut} />
    </View>
  );
};
