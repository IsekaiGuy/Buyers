import React from 'react';
import {View, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../redux/slices/authSlice';
import {IUser} from '../redux/slices/authSlice';

interface ISignin {
  navigation: NativeStackNavigationProp<any, any>;
}

const SigninScreen = ({navigation}: ISignin) => {
  const dispatch = useDispatch();
  const handleLogin = (props: IUser) => {
    const user = {
      isLoggedIn: props.userAuth.isLoggedIn,
      email: props.userAuth.email,
      userName: props.userAuth.userName,
    };

    dispatch(setSignIn(user));
  };

  GoogleSignin.configure({
    webClientId:
      '25567558102-3tbjtc1v8am9r2jst2lvr6151nan3662.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(user => {
        if (user) {
          console.log(user);
          handleLogin({
            userAuth: {
              isLoggedIn: user.user.emailVerified,
              userName: user.user.displayName,
              email: user.user.email,
            },
          });
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button title="Google" onPress={signInWithGoogleAsync} />
    </View>
  );
};

export default SigninScreen;
