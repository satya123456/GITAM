import { createSlice } from "@reduxjs/toolkit";

type ProfileType = {
    avatar : string,
    name: string;
}

const initialState: ProfileType = {
    avatar: 'banu.png',
    name : 'Banu Prakash'
}
const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers: {
    }
});

export default profileSlice.reducer;