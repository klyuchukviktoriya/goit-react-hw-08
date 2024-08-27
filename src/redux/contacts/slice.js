import { createSlice } from "@reduxjs/toolkit";
import { getContacts, deleteContact, addContact, editContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
    items: [
        {
            name: "Jacob Mercer",
            number: "761-23-96",
        },
    ],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            // getContacts
            .addCase(getContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // deleteContact
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(({ id }) => id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // addContact
            .addCase(addContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // editContact
            .addCase(editContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex((contact) => contact.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(editContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // logout
            .addCase(logout.fulfilled, () => initialState);
    },
});

export const contactsReducer = contactsSlice.reducer;
