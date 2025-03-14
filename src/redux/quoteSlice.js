import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
    "quote/fetchQuote",
    async () => {
        const response = await fetch("https://catfact.ninja/fact"); //https://api.quotable.io/random this api is failed to fetch
        const data = await response.json();
        return data.fact;
    }
)
const quoteSlice = createSlice(
    {
        name: "quote",
        initialState: {
            quote: "",
            favorite: JSON.parse(localStorage.getItem("favorite")) || [],
            loading: false,
            error: null
        },
        reducers: {
            addToFavorite: (state) => {
                if (!state.favorite.includes(state.quote)){
                    state.favorite.push(state.quote);
                    localStorage.setItem("favorite", JSON.stringify(state.favorite));
                }
            },
            removeFavorite: (state, action) => {
                state.favorite = state.favorite.filter((quote) => quote !== action.payload);
                localStorage.setItem("favorite", JSON.stringify(state.favorite));
            },

        },

        extraReducers: (builder) => {
            builder
            .addCase(fetchQuote.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuote.fulfilled, (state, action) => {
                state.quote = action.payload;
                state.loading = false;
            })
            .addCase(fetchQuote.rejected, (state, action) =>{
                state.loading = false;
                state.error = "Failed to fetch quote";
            });
        },


});

export const { addToFavorite, removeFavorite } = quoteSlice.actions;
export default quoteSlice.reducer;