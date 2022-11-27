import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: []},
    reducers: {
        addContact(state, action) {            
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);            
            state.items.splice(index, 1);            
        },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;