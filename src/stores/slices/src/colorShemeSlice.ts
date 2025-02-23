import { COLOR_SCHEMES } from '@/app/constants';
import { createSlice } from '@reduxjs/toolkit';

export interface ColorSchemeState {
  value: string;
}

const initialState: ColorSchemeState = {
  value: COLOR_SCHEMES.LIGHT,
};

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    getColorScheme: state => {
      if (
        localStorage.getItem('color-scheme') === COLOR_SCHEMES.DARK ||
        (!localStorage.getItem('color-scheme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        state.value = COLOR_SCHEMES.DARK;
        document.documentElement.classList.add('dark');
      }
    },
    toggleColorScheme: state => {
      state.value = state.value === COLOR_SCHEMES.DARK ? COLOR_SCHEMES.LIGHT : COLOR_SCHEMES.DARK;
      document.documentElement.classList.toggle(COLOR_SCHEMES.DARK);
      localStorage.setItem('color-scheme', state.value);
    },
  },
});

export const { getColorScheme, toggleColorScheme } = colorSchemeSlice.actions;
export default colorSchemeSlice.reducer;
