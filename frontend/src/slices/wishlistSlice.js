import { createSlice } from "@reduxjs/toolkit";

const wishlistInitialState = {
	items: [],
	viewedItem: [],
};

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState: wishlistInitialState,
	reducers: {
		updateWishlist: (state, action) => { 

            const isLiked = action.payload.liked
			//check to see if item already exist in the array
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex === -1) {
				// If not, push projectObj to state.items
                if(action.payload.liked){
				    state.items = [...state.items, action.payload];
                }
			} else {
				// If it does exist, update the liked status
                if(isLiked){
                    state.items[existingItemIndex] = {
                        ...state.items[existingItemIndex],
                        liked: action.payload.liked,
                    };                    
                } else {
                    //remove the item from state.items
                    state.items = [
                        ...state.items.slice(0, existingItemIndex),
                        ...state.items.slice(existingItemIndex + 1),
                    ];
                }

			}
		},
	},
});

export const { updateWishlist } = wishlistSlice.actions;
