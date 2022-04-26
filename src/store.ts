import React from "react";
import {combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoriteReducer } from "./pages/SingleArtist/store/favourites/favourites.reducers";
import { playlistReducer } from "./pages/SingleArtist/store/playlists/playlists.reducers";
import { albumsReducer } from "./pages/Albums/store/albums.reducers";
import musicPlayerReducer  from "./musicPlayer/musicPlayer.reducers";


export const rootReducer = combineReducers({
      favorites: favoriteReducer,
      albums:albumsReducer,
      playlists:playlistReducer,
      musicPlayer: musicPlayerReducer
    // user:userReducer,
  
  })
  
  
  export const store = configureStore({
    reducer:rootReducer
  })
  
  export type rootState = ReturnType<typeof rootReducer>