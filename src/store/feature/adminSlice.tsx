import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { IAdminLoginRequest } from '../../models/IAdminLoginRequest'
import apis from '../../constant/RestApis'
import { IBaseResponse } from '../../models/IBaseResponse'

interface IAdminState {
    isAuth: boolean,
    isLoginLoading: boolean
}

const initialAdminState: IAdminState = {
    isAuth: false,
    isLoginLoading: false
}

export const fetchAdminLogin = createAsyncThunk(
    'admin/fetchAdminLogin',
    async (payload: IAdminLoginRequest) => {
        return await fetch(apis.adminService + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)

        }).then(data => data.json())
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState: initialAdminState,
    reducers: {
        adminLogin(state) {
            state.isAuth = true;
        },
        adminLogOut(state) {
            state.isAuth = false;
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchAdminLogin.pending, (state) => {
            state.isLoginLoading = true;
        })
        build.addCase(fetchAdminLogin.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoginLoading = false;
            if(action.payload.code === 200){
                state.isAuth = true;
                localStorage.setItem('adminToken', action.payload.data);
            }
        })
    }
})

export const {
    adminLogin, adminLogOut
} = adminSlice.actions;

export default adminSlice.reducer;