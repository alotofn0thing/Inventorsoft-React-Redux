import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'setup',
	initialState: {
		// Dark theme comes by default
		theme: {
			isDark: true,
			colors: {
				primary: '#121212',
				secondary: '#1a2027',
				text: 'white',
				special: '#e64a5c',
			},
		},
	},
	reducers: {
		// Change from dark to light theme
		toggleTheme: state => {
			state.theme.isDark = !state.theme.isDark; // Reverse the Boolean Value
			state.theme.colors = state.theme.isDark
				? {
						primary: '#121212',
						secondary: '#1a2027',
						text: 'white',
						special: '#e64a5c',
				  }
				: {
						primary: '#fafafa',
						secondary: '#dbdbdb',
						text: 'black',
						special: '#e64a5c',
				  };
		},
	},
});
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
