import React from 'react';
import {signup} from '../../api/user';
import {useNavigate} from 'react-router-dom';
import {Button,TextField,Link,Grid,Container,Typography} from '@material-ui/core';

const SignUp = props => {

  const navigate = useNavigate();

  const onClickSignup = (event) => {

    event.preventDefault();
    const data            = new FormData(event.target) ;
    const userid          = data.get('userid') ;
    const userpassword    = data.get('password') ;
    const usermailaddress = data.get('useremail') ;
    const username        = data.get('username') ;
    const userphoto       = '' ; //data.get('userphoto');
    const userteamname    = data.get('userteamname');
    const usergender      = '' ; //data.get("usergender");
    const driveryn        = '' ; //data.get("driveryn");
    const settlementurl   = '' ; //data.get("settlementurl");
    const cartype         = '' ; //data.get("cartype");
    const carnumber       = '' ; //data.get("carnumber");
    const penaltycount    = '' ; //data.get("penaltycount");
    const status          = 'ACTIVATED'; //data.get("status");
    const usertype        = 'CUSTOMER'; //data.get("usertype");
    const token           = '' ; //data.get("token");

    signup({ userId:userid, userName: username, userPassword: userpassword, userMailAddress: usermailaddress,
             userPhoto:userphoto ,userTeamName:userteamname ,userGender:usergender ,driverYn:driveryn ,
             settlementUrl:settlementurl ,carType:cartype ,carNumber:carnumber ,penaltyCount:penaltycount ,
             status:status ,userType:usertype ,token: token
     }).then((response) => {

      // 회원가입 정상 이동
      if(response.status ===  200 || response.status === 204 ){
        if (window.confirm('회원가입이 완료되었습니다. 로그인 화면으로 이동하시겠습니까?')) {
          navigate('/login');
        } else {
          navigate('/');
        }
      }else{//not useed (handler 에서 처리해서 가능성 없음)
        alert('회원가입시 오류가 발생했습니다.');
      }
     });
  }
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <form noValidate onSubmit={onClickSignup}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              Welcome to Mungta!!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="userid"
              variant="outlined"
              required
              fullWidth
              id="userid"
              label="사용자ID"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="사용자이름"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="useremail"
              label="이메일 주소"
              name="useremail"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="userteamname"
              variant="outlined"
              required
              fullWidth
              id="userteamname"
              label="소속팀"
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
              Sign up
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
            You already have an account please Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SignUp;
