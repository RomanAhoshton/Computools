import React, {useRef} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Pressable,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, colors, fontSizes} from '../../helpers';
import {styles} from './styles';
import InputAuth from '../../components/InputAuth';
import {useCreateUser} from '../../hooks/useCreateUser';
import ButtonC from '../../components/ButtonC';
import TextC from '../../components/TextC';
import {FormData} from '../../types';
import LoaderC from '../../components/LoaderC';

export default () => {
  const formRef = useRef<null | ScrollView>(null);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const {createUser, isLoading} = useCreateUser({reset});
  const onSubmit = (data: FormData) => {
    createUser(data);
  };
  return (
    <SafeAreaView style={[styles.wrapper]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        style={styles.keyboardAvoiding}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.container} ref={formRef}>
            <View style={styles.textBlock}>
              <Text style={styles.title}>Computools</Text>
              <Text style={styles.subtitle}> Test Task </Text>
            </View>
            {isLoading && <LoaderC />}
            <Controller
              control={control}
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Full Name must be at least 8 characters long',
                },
              }}
              render={({field: {onChange, value}}) => (
                <InputAuth
                  errors={errors.name}
                  label="Full Name"
                  value={value}
                  setValue={onChange}
                />
              )}
              name="name"
            />

            <Controller
              control={control}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({field: {onChange, value}}) => (
                <InputAuth
                  label="Email"
                  value={value}
                  setValue={onChange}
                  errors={errors.email}
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              }}
              render={({field: {onChange, value}}) => (
                <InputAuth
                  label="Password"
                  value={value}
                  setValue={onChange}
                  errors={errors.password}
                  secure={true}
                />
              )}
              name="password"
            />
            <View style={styles.actions}>
              <ButtonC
                text="Create Account"
                handleSubmit={handleSubmit(onSubmit)}
                color={colors.blue}
              />
              <Pressable
                onPress={() =>
                  navigation.navigate(ScreenNames.LoginScreen as never)
                }
                style={{marginTop: 20}}>
                <TextC
                  styles={{
                    color: colors.blue,
                    fontSize: fontSizes.medium,
                  }}
                  text="Already have account ? Log in"
                />
              </Pressable>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
