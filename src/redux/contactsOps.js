import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://683821052c55e01d184c0bc5.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async (_, thunkAPI) => {
    try { 
        const res = await axios.get("/contacts");
        return res.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);
  

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data;
    } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
    }
  }
);  

export const addContact = createAsyncThunk(
    "contacts/createContact", 
    async (newContact, thunkAPI) => {
        try {
        const res = await axios.post("/contacts", newContact);
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }  
}
);



