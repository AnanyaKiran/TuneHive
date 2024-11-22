import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlaylists = createAsyncThunk('spotify/fetchPlaylists', async (token) => {
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
});

const spotifySlice = createSlice({
    name: 'spotify',
    initialState: {
        playlists: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaylists.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.loading = false;
                state.playlists = action.payload.playlists.items;
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default spotifySlice.reducer;
