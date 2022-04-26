import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface musicPlayerState {
  track: string | undefined;
  isPlaying: boolean;
}

const initialState = { track: undefined, isPlaying: false } as musicPlayerState;

const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    setTrack(state, { payload }: PayloadAction<string>) {
      if (state.track === payload) {
        state.isPlaying = !state.isPlaying;
      } else {
        state.track = payload;
        state.isPlaying = true;
      }
    },
  },
});

export const { setTrack } = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
