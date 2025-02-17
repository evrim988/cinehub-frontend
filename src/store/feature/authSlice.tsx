import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRegisterRequest } from "../../models/IRegisterRequest"
import { ILoginRequest } from "../../models/ILoginRequest"
import { IBaseResponse } from "../../models/IBaseResponse"
import apis from "../../constant/RestApis"

interface IAuthState {
  isAuth: boolean,
  isLoginLoading: boolean,
  isRegisterLoading: boolean
}

const initialAuthState: IAuthState = {
  isAuth: false,
  isLoginLoading: false,
  isRegisterLoading: false
}

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (payload: IRegisterRequest) => {
    return await fetch(apis.authService + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }
)

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (payload: ILoginRequest) => {
    return await fetch(apis.authService + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())

  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    userLogin(state) {
      state.isAuth = true;
    },
    userLogout(state) {
      localStorage.removeItem('token');
      state.isAuth = false;
    }
  },
  extraReducers: (build) => {
    build.addCase(fetchRegister.pending, (state) => {
      state.isRegisterLoading = true;
    })
    build.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
      state.isRegisterLoading = false;
     
    })
    build.addCase(fetchLogin.pending, (state) => {
      state.isLoginLoading = true;
    })
    build.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
      state.isLoginLoading = false;
      if (action.payload.code === 200) {
        localStorage.setItem('token', action.payload.data);
        state.isAuth = true;
      }
    })
  }
})

export const {
  userLogin,
  userLogout
} = authSlice.actions;

export default authSlice.reducer;

