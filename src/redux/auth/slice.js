import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const initValues = {
    user: null, // Используйте null, если это более логично
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const handleAuthFulfilled = (state, action) => {
    state.isLoggedIn = true;
    state.user = action.payload.user;
    state.token = action.payload.token;
};

const handleLogoutFulfilled = (state) => {
    state.user = null;
    state.token = null;
    state.isLoggedIn = false;
};

const handleRefreshUserFulfilled = (state, action) => {
    state.isLoggedIn = true;
    state.user = action.payload;
    state.isRefreshing = false;
};

const handleRejected = (state, action) => {
    console.error("Error:", action.payload); 
    state.isRefreshing = false;
};

const authSlice = createSlice({
    name: "auth",
    initialState: initValues,
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, () => console.log("Register pending"))
            .addCase(register.fulfilled, handleAuthFulfilled)
            .addCase(register.rejected, handleRejected)
            .addCase(login.pending, () => console.log("Login pending"))
            .addCase(login.fulfilled, handleAuthFulfilled)
            .addCase(login.rejected, handleRejected)
            .addCase(logout.pending, () => console.log("Logout pending"))
            .addCase(logout.fulfilled, handleLogoutFulfilled)
            .addCase(logout.rejected, handleRejected)
            .addCase(refreshUser.pending, (state) => {
                console.log("Refresh user pending");
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
            .addCase(refreshUser.rejected, handleRejected);
    },
});

export const authReducer = authSlice.reducer;
