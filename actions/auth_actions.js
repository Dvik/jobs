import { AsyncStorage } from 'react-native';
import {
	FACEBOOK_LOGIN_SUCEESS
} from './types';
import { Facebook } from 'expo';

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		dispatch({ type: FACEBOOK_LOGIN_SUCEESS, payload: token })
	} else {
		doFacebookLogin();
	}
};

const doFacebookLogin = () => {
	
}