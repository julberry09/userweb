import React from 'react';
import { signout} from '../../utils/fetchHandler';
import { Link,Button,Container} from '@material-ui/core';
import pic from '../../assets/images/users/avatar-4.png'
import { useSelector } from 'react-redux';

const Mypage = () => {

  let userInfo    = useSelector(state =>  state.userInfo );
  //alert(userInfo.userId+' === '+userInfo.userName + userInfo.email);
  if(!userInfo.userId ){
    window.location.href = "/login";
  }
  return (
    <div className="Mypage">
      <header className="Mypage-header">
        <img src={pic} className="Mypage-photo" alt="" />

        <p>{userInfo.userName} : {userInfo.userId}<br></br>{userInfo.userTeam}</p>
      </header>
      <Container>
      <Link to="/mypage/modify">
        <Button type="submit" variant="contained" color="primary">회원정보수정</Button>
      </Link>
      <span>  </span>
      <Link to="/mypage/modify">
        <Button type="submit" variant="contained" color="primary">관리자회원변경</Button>
      </Link>
      </Container>
      <p></p>
      <div className="Mypage-detail">
      <ul><Link to="/review">리뷰보기</Link></ul>
      <ul><Link to="/accuse">신고내역보기</Link></ul>
      <ul><Link to="/party">파티신청하기</Link></ul>
      </div>
      {/* <Routes>
        <Route path="/signup" exact={true} element={SignUp} />
        <Route path="/login"  exact={true} element={Login}  />
        <Route path="/login"  exact={true} element={Login}  />
      </Routes> */}
    </div>
  );
};
export default Mypage;
