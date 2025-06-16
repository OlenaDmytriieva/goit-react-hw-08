import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
// import { selectTextFilter } from './filtersSlice';
import { logOut } from "../auth/operations";

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
  .addCase(fetchContacts.pending, (state) => {
    state.loading = true;
  })
  .addCase(fetchContacts.fulfilled, (state, action) => {
    state.loading = false,
    state.items = action.payload;
    state.error = null;
  })
  .addCase(fetchContacts.rejected, (state, action) => {
    state.loading = false,
    state.error = action.payload;
  })
  .addCase(deleteContact.pending, (state) => {
    state.loading = true;
  })
  .addCase(deleteContact.fulfilled, (state, action) => {
    state.loading = false,
    state.error = null,
    state.items = state.items.filter((item) => item.id !== action.payload.id);
  })
  .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })   
  .addCase(addContact.pending, (state) => {
    state.loading = true;
  })
  .addCase(addContact.fulfilled, (state, action) => {
    state.loading = false,
    state.items.push(action.payload);
    state.error = null;
  })
   .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
  })
  .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
      }),
});

export default contactSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;

// export const selectLoading = (state) => state.contacts.loading;

// export const selectError = (state) => state.contacts.error;

// export const getVisibleContacts = createSelector([selectContacts, selectTextFilter], 
//   (contacts, filter) => {
//   return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
// }
// );