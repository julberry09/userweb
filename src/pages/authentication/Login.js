import React, { useState } from 'react';
import {ACCESS_TOKEN,signinById,signin } from '../../api/user';
import {Link,Button,TextField,Grid,Container,Typography} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
//import qs from 'qs';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store';

const Login = props => {

  const navigate = useNavigate();

  let dispatch = useDispatch();

  //const data = { id: Id, pw: Password, actor: "admin" };

  const [inputId, setInputId] = useState([]);
  const [inputPw, setInputPw] = useState([]);

  const handleInputId = (e) => {
      setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  }

  const onClickLogin = event=>{

    event.preventDefault();
    const data            = new FormData(event.target) ;
    const userid          = data.get('userid') ;
    const userpassword    = data.get('password') ;
    const usermailaddress = '';
    const status          = 'ACTIVATED';
    const usertype        = 'CUSTOMER';
    const token           = '' ;

    signin({ userId:userid,userPassword: userpassword, userMailAddress: usermailaddress,
            status:status ,userType:usertype ,token: token
    }).then((response) => {

      if (response.accessToken) {
        try{
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          //alert(response.accessToken);
          console.log('response', response.accessToken );
          //login 관련 response dto 추가 예정 (이름,팀)
          dispatch(
            setUserInfo({
              userId     :response.key,
              userName   :'Julia Kim',
              userTeam   :'금융Digital2부문',
              email      :'test111',
              userStatus :'',
              userType   :''
            }));

        }catch(e){
          alert('로그인 오류');
        }
        navigate('/mypage');
      }
    });
/*
try{
    const data = { userId          : inputId ,
                   userPassword    : inputPw,
                   userMailAddress : "",
                   status          : "ACTIVATED",
                   userType        : "CUSTOMER",
                   token           :""
                 };
   var params = new URLSearchParams();
   params.append('userId', inputId);
   params.append('userPassword', inputPw);
   params.append('userMailAddress', '');
   params.append('status', 'ACTIVATED');
   params.append('userType', 'CUSTOMER');
   params.append('token', '');

   alert("qs-ver :" + qs.stringify(data));
   alert("param :"  + params);

   const response = await signinById(params); //qs.stringify(data)

   const response1 =
    await axios.post(`http://localhost:8081/users/auth/signin`,{data},{
    headers: { "Content-Type": `application/json`}});
      console.log('response', response );
      console.log('res.data.userId :: ', response.data.userId)
      console.log('res.data.msg :: ', response.data.msg)
    await setData(!response.message ? response : []);
  }catch(e){
    console.log('error 출력'+ e);
  }
  */
  //await setIsLoading(false);
 }
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={onClickLogin}>
        {" "}
        {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
            /> */}
            <TextField
              variant="outlined"
              required
              fullWidth
              id="userid"
              label="사용자아이디"
              name="userid"
              autoComplete="off"
              value={inputId}
              onChange={handleInputId}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              value={inputPw}
              onChange={handleInputPw}
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Sign in
            </Button>
          </Grid>
          <Link href="/signup" variant="body2">
            <Grid item>New to Mungta? Create an account .</Grid>
          </Link>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
