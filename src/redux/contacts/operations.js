import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const handleError = (error, thunkAPI) => {
    return thunkAPI.rejectWithValue(error.message || "An error occurred");
};

export const getContacts = createAsyncThunk(
    "contacts/getContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("contacts");
            return response.data;
        } catch (error) {
            return handleError(error, thunkAPI);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number}, thunkAPI) => {
        try {
            const response = await axios.post("contacts", {
                name,
                number,
            });
            return response.data;
        } catch (error) {
            return handleError(error, thunkAPI);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${id}`);
            return response.data;
        } catch (error) {
            return handleError(error, thunkAPI);
        }
    }
);

export const editContact = createAsyncThunk(
    "contacts/editContact",
    async ({ id, contactChange }, thunkAPI) => {
        try {
            const response = await axios.patch(`contacts/${id}`, contactChange);
            return response.data;
        } catch (error) {
            return handleError(error, thunkAPI);
        }
    }
);
