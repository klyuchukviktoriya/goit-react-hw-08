import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const authAPI = {
    setAuthorization(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    resetAuthorization() {
        axios.defaults.headers.common["Authorization"] = "";
    },
    register(credentials) {
        return axios.post("users/signup", credentials);
    },
    login(user) {
        return axios.post("users/login", user);
    },
    logout() {
        return axios.post("users/logout");
    },
    refreshUser() {
        return axios.get("users/current");
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await authAPI.register(credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
        try {
            const res = await authAPI.login(user);
            authAPI.setAuthorization(res.data.token);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const logout = createAsyncThunk(
    "/users/logout",
    async (_, thunkAPI) => {
        try {
            await authAPI.logout();
            authAPI.resetAuthorization();
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async (_, thunkAPI) => {
        const { auth: { token } } = thunkAPI.getState();

        if (!token) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            authAPI.setAuthorization(token);
            const res = await authAPI.refreshUser();
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
