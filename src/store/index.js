import { configureStore, createSlice } from '@reduxjs/toolkit'

let userInfo  = createSlice({
    name: 'userInfo',
    initialState: {
      userId     :'',
      userName   :'',
      userTeam   :'',
      email      :'',
      userStatus :'',
      userType   :'',
    },
    reducers: {
    	setUserInfo(state, action){
            state.userId    = action.payload.userId;
            state.userName  = action.payload.userName;
            state.userTeam  = action.payload.userTeam;
            state.email     = action.payload.email;
            state.userStatus= action.payload.userStatus;
            state.userType  = action.payload.userType;
        },
    },
});

export let { setUserInfo } = userInfo.actions;

const store = configureStore({
	reducer: {
    userInfo: userInfo.reducer,
    },
});

export default store;
