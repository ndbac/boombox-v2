import {createAsyncThunk} from "@reduxjs/toolkit";
import {Track} from "../slices/player.slice.ts";
import YoutubeService from "../../services/youtube.service.ts";

export const prepareTrack = async (youtubeUrl: string) => {
  const youtubeId = YoutubeService.parseYtbLink(youtubeUrl);
  return {
    id: String(youtubeId),
    picture: `https://img.youtube.com/vi/${youtubeId}/default.jpg`,
    creationTime: new Date().getTime(),
  }
}

export const enqueueTrack = createAsyncThunk<Track, Track, any>('player/enqueue', async (track: Track, thunkAPI) => {
  return track;
});
