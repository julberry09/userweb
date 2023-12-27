//import {axios} from '../index';
import {call} from '../utils/fetchHandler';
export const ACCESS_TOKEN = 'login-token';

/////////////////////////////////////////////////////////////////////////
// 사용자 로그인
export const signinById = async params => {
 ;// axios.get('/users/auth/signin', {params});
}
/////////////////////////////////////////////////////////////////////////
// 사용자 등록
export const signup = userDto => {
  return call('/mungta/users/auth/signup', 'POST', userDto);
}

//사용자 로그인
export  const signin = userLoginDto => {
    return  call('/mungta/users/auth/signin', 'POST', userLoginDto);
}

// 사용자 로그아웃
export const signout = () => {
  localStorage.setItem(ACCESS_TOKEN, null);
 // window.location.href = "/login";
}
/////////////////////////////////////////////////////////////////////////

// /**
//  * @param {{id: number}} params
//  */
// export const getQuestionById = async params =>
//     axios.get('/question/question-show', {params});

// /**
//  * @param {{id: number}} params
//  */
// export const deleteQuestionById = async params =>
//     axios.delete('/question/question', {params});
